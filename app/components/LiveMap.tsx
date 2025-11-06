'use client';
import { useEffect, useState, useRef } from 'react';
import { Plane, WeatherData } from '../interfaces/LiveMap';
import { createClient } from '@supabase/supabase-js';
import NotificationBell from './NotificationBell';

let L: any;

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LiveMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<any>(null);
    const [planes, setPlanes] = useState<Map<string, Plane>>(new Map());
    const markers = useRef<Map<string, any>>(new Map());
    const trails = useRef<Map<string, any>>(new Map());
    const positionHistory = useRef<Map<string, [number, number][]>>(new Map());
    const [connected, setConnected] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);
    const [mapLoaded, setMapLoaded] = useState(false);

    // Authentification
    const [user, setUser] = useState<any>(null);
    const [userProfile, setUserProfile] = useState<any>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [weatherEnabled, setWeatherEnabled] = useState(false);
    const [showWindMarkers, setShowWindMarkers] = useState(false);
    const [weatherData, setWeatherData] = useState<Map<string, WeatherData>>(new Map());
    const weatherMarkers = useRef<Map<string, any>>(new Map());

    const [rainViewerEnabled, setRainViewerEnabled] = useState(false);
    const rainViewerLayers = useRef<any[]>([]);
    const [animationPosition, setAnimationPosition] = useState(0);
    const [rainViewerTimestamps, setRainViewerTimestamps] = useState<any[]>([]);
    const animationTimer = useRef<any>(null);

    const [showControls, setShowControls] = useState(false);
    const [showPilotsList, setShowPilotsList] = useState(false);
    const [showAuthPanel, setShowAuthPanel] = useState(false);

    const radToDeg = (rad: number) => rad * (180 / Math.PI);

    // Vérifier l'authentification au chargement
    useEffect(() => {
        checkAuth();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                setUser(session.user);
                setIsAuthenticated(true);
                loadUserProfile(session.user.id);
            } else {
                setUser(null);
                setIsAuthenticated(false);
                setUserProfile(null);
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
            setUser(session.user);
            setIsAuthenticated(true);
            loadUserProfile(session.user.id);
        }
    };

    const loadUserProfile = async (userId: string) => {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();

        if (!error && data) {
            setUserProfile(data);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setIsAuthenticated(false);
        setUserProfile(null);
        setWeatherEnabled(false);
        setShowWindMarkers(false);
        setRainViewerEnabled(false);
    };

    const loadRainViewerTimestamps = async () => {
        try {
            const response = await fetch('https://api.rainviewer.com/public/weather-maps.json');
            const data = await response.json();
            const timestamps = data.radar.past.concat(data.radar.nowcast);
            setRainViewerTimestamps(timestamps);
            setAnimationPosition(0);
            return timestamps;
        } catch (error) {
            console.error('❌ Erreur RainViewer:', error);
            return [];
        }
    };

    const updateRainViewerLayer = () => {
        if (!map.current || !rainViewerEnabled || rainViewerTimestamps.length === 0) return;

        rainViewerLayers.current.forEach(layer => {
            map.current.removeLayer(layer);
        });
        rainViewerLayers.current = [];

        const timestamp = rainViewerTimestamps[animationPosition].time;

        const layer = L.tileLayer(
            `https://tilecache.rainviewer.com/v2/radar/${timestamp}/256/{z}/{x}/{y}/6/1_1.png`,
            {
                tileSize: 256,
                opacity: 0.6,
                zIndex: 500,
                attribution: 'RainViewer',
                maxZoom: 19,
                minZoom: 0
            }
        );

        layer.addTo(map.current);
        rainViewerLayers.current.push(layer);
    };

    const clearRainViewerLayers = () => {
        rainViewerLayers.current.forEach(layer => {
            if (map.current) {
                map.current.removeLayer(layer);
            }
        });
        rainViewerLayers.current = [];
    };

    const fetchWeatherForPlanes = async () => {
        if (!showWindMarkers || planes.size === 0) return;

        const locations = Array.from(planes.values())
            .map(plane => ({ lat: plane.latitude, lon: plane.longitude, id: plane.userId }));

        for (const loc of locations) {
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?` +
                    `latitude=${loc.lat}&longitude=${loc.lon}` +
                    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m` +
                    `&wind_speed_unit=kn` +
                    `&timezone=auto`
                );
                const data = await response.json();

                const weatherData: WeatherData = {
                    wind: {
                        speed: data.current.wind_speed_10m || 0,
                        deg: data.current.wind_direction_10m || 0,
                        gusts: data.current.wind_gusts_10m || 0
                    },
                    main: {
                        temp: data.current.temperature_2m || 0,
                        pressure: data.current.pressure_msl || 0,
                        humidity: data.current.relative_humidity_2m || 0,
                        feels_like: data.current.apparent_temperature || 0
                    },
                    precipitation: data.current.precipitation || 0,
                    weather_code: data.current.weather_code || 0
                };

                setWeatherData(prev => {
                    const updated = new Map(prev);
                    updated.set(loc.id, weatherData);
                    return updated;
                });

                updateWeatherMarker(loc.lat, loc.lon, weatherData, loc.id);
            } catch (error) {
                console.error('Erreur météo:', error);
            }
        }
    };

    const updateWeatherMarker = (lat: number, lon: number, weather: WeatherData, id: string) => {
        if (!map.current || !showWindMarkers) return;

        const windSpeedKnots = Math.round(weather.wind.speed);
        const windDeg = weather.wind.deg;
        const gustsKnots = Math.round(weather.wind.gusts);

        const windIcon = L.divIcon({
            className: 'wind-marker',
            html: `
                <div style="
                    width: 50px; 
                    height: 50px; 
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.6);
                    border-radius: 50%;
                    border: 2px solid #00ff88;
                    backdrop-filter: blur(4px);
                ">
                    <div style="
                        font-size: 20px;
                        transform: rotate(${windDeg}deg);
                        transition: transform 0.5s ease;
                        color: #00ff88;
                    ">➤</div>
                    <div style="
                        position: absolute;
                        bottom: -18px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: rgba(0, 0, 0, 0.8);
                        color: #00ff88;
                        padding: 2px 6px;
                        border-radius: 4px;
                        font-size: 10px;
                        font-weight: bold;
                        white-space: nowrap;
                        border: 1px solid #00ff88;
                    ">${windSpeedKnots}kt</div>
                </div>
            `,
            iconSize: [50, 50],
            iconAnchor: [25, 25]
        });

        let weatherMarker = weatherMarkers.current.get(id);

        if (!weatherMarker) {
            weatherMarker = L.marker([lat, lon], { icon: windIcon, zIndexOffset: 1000 }).addTo(map.current);

            weatherMarker.bindPopup(`
                <div style="min-width: 180px;">
                    <strong>🌦️ Météo en temps réel</strong><br>
                    <hr style="margin: 8px 0; border-color: #444;">
                    <strong>💨 Vent:</strong> ${windSpeedKnots}kt à ${windDeg}°<br>
                    ${gustsKnots > windSpeedKnots ? `<strong>💨 Rafales:</strong> ${gustsKnots}kt<br>` : ''}
                    <strong>🌡️ Temp:</strong> ${Math.round(weather.main.temp)}°C (ressenti ${Math.round(weather.main.feels_like)}°C)<br>
                    <strong>📊 Pression:</strong> ${Math.round(weather.main.pressure)}hPa<br>
                    <strong>💧 Humidité:</strong> ${weather.main.humidity}%<br>
                    ${weather.precipitation > 0 ? `<strong>🌧️ Précipitations:</strong> ${weather.precipitation}mm<br>` : ''}
                    <div style="margin-top: 8px; font-size: 10px; color: #888;">
                        Source: Open-Meteo
                    </div>
                </div>
            `);

            weatherMarkers.current.set(id, weatherMarker);
        } else {
            weatherMarker.setLatLng([lat, lon]);
            weatherMarker.setIcon(windIcon);
        }
    };

    const clearWeatherMarkers = () => {
        weatherMarkers.current.forEach(marker => {
            if (map.current) {
                map.current.removeLayer(marker);
            }
        });
        weatherMarkers.current.clear();
        setWeatherData(new Map());
    };

    useEffect(() => {
        if (!weatherEnabled) {
            setRainViewerEnabled(false);
            setShowWindMarkers(false);
        }
    }, [weatherEnabled]);

    useEffect(() => {
        if (!rainViewerEnabled || !mapLoaded) {
            clearRainViewerLayers();
            if (animationTimer.current) {
                clearInterval(animationTimer.current);
                animationTimer.current = null;
            }
            return;
        }

        loadRainViewerTimestamps();

        const refreshInterval = setInterval(loadRainViewerTimestamps, 600000);

        return () => {
            clearInterval(refreshInterval);
            clearRainViewerLayers();
            if (animationTimer.current) {
                clearInterval(animationTimer.current);
                animationTimer.current = null;
            }
        };
    }, [rainViewerEnabled, mapLoaded]);

    useEffect(() => {
        if (!rainViewerEnabled || rainViewerTimestamps.length === 0) return;

        updateRainViewerLayer();

        if (animationTimer.current) {
            clearInterval(animationTimer.current);
        }

        animationTimer.current = setInterval(() => {
            setAnimationPosition((prev) => (prev + 1) % rainViewerTimestamps.length);
        }, 30000);

        return () => {
            if (animationTimer.current) {
                clearInterval(animationTimer.current);
                animationTimer.current = null;
            }
        };
    }, [rainViewerEnabled, rainViewerTimestamps]);

    useEffect(() => {
        if (rainViewerEnabled && rainViewerTimestamps.length > 0) {
            updateRainViewerLayer();
        }
    }, [animationPosition]);

    useEffect(() => {
        if (!showWindMarkers) {
            clearWeatherMarkers();
            return;
        }

        fetchWeatherForPlanes();
        const interval = setInterval(fetchWeatherForPlanes, 300000);
        return () => clearInterval(interval);
    }, [showWindMarkers, planes]);

    useEffect(() => {
        const initMap = async () => {
            if (map.current || !mapContainer.current) return;

            if (typeof window !== 'undefined') {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                document.head.appendChild(link);
            }

            L = (await import('leaflet')).default;

            try {
                await import('../utils/leafletConfig');
            } catch (e) {
                console.log('No leafletConfig found, skipping...');
            }

            map.current = L.map(mapContainer.current, {
                center: [48.8566, 2.3522],
                zoom: 5,
                zoomControl: false,
                maxBounds: [[-90, -180], [90, 180]],
                maxBoundsViscosity: 1.0,
                minZoom: 3,
                worldCopyJump: false
            });

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap, &copy; CARTO',
                maxZoom: 19,
                noWrap: true
            }).addTo(map.current);

            setMapLoaded(true);

            const ws = new WebSocket('wss://msfs-backend-production.up.railway.app');
            ws.onopen = () => {
                setConnected(true);
                ws.send(JSON.stringify({ type: 'web_connect' }));
            };

            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);

                if (data.type === 'all_planes') {
                    const newPlanes = new Map<string, Plane>();
                    data.planes.forEach((raw: any) => {
                        const plane = flattenPlane(raw);
                        if (plane.latitude !== 0 && plane.longitude !== 0) {
                            newPlanes.set(plane.userId, plane);
                        }
                    });
                    setPlanes(newPlanes);
                    setPlayerCount(newPlanes.size);
                }

                if (data.type === 'plane_update') {
                    const plane = flattenPlane({ userId: data.userId, username: data.username, data: data.data });
                    if (plane.latitude !== 0 && plane.longitude !== 0) {
                        setPlanes(prev => {
                            const updated = new Map(prev);
                            updated.set(plane.userId, plane);
                            setPlayerCount(updated.size);
                            return updated;
                        });
                    }
                }

                if (data.type === 'plane_disconnected') {
                    setPlanes(prev => {
                        const updated = new Map(prev);
                        updated.delete(data.userId);
                        setPlayerCount(updated.size);
                        return updated;
                    });
                    removeMarker(data.userId);
                    removeTrail(data.userId);
                }
            };

            ws.onclose = () => {
                setConnected(false);
            };

            return () => {
                ws.close();
                map.current?.remove();
            };
        };

        initMap();

    }, []);

    useEffect(() => {
        if (!mapLoaded) return;

        planes.forEach(plane => {
            updateMarker(plane);
            updateTrail(plane);
        });
    }, [mapLoaded, planes]);

    function flattenPlane(raw: any): Plane {
        if (!raw.data) {
            console.warn(`❌ Pas de données pour ${raw.username}`, raw);
            return {
                userId: raw.userId,
                username: raw.username,
                latitude: 0,
                longitude: 0,
                altitude: 0,
                heading: 0,
                speed: 0,
                aircraft: 'Unknown'
            };
        }
        return {
            userId: raw.userId,
            username: raw.username,
            latitude: radToDeg(raw.data.latitude ?? 0),
            longitude: radToDeg(raw.data.longitude ?? 0),
            altitude: raw.data.altitude ?? 0,
            heading: raw.data.heading ?? 0,
            speed: raw.data.speed ?? 0,
            aircraft: raw.data.aircraft ?? 'Unknown'
        };
    }

    function updateMarker(plane: Plane) {
        if (!map.current) return;

        const rotationDeg = radToDeg(plane.heading);

        let marker = markers.current.get(plane.userId);
        if (!marker) {
            const planeIcon = L.divIcon({
                className: 'plane-marker',
                html: `
                    <div style="width: 40px; height: 40px; position: relative;">
                        <img src="/plane.png" style="width: 100%; height: 100%; transform: rotate(${rotationDeg}deg); transition: transform 0.3s ease-out; transform-origin: center center;" />
                    </div>
                `,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            });

            marker = L.marker([plane.latitude, plane.longitude], {
                icon: planeIcon,
                title: `${plane.username}\n${Math.round(plane.altitude)}ft - ${Math.round(plane.speed)}kts`,
                zIndexOffset: 2000
            }).addTo(map.current);

            marker.bindPopup(`
                <strong>${plane.username}</strong><br>
                ${plane.aircraft}<br>
                Alt: ${Math.round(plane.altitude)} ft<br>
                Speed: ${Math.round(plane.speed)} kts<br>
                Heading: ${Math.round(rotationDeg)}°
            `);

            markers.current.set(plane.userId, marker);

            if (markers.current.size === 1) {
                map.current.setView([plane.latitude, plane.longitude], 8);
            }
        } else {
            marker.setLatLng([plane.latitude, plane.longitude]);

            const planeIcon = L.divIcon({
                className: 'plane-marker',
                html: `
                    <div style="width: 40px; height: 40px; position: relative;">
                        <img src="/plane.png" style="width: 100%; height: 100%; transform: rotate(${rotationDeg}deg); transition: transform 0.3s ease-out; transform-origin: center center;" />
                    </div>
                `,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            });
            marker.setIcon(planeIcon);

            marker.setPopupContent(`
                <strong>${plane.username}</strong><br>
                ${plane.aircraft}<br>
                Alt: ${Math.round(plane.altitude)} ft<br>
                Speed: ${Math.round(plane.speed)} kts<br>
                Heading: ${Math.round(rotationDeg)}°
            `);
        }
    }

    function updateTrail(plane: Plane) {
        if (!map.current || !mapLoaded) return;

        let trail = trails.current.get(plane.userId);
        const newCoord: [number, number] = [plane.latitude, plane.longitude];

        if (!trail) {
            trail = L.polyline([newCoord], {
                color: '#00d4ff',
                weight: 3,
                opacity: 0.8,
                smoothFactor: 1
            }).addTo(map.current);

            trails.current.set(plane.userId, trail);
        } else {
            const coords = trail.getLatLngs() as L.LatLng[];
            const lastCoord = coords[coords.length - 1];

            if (!lastCoord || lastCoord.lat !== newCoord[0] || lastCoord.lng !== newCoord[1]) {
                coords.push(L.latLng(newCoord[0], newCoord[1]));

                const maxDistanceKm = 30;
                while (coords.length > 1) {
                    const totalDistance = calculateTrailDistance(coords.map(c => [c.lat, c.lng]));
                    if (totalDistance <= maxDistanceKm) break;
                    coords.shift();
                }

                if (coords.length > 500) {
                    coords.shift();
                }

                trail.setLatLngs(coords);
            }
        }
    }

    function removeTrail(userId: string) {
        const trail = trails.current.get(userId);
        if (trail && map.current) {
            map.current.removeLayer(trail);
            trails.current.delete(userId);
        }
    }

    function calculateTrailDistance(coordinates: [number, number][]): number {
        let totalDistance = 0;
        for (let i = 1; i < coordinates.length; i++) {
            totalDistance += haversineDistance(
                coordinates[i - 1][0], coordinates[i - 1][1],
                coordinates[i][0], coordinates[i][1]
            );
        }
        return totalDistance;
    }

    function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    function removeMarker(userId: string) {
        const marker = markers.current.get(userId);
        if (marker && map.current) {
            map.current.removeLayer(marker);
            markers.current.delete(userId);
        }
        positionHistory.current.delete(userId);
    }

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainer} className="w-full h-full" />

            {/* Overlay pour fermer les panneaux sur mobile */}
            {(showControls || showPilotsList || showAuthPanel) && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-[999]"
                    onClick={() => {
                        setShowControls(false);
                        setShowPilotsList(false);
                        setShowAuthPanel(false);
                    }}
                />
            )}

            {/* Boutons mobile */}
            <div className="md:hidden absolute top-4 left-4 flex gap-2 z-[1100]">
                <button
                    onClick={() => setShowControls(!showControls)}
                    className="bg-black/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-black"
                >
                    ⚙️
                </button>
                <button
                    onClick={() => setShowPilotsList(!showPilotsList)}
                    className="bg-black/90 backdrop-blur-sm text-white px-4 py-3 rounded-full shadow-lg hover:bg-black flex items-center gap-2"
                >
                    ✈️ <span className="font-bold">{playerCount}</span>
                </button>
                {isAuthenticated && user && (
                    <div className="bg-black/90 backdrop-blur-sm rounded-full shadow-lg px-2">
                        <NotificationBell userId={user.id} />
                    </div>
                )}
                <button
                    onClick={() => setShowAuthPanel(!showAuthPanel)}
                    className="bg-black/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-black"
                >
                    {isAuthenticated ? '👤' : '🔒'}
                </button>
            </div>

            {/* Panel de contrôle principal */}
            <div className={`absolute bg-black/80 text-white rounded-lg backdrop-blur-sm z-[1020] transition-all duration-300 ease-in-out
                ${showControls ? 'top-18 left-4 opacity-100 p-4' : 'top-18 -left-full opacity-0 p-0'}
                md:top-4 md:left-4 md:opacity-100 md:p-4
                w-[85vw] md:w-[300px] max-w-sm
            `}>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg md:text-xl font-bold">🌍 AeroQuest Live Map</h2>
                    <button
                        onClick={() => setShowControls(false)}
                        className="md:hidden text-2xl hover:text-gray-300"
                    >
                        ✕
                    </button>
                </div>
                <div className='flex justify-between'>
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className="text-sm md:text-base">{connected ? 'Connecté' : 'Déconnecté'}</span>
                    </div>
                    {isAuthenticated && user && (
                        <div className="px-2">
                            <NotificationBell userId={user.id} />
                        </div>
                    )}
                </div>
                <div className="mt-2 text-sm md:text-base">
                    <strong>{playerCount}</strong> pilote{playerCount > 1 ? 's' : ''} en ligne
                </div>
                {mapLoaded && <div className="text-xs text-green-400 mt-1">✅ Carte chargée</div>}

                {/* Options météo - Nécessite authentification */}
                <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
                    {!isAuthenticated ? (
                        <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-4 text-center">
                            <p className="text-sm mb-3">🔒 Fonctionnalités météo réservées aux membres</p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="/auth/login"
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded text-sm transition"
                                >
                                    Connexion
                                </a>
                                <a
                                    href="/auth/register"
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded text-sm transition"
                                >
                                    Inscription
                                </a>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => setWeatherEnabled(!weatherEnabled)}
                                className={`w-full px-4 py-2 rounded-lg transition font-semibold text-sm md:text-base ${weatherEnabled
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-gray-600 hover:bg-gray-700'
                                    }`}
                            >
                                {weatherEnabled ? '🌦️ Météo: ON' : '🌦️ Météo: OFF'}
                            </button>

                            {weatherEnabled && (
                                <>
                                    <button
                                        onClick={() => setRainViewerEnabled(!rainViewerEnabled)}
                                        className={`w-full px-3 py-2 rounded text-xs md:text-sm font-semibold transition ${rainViewerEnabled
                                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                            : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                            }`}
                                    >
                                        {rainViewerEnabled ? '🌧️ Radar pluie: ON' : '🌧️ Radar pluie: OFF'}
                                    </button>

                                    <button
                                        onClick={() => setShowWindMarkers(!showWindMarkers)}
                                        className={`w-full px-3 py-2 rounded text-xs md:text-sm font-semibold transition ${showWindMarkers
                                            ? 'bg-emerald-600 hover:bg-emerald-700'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                            }`}
                                    >
                                        {showWindMarkers ? '💨 Vent: ON' : '💨 Vent: OFF'}
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>

                {/* Télécharger le launcher - Toujours accessible */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                    <a
                        href="/download/MSFS-TRACKER.exe"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg block text-center hover:bg-blue-700 transition text-sm md:text-base"
                        download="MSFS-TRACKER.exe"
                    >
                        📥 Télécharger le launcher
                    </a>
                </div>
            </div>

            {/* Panel utilisateur (desktop uniquement) */}
            <div className={`hidden md:block absolute bottom-4 right-4 bg-black/80 text-white rounded-lg backdrop-blur-sm z-[1000] p-4 w-[280px]
                ${showAuthPanel ? 'opacity-100' : 'opacity-100'}
            `}>
                {!isAuthenticated ? (
                    <div>
                        <h3 className="font-bold mb-3 text-center">✈️ Rejoignez-nous</h3>
                        <div className="space-y-2">
                            <a
                                href="/auth/login"
                                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition"
                            >
                                Se connecter
                            </a>
                            <a
                                href="/auth/register"
                                className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-center transition"
                            >
                                S'inscrire
                            </a>
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">
                            Accédez à la météo en temps réel et plus encore !
                        </p>
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-700">
                            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                {userProfile?.username?.charAt(0).toUpperCase() || '?'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold truncate">{userProfile?.username || 'Pilote'}</p>
                                <p className="text-xs text-gray-400">{userProfile?.missions_completed || 0} missions complétées</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <a
                                href="/dashboard"
                                className="block w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-center transition text-sm font-medium"
                            >
                                📊 Dashboard
                            </a>
                            <button
                                onClick={handleLogout}
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-center transition text-sm font-medium"
                            >
                                🚪 Déconnexion
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Liste des pilotes */}
            <div className={`absolute bg-black/80 text-white rounded-lg backdrop-blur-sm z-[1010] transition-all duration-300 ease-in-out overflow-y-auto
                ${showPilotsList ? 'top-18 right-4 opacity-100 p-4' : 'top-18 -right-full opacity-0 p-0'}
                md:top-4 md:right-4 md:opacity-100 md:p-4
                w-[85vw] md:w-[280px]
                max-h-[70vh] md:max-h-[calc(100vh-220px)]
            `}>
                <div className="flex justify-between items-center mb-2 sticky top-0 pb-2">
                    <h3 className="font-bold text-sm md:text-base">✈️ Pilotes actifs</h3>
                    <button
                        onClick={() => setShowPilotsList(false)}
                        className="md:hidden text-2xl hover:text-gray-300"
                    >
                        ✕
                    </button>
                </div>
                {planes.size === 0 ? (
                    <div className="text-gray-400 text-xs md:text-sm">Aucun pilote en vol</div>
                ) : (
                    Array.from(planes.values()).map(plane => {
                        const weather = weatherData.get(plane.userId);
                        return (
                            <div
                                key={plane.userId}
                                className="mb-2 text-xs md:text-sm border-b border-gray-700 pb-2 cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition"
                                onClick={() => {
                                    if (map.current) {
                                        map.current.flyTo([plane.latitude, plane.longitude], 10, {
                                            duration: 2
                                        });
                                        if (typeof window !== 'undefined' && window.innerWidth < 768) {
                                            setShowPilotsList(false);
                                        }
                                    }
                                }}
                            >
                                <div className="font-semibold">{plane.username}</div>
                                <div className="text-gray-400 text-xs">
                                    {Math.round(plane.altitude)}ft • {Math.round(plane.speed)}kts • {Math.round(radToDeg(plane.heading))}°
                                </div>
                                <div className="text-gray-500 text-xs truncate">
                                    {plane.aircraft}
                                </div>
                                {weather && showWindMarkers && (
                                    <div className="text-green-400 text-xs mt-1">
                                        🌬️ {Math.round(weather.wind.speed)}kt à {weather.wind.deg}° • {Math.round(weather.main.temp)}°C
                                        {weather.precipitation > 0 && <span className="text-blue-400"> • 🌧️ {weather.precipitation}mm</span>}
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            {/* Panel auth mobile */}
            <div className={`md:hidden absolute bg-black/80 text-white rounded-lg backdrop-blur-sm z-[1050] transition-all duration-300 ease-in-out p-4
                ${showAuthPanel ? 'bottom-4 left-4 right-4 opacity-100' : 'bottom-4 left-4 right-4 opacity-0'}
            `}>
                {!isAuthenticated ? (
                    <div>
                        <h3 className="font-bold mb-3 text-center">✈️ Rejoignez-nous</h3>
                        <div className="space-y-2">
                            <a
                                href="/auth/login"
                                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition"
                            >
                                Se connecter
                            </a>
                            <a
                                href="/auth/register"
                                className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-center transition"
                            >
                                S'inscrire
                            </a>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl">
                                {userProfile?.username?.charAt(0).toUpperCase() || '?'}
                            </div>
                            <div className="flex-1">
                                <p className="font-bold">{userProfile?.username || 'Pilote'}</p>
                                <p className="text-xs text-gray-400">{userProfile?.missions_completed || 0} missions</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <a
                                href="/dashboard"
                                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-center transition text-sm"
                            >
                                📊 Dashboard
                            </a>
                            <button
                                onClick={handleLogout}
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-center transition text-sm"
                            >
                                🚪 Déconnexion
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Légende */}
            <div className="absolute bottom-4 left-4 bg-black/80 text-white p-2 md:p-3 rounded-lg backdrop-blur-sm text-xs md:text-sm z-[1000] max-w-[90vw]">
                <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <div className="w-6 md:w-8 h-0.5 bg-[#00d4ff]"></div>
                    <span className="whitespace-nowrap">Traînée</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <img src="/plane.png" className="w-4 h-4 md:w-5 md:h-5" alt="plane" />
                    <span className="whitespace-nowrap">Avion</span>
                </div>
                {rainViewerEnabled && (
                    <div className="flex items-center gap-1 md:gap-2 mb-1">
                        <div className="w-4 h-4 bg-linear-to-r from-blue-400 via-yellow-400 to-red-400 rounded"></div>
                        <span className="whitespace-nowrap">Pluie</span>
                    </div>
                )}
                {showWindMarkers && (
                    <div className="flex items-center gap-1 md:gap-2">
                        <div style={{ fontSize: '16px', color: '#00ff88' }} className="md:text-lg">➤</div>
                        <span className="whitespace-nowrap">Vent</span>
                    </div>
                )}
            </div>
        </div>
    );
}
