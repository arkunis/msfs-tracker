'use client';
import { useEffect, useState, useRef } from 'react';

// Importer Leaflet dynamiquement pour éviter l'erreur "window is not defined"
let L: any;

interface Plane {
    userId: string;
    username: string;
    latitude: number;
    longitude: number;
    altitude: number;
    heading: number; // En radians
    speed: number;
    aircraft: string;
}

interface WeatherData {
    wind: {
        speed: number; // knots
        deg: number; // degrés
        gusts: number; // rafales
    };
    main: {
        temp: number; // °C
        pressure: number; // hPa
        humidity: number; // %
        feels_like: number; // température ressentie
    };
    precipitation: number; // mm
    weather_code: number; // code WMO
}

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

    // États pour la météo
    const [weatherEnabled, setWeatherEnabled] = useState(false);
    const [showWindMarkers, setShowWindMarkers] = useState(false);
    const [weatherData, setWeatherData] = useState<Map<string, WeatherData>>(new Map());
    const weatherMarkers = useRef<Map<string, any>>(new Map());

    // RainViewer
    const [rainViewerEnabled, setRainViewerEnabled] = useState(false);
    const rainViewerLayers = useRef<any[]>([]);
    const [animationPosition, setAnimationPosition] = useState(0);
    const [rainViewerTimestamps, setRainViewerTimestamps] = useState<any[]>([]);
    const animationTimer = useRef<any>(null);

    // États pour mobile
    const [showControls, setShowControls] = useState(false);
    const [showPilotsList, setShowPilotsList] = useState(false);

    const radToDeg = (rad: number) => rad * (180 / Math.PI);

    // Charger les timestamps RainViewer
    const loadRainViewerTimestamps = async () => {
        try {
            console.log('🌧️ Chargement des données RainViewer...');
            const response = await fetch('https://api.rainviewer.com/public/weather-maps.json');
            const data = await response.json();

            const timestamps = data.radar.past.concat(data.radar.nowcast);
            console.log('✅ RainViewer timestamps chargés:', timestamps.length, 'frames');
            setRainViewerTimestamps(timestamps);
            setAnimationPosition(0);

            return timestamps;
        } catch (error) {
            console.error('❌ Erreur RainViewer:', error);
            return [];
        }
    };

    // Ajouter/mettre à jour la couche RainViewer
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

    // Nettoyer les couches RainViewer
    const clearRainViewerLayers = () => {
        rainViewerLayers.current.forEach(layer => {
            if (map.current) {
                map.current.removeLayer(layer);
            }
        });
        rainViewerLayers.current = [];
    };

    // Fonction pour récupérer la météo autour des avions avec Open-Meteo
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

    // Créer ou mettre à jour un marqueur météo
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

    // Nettoyer les marqueurs météo
    const clearWeatherMarkers = () => {
        weatherMarkers.current.forEach(marker => {
            if (map.current) {
                map.current.removeLayer(marker);
            }
        });
        weatherMarkers.current.clear();
        setWeatherData(new Map());
    };

    // Désactiver RainViewer quand la météo est désactivée
    useEffect(() => {
        if (!weatherEnabled) {
            setRainViewerEnabled(false);
            setShowWindMarkers(false);
        }
    }, [weatherEnabled]);

    // Charger les timestamps RainViewer au démarrage
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

    // Animer RainViewer
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

    // Mettre à jour la couche quand la position change
    useEffect(() => {
        if (rainViewerEnabled && rainViewerTimestamps.length > 0) {
            updateRainViewerLayer();
        }
    }, [animationPosition]);

    // Mettre à jour la météo périodiquement
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
            console.log('🗺️ Map loaded');

            const ws = new WebSocket('wss://msfs-backend-production.up.railway.app');
            ws.onopen = () => {
                console.log('✅ Connected to server');
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
                console.log('❌ Disconnected');
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
            {(showControls || showPilotsList) && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/50 z-[999]"
                    onClick={() => {
                        setShowControls(false);
                        setShowPilotsList(false);
                    }}
                />
            )}

            {/* Boutons flottants pour mobile */}
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
            </div>

            {/* Panneau de contrôle - Desktop: toujours visible, Mobile: repliable */}
            <div className={`absolute bg-black/80 text-white rounded-lg backdrop-blur-sm z-[1000] transition-all duration-300 ease-in-out
                ${showControls ? 'top-18 left-4 opacity-100 p-4' : 'top-18 -left-full opacity-0 p-0'}
                md:top-4 md:left-4 md:opacity-100 md:p-4
                w-[85vw] md:w-auto max-w-sm
            `}>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg md:text-xl font-bold">🌍 MSFS Live Map</h2>
                    <button 
                        onClick={() => setShowControls(false)}
                        className="md:hidden text-2xl hover:text-gray-300"
                    >
                        ✕
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                    <span className="text-sm md:text-base">{connected ? 'Connecté' : 'Déconnecté'}</span>
                </div>
                <div className="mt-2 text-sm md:text-base">
                    <strong>{playerCount}</strong> pilote{playerCount > 1 ? 's' : ''} en ligne
                </div>
                {mapLoaded && <div className="text-xs text-green-400 mt-1">✅ Carte chargée</div>}

                {/* Contrôles météo simplifiés */}
                <div className="mt-4 pt-4 border-t border-gray-700 space-y-2 grid grid-cols-1">
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

                            <div className="text-xs text-green-400 mt-2 text-center">
                                ✅ 100% gratuit & illimité
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                    <a href="/download/MSFS-TRACKER.exe" className="bg-blue-600 text-white px-4 py-2 rounded-lg block text-center hover:bg-blue-700 transition text-sm md:text-base" download="MSFS-TRACKER.exe">
                        📥 Télécharger
                    </a>
                </div>
            </div>

            {/* Liste des pilotes - Desktop: toujours visible, Mobile: repliable */}
            <div className={`absolute bg-black/80 text-white rounded-lg backdrop-blur-sm z-[1000] transition-all duration-300 ease-in-out overflow-y-auto
                ${showPilotsList ? 'top-4 right-4 opacity-100 p-4' : 'top-4 -right-full opacity-0 p-0'}
                md:top-4 md:right-4 md:opacity-100 md:p-4
                w-[85vw] md:w-auto max-w-sm
                max-h-[70vh] md:max-h-96
            `}>
                <div className="flex justify-between items-center mb-2 sticky top-0 bg-black/80 pb-2">
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
                                        // Fermer le panneau sur mobile après sélection
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

            {/* Légende - toujours visible mais plus compacte sur mobile */}
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