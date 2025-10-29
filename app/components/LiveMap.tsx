'use client';
import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
    const map = useRef<mapboxgl.Map | null>(null);
    const [planes, setPlanes] = useState<Map<string, Plane>>(new Map());
    const markers = useRef<Map<string, mapboxgl.Marker>>(new Map());
    const trails = useRef<Map<string, PlaneTrail>>(new Map());
    const positionHistory = useRef<Map<string, [number, number][]>>(new Map());
    const [connected, setConnected] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);
    const [mapLoaded, setMapLoaded] = useState(false);

    // Fonction pour convertir les radians en degrés
    const radToDeg = (rad: number) => rad * (180 / Math.PI);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [2.3522, 48.8566],
            zoom: 5
        });

        map.current.on('load', () => {
            setMapLoaded(true);
            console.log('🗺️ Map loaded');
        });

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
            // Créer un conteneur pour l'avion
            const el = document.createElement('div');
            el.className = 'plane-marker';
            el.style.width = '40px';
            el.style.height = '40px';
            el.style.position = 'relative';

            // Créer l'image de l'avion
            const img = document.createElement('img');
            img.src = '/plane.png';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.transition = 'transform 0.3s ease-out';
            img.style.transform = `rotate(${rotationDeg}deg)`;
            img.style.transformOrigin = 'center center';

            el.appendChild(img);

            el.title = `${plane.username}\n${Math.round(plane.altitude)}ft - ${Math.round(plane.speed)}kts`;

            // Positionner le marker au centre de l'avion
            marker = new mapboxgl.Marker({
                element: el,
                anchor: 'center'
            })
                .setLngLat([plane.longitude, plane.latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }).setHTML(`
                    <strong>${plane.username}</strong><br>
                    ${plane.aircraft}<br>
                    Alt: ${Math.round(plane.altitude)} ft<br>
                    Speed: ${Math.round(plane.speed)} kts<br>
                    Heading: ${Math.round(rotationDeg)}°
                `)
                )
                .addTo(map.current);
            markers.current.set(plane.userId, marker);

            if (markers.current.size === 1) {
                map.current.setCenter([plane.longitude, plane.latitude]);
                map.current.setZoom(8);
            }
        } else {
            marker.setLngLat([plane.longitude, plane.latitude]);

            const el = marker.getElement();
            const img = el.querySelector('img');
            if (img) {
                img.style.transition = 'transform 0.3s ease-out';
                img.style.transform = `rotate(${rotationDeg}deg)`;
            }
        }
    }

    function updateTrail(plane: Plane) {
        if (!map.current || !mapLoaded) return;

        const sourceId = `trail-${plane.userId}`;
        const layerId = `trail-layer-${plane.userId}`;
        const rotationDeg = radToDeg(plane.heading);

        // Vérifier si une source existe déjà
        const existingSource = map.current.getSource(sourceId);

        let trail = trails.current.get(plane.userId);
        const newCoord: [number, number] = [plane.longitude, plane.latitude];

        if (!trail) {
            // Première initialisation de la traînée
            trail = {
                coordinates: [newCoord],
                lastUpdate: Date.now()
            };
            trails.current.set(plane.userId, trail);

            // Créer la source et la couche
            map.current.addSource(sourceId, {
                type: 'geojson',
                lineMetrics: true,
                data: createTrailGeoJSON([newCoord])
            });

            map.current.addLayer({
                id: layerId,
                type: 'line',
                source: sourceId,
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#00d4ff',
                    'line-width': 3,
                    'line-opacity': 0.8,
                    'line-gradient': [
                        'interpolate',
                        ['linear'],
                        ['line-progress'],
                        0, '#00d4ff',
                        0.5, '#0088ff',
                        1, '#0044ff'
                    ]
                }
            });
        } else {
            // Mise à jour de la traînée existante
            const lastCoord = trail.coordinates[trail.coordinates.length - 1];

            // Éviter les doublons de position
            if (!lastCoord || lastCoord[0] !== newCoord[0] || lastCoord[1] !== newCoord[1]) {
                trail.coordinates.push(newCoord);
                trail.lastUpdate = Date.now();

                // Limiter la taille de la traînée
                const maxDistanceKm = 30;
                while (trail.coordinates.length > 1) {
                    const totalDistance = calculateTrailDistance(trail.coordinates);
                    if (totalDistance <= maxDistanceKm) break;
                    trail.coordinates.shift();
                }

                if (trail.coordinates.length > 500) {
                    trail.coordinates.shift();
                }

                // Mettre à jour la source existante
                const source = map.current.getSource(sourceId) as mapboxgl.GeoJSONSource;
                source.setData(createTrailGeoJSON(trail.coordinates));
            }
        }
    }

    function createTrailGeoJSON(coordinates: [number, number][]): any {
        return {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: coordinates
            }
        };
    }

    function removeTrail(userId: string) {
        if (!map.current) return;

        const sourceId = `trail-${userId}`;
        const layerId = `trail-layer-${userId}`;

        // Vérifier et supprimer la couche si elle existe
        if (map.current.getLayer(layerId)) {
            map.current.removeLayer(layerId);
        }

        // Vérifier et supprimer la source si elle existe
        if (map.current.getSource(sourceId)) {
            map.current.removeSource(sourceId);
        }

        trails.current.delete(userId);
    }




    function calculateTrailDistance(coordinates: [number, number][]): number {
        let totalDistance = 0;
        for (let i = 1; i < coordinates.length; i++) {
            totalDistance += haversineDistance(
                coordinates[i - 1][1], coordinates[i - 1][0],
                coordinates[i][1], coordinates[i][0]
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
        if (marker) {
            marker.remove();
            markers.current.delete(userId);
        }
        positionHistory.current.delete(userId);
    }

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainer} className="w-full h-full" />
            <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm">
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
            <div className="absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg max-h-96 overflow-y-auto backdrop-blur-sm">
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
                                    map.current.flyTo({
                                        center: [plane.longitude, plane.latitude],
                                        zoom: 10,
                                        duration: 2000
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
            <div className="absolute bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg backdrop-blur-sm text-sm">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-0.5 bg-[#00d4ff]"></div>
                    <span>Traînée de vol (30km max)</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/plane.png" style={{ width: '20px', height: '20px', transform: 'rotate(0deg)' }} />
                    <span>Position actuelle</span>
                </div>
            </div>
        </div>
    );
}
