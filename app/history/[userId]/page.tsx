'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../utils/leafletConfig';

interface FlightTrack {
    id: string;
    user_id: string;
    latitude: number;
    longitude: number;
    altitude: number;
    heading: number;
    speed: number;
    aircraft: string;
    timestamp: string;
}

interface FlightSession {
    tracks: FlightTrack[];
    startTime: string;
    endTime: string;
    aircraft: string;
}

export default function FlightHistory() {
    const params = useParams();
    const userId = params.userId as string; // UUID depuis l'URL
    
    const [tracks, setTracks] = useState<FlightTrack[]>([]);
    const [sessions, setSessions] = useState<FlightSession[]>([]);
    const [selectedSessionIndex, setSelectedSessionIndex] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    useEffect(() => {
        if (userId) {
            loadTracks(userId);
        }
    }, [userId]);

    const segmentFlights = (tracks: FlightTrack[]): FlightSession[] => {
        if (tracks.length === 0) return [];

        const sessions: FlightSession[] = [];
        let currentSession: FlightTrack[] = [tracks[0]];
        
        const MAX_TIME_GAP = 5 * 60 * 1000; // 5 minutes
        const MAX_DISTANCE = 100000; // 100km

        for (let i = 1; i < tracks.length; i++) {
            const prev = tracks[i - 1];
            const curr = tracks[i];
            
            const timeDiff = new Date(prev.timestamp).getTime() - new Date(curr.timestamp).getTime();
            
            const latDiff = Math.abs(prev.latitude - curr.latitude);
            const lonDiff = Math.abs(prev.longitude - curr.longitude);
            const distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff) * 111000;

            if (timeDiff > MAX_TIME_GAP || distance > MAX_DISTANCE) {
                sessions.push({
                    tracks: currentSession,
                    startTime: currentSession[currentSession.length - 1].timestamp,
                    endTime: currentSession[0].timestamp,
                    aircraft: currentSession[0].aircraft
                });
                currentSession = [curr];
            } else {
                currentSession.push(curr);
            }
        }

        if (currentSession.length > 0) {
            sessions.push({
                tracks: currentSession,
                startTime: currentSession[currentSession.length - 1].timestamp,
                endTime: currentSession[0].timestamp,
                aircraft: currentSession[0].aircraft
            });
        }

        return sessions;
    };

    const loadTracks = async (uid: string) => {
        if (!uid) return;

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_URL}/api/tracks/${uid}`);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Aucun historique trouvé pour ce pilote');
                }
                throw new Error('Erreur lors du chargement');
            }

            const data = await response.json();
            setTracks(data);
            
            // Extraire le username depuis les données (si disponible)
            if (data.length > 0) {
                setUsername(`Pilot_${uid.slice(0, 8)}`);
            }
            
            const flightSessions = segmentFlights(data);
            setSessions(flightSessions);
            setSelectedSessionIndex(0);
        } catch (err: any) {
            setError(err.message || 'Impossible de charger l\'historique');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const toLatLng = (track: FlightTrack) => {
        return [
            track.latitude * (180 / Math.PI),
            track.longitude * (180 / Math.PI)
        ] as [number, number];
    };

    const currentSession = sessions[selectedSessionIndex];
    const sessionTracks = currentSession?.tracks || [];
    const flightPath = sessionTracks.map(toLatLng);

    const mapCenter = sessionTracks.length > 0
        ? toLatLng(sessionTracks[0])
        : [48.8566, 2.3522] as [number, number];

    const formatDate = (timestamp: string) => {
        return new Date(timestamp).toLocaleString('fr-FR');
    };

    const formatAltitude = (alt: number) => {
        return `${Math.round(alt)} ft`;
    };

    const formatSpeed = (speed: number) => {
        return `${Math.round(speed)} kts`;
    };

    const formatDuration = (start: string, end: string) => {
        const diff = new Date(end).getTime() - new Date(start).getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
    };

    // Copier le lien dans le presse-papier
    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        alert('Lien copié dans le presse-papier !');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header avec username et bouton partage */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold">📊 Historique des vols</h1>
                        {username && (
                            <p className="text-gray-400 mt-2">👤 {username}</p>
                        )}
                    </div>
                    <button
                        onClick={copyLink}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        🔗 Copier le lien
                    </button>
                </div>

                {/* Sélection de la session de vol */}
                {sessions.length > 0 && (
                    <div className="bg-gray-800 rounded-lg p-6 mb-8">
                        <label className="block text-lg font-semibold mb-3">
                            📅 Sessions de vol ({sessions.length}):
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sessions.map((session, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSessionIndex(index)}
                                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                                        selectedSessionIndex === index
                                            ? 'border-blue-500 bg-blue-900'
                                            : 'border-gray-600 bg-gray-700 hover:bg-gray-600'
                                    }`}
                                >
                                    <div className="font-bold text-lg mb-2">Vol #{sessions.length - index}</div>
                                    <div className="text-sm text-gray-300">
                                        🕒 {formatDate(session.startTime)}
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        ⏱️ Durée: {formatDuration(session.startTime, session.endTime)}
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        ✈️ {session.aircraft}
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        📍 {session.tracks.length} points
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Stats */}
                {sessionTracks.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-blue-600 rounded-lg p-6">
                            <div className="text-3xl font-bold">{sessionTracks.length}</div>
                            <div className="text-blue-200">Points enregistrés</div>
                        </div>
                        <div className="bg-green-600 rounded-lg p-6">
                            <div className="text-3xl font-bold">
                                {formatAltitude(Math.max(...sessionTracks.map(t => t.altitude)))}
                            </div>
                            <div className="text-green-200">Altitude max</div>
                        </div>
                        <div className="bg-purple-600 rounded-lg p-6">
                            <div className="text-3xl font-bold">
                                {formatSpeed(Math.max(...sessionTracks.map(t => t.speed)))}
                            </div>
                            <div className="text-purple-200">Vitesse max</div>
                        </div>
                        <div className="bg-orange-600 rounded-lg p-6">
                            <div className="text-3xl font-bold">{currentSession?.aircraft || 'N/A'}</div>
                            <div className="text-orange-200">Avion</div>
                        </div>
                    </div>
                )}

                {/* Carte */}
                {loading ? (
                    <div className="bg-gray-800 rounded-lg p-12 text-center">
                        <div className="text-xl">⏳ Chargement...</div>
                    </div>
                ) : error ? (
                    <div className="bg-red-600 rounded-lg p-6">
                        <div className="text-xl">❌ {error}</div>
                    </div>
                ) : sessions.length === 0 ? (
                    <div className="bg-gray-800 rounded-lg p-12 text-center">
                        <div className="text-xl">📭 Aucun vol enregistré pour ce pilote</div>
                        <p className="text-gray-400 mt-4">Lancez MSFS et l'agent pour commencer à enregistrer vos vols !</p>
                    </div>
                ) : (
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <MapContainer
                            center={mapCenter}
                            zoom={8}
                            style={{ height: '600px', width: '100%' }}
                            className="z-0"
                            key={selectedSessionIndex}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Polyline
                                positions={flightPath}
                                pathOptions={{ color: '#3b82f6', weight: 3 }}
                            />

                            {sessionTracks.length > 0 && (
                                <Marker position={toLatLng(sessionTracks[sessionTracks.length - 1])}>
                                    <Popup>
                                        <div className="text-black">
                                            <strong>🛫 Départ</strong><br />
                                            {formatDate(sessionTracks[sessionTracks.length - 1].timestamp)}
                                        </div>
                                    </Popup>
                                </Marker>
                            )}

                            {sessionTracks.length > 0 && (
                                <Marker position={toLatLng(sessionTracks[0])}>
                                    <Popup>
                                        <div className="text-black">
                                            <strong>🛬 Arrivée</strong><br />
                                            {formatDate(sessionTracks[0].timestamp)}<br />
                                            Alt: {formatAltitude(sessionTracks[0].altitude)}<br />
                                            Speed: {formatSpeed(sessionTracks[0].speed)}
                                        </div>
                                    </Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    </div>
                )}

                {/* Liste détaillée */}
                {sessionTracks.length > 0 && (
                    <div className="mt-8 bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-700">
                            <h2 className="text-2xl font-bold">📋 Détails du vol</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left">Date/Heure</th>
                                        <th className="px-6 py-3 text-left">Position</th>
                                        <th className="px-6 py-3 text-left">Altitude</th>
                                        <th className="px-6 py-3 text-left">Vitesse</th>
                                        <th className="px-6 py-3 text-left">Cap</th>
                                        <th className="px-6 py-3 text-left">Avion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sessionTracks.slice(0, 50).map((track, index) => (
                                        <tr key={track.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                                            <td className="px-6 py-4">{formatDate(track.timestamp)}</td>
                                            <td className="px-6 py-4">
                                                {toLatLng(track)[0].toFixed(4)}°N, {toLatLng(track)[1].toFixed(4)}°E
                                            </td>
                                            <td className="px-6 py-4">{formatAltitude(track.altitude)}</td>
                                            <td className="px-6 py-4">{formatSpeed(track.speed)}</td>
                                            <td className="px-6 py-4">{Math.round(track.heading * (180 / Math.PI))}°</td>
                                            <td className="px-6 py-4">{track.aircraft}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {sessionTracks.length > 50 && (
                            <div className="p-4 text-center text-gray-400">
                                Affichage des 50 derniers points sur {sessionTracks.length}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}