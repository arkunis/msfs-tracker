'use client';
import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

interface PlaneTrail {
    coordinates: [number, number][];
    lastUpdate: number;
}

export default function LiveMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<L.Map | null>(null);
    const [planes, setPlanes] = useState<Map<string, Plane>>(new Map());
    const markers = useRef<Map<string, L.Marker>>(new Map());
    const trails = useRef<Map<string, L.Polyline>>(new Map());
    const positionHistory = useRef<Map<string, [number, number][]>>(new Map());
    const [connected, setConnected] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);
    const [mapLoaded, setMapLoaded] = useState(false);

    // Fonction pour convertir les radians en degrés
    const radToDeg = (rad: number) => rad * (180 / Math.PI);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        // Initialiser la carte Leaflet
        map.current = L.map(mapContainer.current, {
            center: [48.8566, 2.3522],
            zoom: 5,
            zoomControl: false,
            maxBounds: [[-90, -180], [90, 180]],
            maxBoundsViscosity: 1.0,
            minZoom: 3,
            worldCopyJump: false
        });

        // Ajouter les tuiles OpenStreetMap
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
    }, []);

    // Mise à jour des markers et trails après que la carte soit chargée
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
            heading: raw.data.heading ?? 0, // Gardé en radians
            speed: raw.data.speed ?? 0,
            aircraft: raw.data.aircraft ?? 'Unknown'
        };
    }

    function updateMarker(plane: Plane) {
        if (!map.current) return;

        // Convertir le heading en degrés
        const rotationDeg = radToDeg(plane.heading);

        let marker = markers.current.get(plane.userId);
        if (!marker) {
            // Créer une icône personnalisée pour l'avion
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
                title: `${plane.username}\n${Math.round(plane.altitude)}ft - ${Math.round(plane.speed)}kts`
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

            // Mettre à jour l'icône avec la nouvelle rotation
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

            // Mettre à jour le popup
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
            // Première initialisation de la traînée
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

            // Éviter les doublons de position
            if (!lastCoord || lastCoord.lat !== newCoord[0] || lastCoord.lng !== newCoord[1]) {
                coords.push(L.latLng(newCoord[0], newCoord[1]));

                // Limiter la taille de la traînée
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
        const R = 6371; // Rayon de la Terre en km
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
            <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm z-[1000]">
                <h2 className="text-xl font-bold mb-2">🌍 MSFS Live Map</h2>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                    <span>{connected ? 'Connecté' : 'Déconnecté'}</span>
                </div>
                <div className="mt-2">
                    <strong>{playerCount}</strong> pilote{playerCount > 1 ? 's' : ''} en ligne
                </div>
                {mapLoaded && <div className="text-xs text-green-400 mt-1">✅ Carte chargée</div>}
                <div className="mt-5">
                    <a href="/download/MSFS-TRACKER.exe" className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg" download="MSFS-TRACKER.exe">Télécharger le client</a>
                </div>
            </div>
            <div className="absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg max-h-96 overflow-y-auto backdrop-blur-sm z-[1000]">
                <h3 className="font-bold mb-2">✈️ Pilotes actifs</h3>
                {planes.size === 0 ? (
                    <div className="text-gray-400 text-sm">Aucun pilote en vol</div>
                ) : (
                    Array.from(planes.values()).map(plane => (
                        <div
                            key={plane.userId}
                            className="mb-2 text-sm border-b border-gray-700 pb-2 cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition"
                            onClick={() => {
                                if (map.current) {
                                    map.current.flyTo([plane.latitude, plane.longitude], 10, {
                                        duration: 2
                                    });
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
                        </div>
                    ))
                )}
            </div>
            <div className="absolute bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg backdrop-blur-sm text-sm z-[1000]">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-0.5 bg-[#00d4ff]"></div>
                    <span>Traînée de vol (30km max)</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/plane.png" style={{ width: '20px', height: '20px', transform: 'rotate(0deg)' }} alt="plane" />
                    <span>Position actuelle</span>
                </div>
            </div>
        </div>
    );
}