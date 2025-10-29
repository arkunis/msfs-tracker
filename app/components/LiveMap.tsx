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
    heading: number;
    speed: number;
    aircraft: string;
}

interface RawPlane {
    userId: string;
    username: string;
    data: {
        latitude: { PLANE_LATITUDE: number };
        longitude: { PLANE_LONGITUDE: number };
        altitude: { PLANE_ALTITUDE: number };
        heading: { PLANE_HEADING_DEGREES_TRUE: number };
        speed: { AIRSPEED_INDICATED: number };
        aircraft: { TITLE: string };
    };
}

export default function LiveMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [planes, setPlanes] = useState<Map<string, Plane>>(new Map());
    const markers = useRef<Map<string, mapboxgl.Marker>>(new Map());
    const [connected, setConnected] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [2.3522, 48.8566], // Paris par défaut
            zoom: 5
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
                data.planes.forEach((raw: RawPlane) => {
                    const plane = flattenPlane(raw);
                    if (plane.latitude !== 0 && plane.longitude !== 0) {
                        newPlanes.set(plane.userId, plane);
                        updateMarker(plane);
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
                    updateMarker(plane);
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

    function flattenPlane(raw: RawPlane): Plane {
        if (!raw.data) {
            console.warn(`Pas de données MSFS pour ${raw.username} (${raw.userId})`, raw);
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

        const radToDeg = (rad: number) => rad * (180 / Math.PI);

        return {
            userId: raw.userId,
            username: raw.username,
            latitude: radToDeg(raw.data.latitude?.PLANE_LATITUDE ?? 0),
            longitude: radToDeg(raw.data.longitude?.PLANE_LONGITUDE ?? 0),
            altitude: raw.data.altitude?.PLANE_ALTITUDE ?? 0,
            heading: raw.data.heading?.PLANE_HEADING_DEGREES_TRUE ?? 0,
            speed: raw.data.speed?.AIRSPEED_INDICATED ?? 0,
            aircraft: raw.data.aircraft?.TITLE ?? 'Unknown'
        };
    }

    function updateMarker(plane: Plane) {
        if (!map.current) return;

        let marker = markers.current.get(plane.userId);

        if (!marker) {
            const el = document.createElement('div');
            el.className = 'plane-marker';
            el.innerHTML = '✈️';
            el.style.fontSize = '24px';
            el.style.transform = `rotate(${plane.heading}deg)`;
            el.style.cursor = 'pointer';
            el.title = `${plane.username}\n${Math.round(plane.altitude)}ft - ${Math.round(plane.speed)}kts`;

            marker = new mapboxgl.Marker(el)
                .setLngLat([plane.longitude, plane.latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }).setHTML(`
                        <strong>${plane.username}</strong><br>
                        ${plane.aircraft}<br>
                        Alt: ${Math.round(plane.altitude)} ft<br>
                        Speed: ${Math.round(plane.speed)} kts<br>
                        Heading: ${Math.round(plane.heading)}°
                    `)
                )
                .addTo(map.current);

            markers.current.set(plane.userId, marker);

            // Recentrer la carte sur le premier avion ajouté
            if (markers.current.size === 1) {
                map.current.setCenter([plane.longitude, plane.latitude]);
                map.current.setZoom(8);
            }

        } else {
            marker.setLngLat([plane.longitude, plane.latitude]);
            const el = marker.getElement();
            el.style.transform = `rotate(${plane.heading}deg)`;
            el.title = `${plane.username}\n${Math.round(plane.altitude)}ft - ${Math.round(plane.speed)}kts`;
        }
    }

    function removeMarker(userId: string) {
        const marker = markers.current.get(userId);
        if (marker) {
            marker.remove();
            markers.current.delete(userId);
        }
    }

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainer} className="w-full h-full" />

            <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2">🌍 MSFS Live Map</h2>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span>{connected ? 'Connecté' : 'Déconnecté'}</span>
                </div>
                <div className="mt-2">
                    <strong>{playerCount}</strong> pilote{playerCount > 1 ? 's' : ''} en ligne
                </div>
            </div>

            <div className="absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg max-h-96 overflow-y-auto">
                <h3 className="font-bold mb-2">✈️ Pilotes actifs</h3>
                {Array.from(planes.values()).map(plane => (
                    <div key={plane.userId} className="mb-2 text-sm border-b border-gray-700 pb-2">
                        <div className="font-semibold">{plane.username}</div>
                        <div className="text-gray-400 text-xs">
                            {Math.round(plane.altitude)}ft • {Math.round(plane.speed)}kts
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
