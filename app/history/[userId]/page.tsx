'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../utils/leafletConfig';
import { findNearestAirport, type Airport } from '../../data/Airports';
import { FlightTrack, FlightSession } from '../../interfaces/History';


export default function FlightHistory() {
    const params = useParams();
    const userId = params.userId as string;

    const [tracks, setTracks] = useState<FlightTrack[]>([]);
    const [sessions, setSessions] = useState<FlightSession[]>([]);
    const [selectedSessionIndex, setSelectedSessionIndex] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [showShareModal, setShowShareModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [tracksPerPage] = useState(10);
    const [sessionLocations, setSessionLocations] = useState<Map<number, { departure: string; arrival: string }>>(new Map());

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    const getAirportFromPosition = (lat: number, lon: number, altitude: number): string => {
        let maxDistance = 100;
        if (altitude < 500) {
            maxDistance = 15;
        } else if (altitude < 5000) {
            maxDistance = 50;
        }

        const airport = findNearestAirport(lat, lon, maxDistance);

        if (airport) {
            return `${airport.icao} (${airport.city})`;
        }

        return `${lat.toFixed(3)}°, ${lon.toFixed(3)}°`;
    };

    const loadSessionLocation = (sessionIndex: number, session: FlightSession) => {
        if (sessionLocations.has(sessionIndex)) {
            return;
        }

        let departureTrack = session.tracks[session.tracks.length - 1];

        for (let i = session.tracks.length - 1; i >= 0; i--) {
            const track = session.tracks[i];
            if (track.altitude < 100 && track.speed < 20) {
                departureTrack = track;
                break;
            }
        }

        if (departureTrack === session.tracks[session.tracks.length - 1]) {
            for (let i = session.tracks.length - 1; i >= 0; i--) {
                const track = session.tracks[i];
                if (track.altitude < 500 && track.speed < 50) {
                    departureTrack = track;
                    break;
                }
            }
        }

        let arrivalTrack = session.tracks[0];

        for (let i = 0; i < session.tracks.length; i++) {
            const track = session.tracks[i];
            if (track.altitude < 100 && track.speed < 20) {
                arrivalTrack = track;
                break;
            }
        }

        if (arrivalTrack === session.tracks[0]) {
            for (let i = 0; i < session.tracks.length; i++) {
                const track = session.tracks[i];
                if (track.altitude < 500 && track.speed < 50) {
                    arrivalTrack = track;
                    break;
                }
            }
        }

        const [depLat, depLon] = toLatLng(departureTrack);
        const [arrLat, arrLon] = toLatLng(arrivalTrack);

        const departure = getAirportFromPosition(depLat, depLon, departureTrack.altitude);
        const arrival = getAirportFromPosition(arrLat, arrLon, arrivalTrack.altitude);

        setSessionLocations(prev => new Map(prev).set(sessionIndex, { departure, arrival }));
    };

    useEffect(() => {
        if (userId) {
            loadTracks(userId);
        }
    }, [userId]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const sessionParam = params.get('session');
            if (sessionParam && sessions.length > 0) {
                const sessionIndex = parseInt(sessionParam, 10);
                if (sessionIndex >= 0 && sessionIndex < sessions.length) {
                    setSelectedSessionIndex(sessionIndex);
                }
            }
        }

        sessions.forEach((session, index) => {
            loadSessionLocation(index, session);
        });
    }, [sessions]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedSessionIndex]);

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const segmentFlights = (tracks: FlightTrack[]): FlightSession[] => {
        if (tracks.length === 0) return [];

        const sessions: FlightSession[] = [];
        let currentSession: FlightTrack[] = [tracks[0]];

        const MAX_TIME_GAP = 10 * 60 * 1000;
        const MAX_TELEPORT_DISTANCE = 50;

        for (let i = 1; i < tracks.length; i++) {
            const prev = tracks[i - 1];
            const curr = tracks[i];

            const timeDiff = new Date(prev.timestamp).getTime() - new Date(curr.timestamp).getTime();

            const prevLat = prev.latitude * (180 / Math.PI);
            const prevLon = prev.longitude * (180 / Math.PI);
            const currLat = curr.latitude * (180 / Math.PI);
            const currLon = curr.longitude * (180 / Math.PI);

            const distance = calculateDistance(prevLat, prevLon, currLat, currLon);

            let isNewSession = false;

            if (timeDiff > MAX_TIME_GAP) {
                isNewSession = true;
            }

            if (distance > MAX_TELEPORT_DISTANCE) {
                isNewSession = true;
            }

            if (prev.aircraft !== curr.aircraft) {
                isNewSession = true;
            }

            if (isNewSession) {

                if (currentSession.length > 1) {
                    let totalDistance = 0;
                    for (let j = 0; j < currentSession.length - 1; j++) {
                        const t1 = currentSession[j];
                        const t2 = currentSession[j + 1];
                        totalDistance += calculateDistance(
                            t1.latitude * (180 / Math.PI),
                            t1.longitude * (180 / Math.PI),
                            t2.latitude * (180 / Math.PI),
                            t2.longitude * (180 / Math.PI)
                        );
                    }

                    sessions.push({
                        tracks: currentSession,
                        startTime: currentSession[currentSession.length - 1].timestamp,
                        endTime: currentSession[0].timestamp,
                        aircraft: currentSession[0].aircraft,
                        distance: totalDistance
                    });
                }

                currentSession = [curr];
            } else {
                currentSession.push(curr);
            }
        }

        if (currentSession.length > 1) {
            let totalDistance = 0;
            for (let j = 0; j < currentSession.length - 1; j++) {
                const t1 = currentSession[j];
                const t2 = currentSession[j + 1];
                totalDistance += calculateDistance(
                    t1.latitude * (180 / Math.PI),
                    t1.longitude * (180 / Math.PI),
                    t2.latitude * (180 / Math.PI),
                    t2.longitude * (180 / Math.PI)
                );
            }

            sessions.push({
                tracks: currentSession,
                startTime: currentSession[currentSession.length - 1].timestamp,
                endTime: currentSession[0].timestamp,
                aircraft: currentSession[0].aircraft,
                distance: totalDistance
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

    const formatDistance = (km: number) => {
        return `${km.toFixed(1)} km`;
    };

    const formatDuration = (start: string, end: string) => {
        const diff = new Date(end).getTime() - new Date(start).getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
    };

    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        setShowShareModal(true);
        setTimeout(() => setShowShareModal(false), 2000);
    };

    const shareSession = (sessionIndex: number) => {
        const baseUrl = window.location.origin + window.location.pathname;
        const url = `${baseUrl}?session=${sessionIndex}`;
        navigator.clipboard.writeText(url);
        setShowShareModal(true);
        setTimeout(() => setShowShareModal(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                {showShareModal && (
                    <div className="fixed top-4 right-4 bg-green-600 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
                        ✅ Lien copié dans le presse-papier !
                    </div>
                )}

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold">📊 Historique des vols</h1>
                        {username && (
                            <p className="text-gray-400 mt-2">👤 {username}</p>
                        )}
                        {currentSession && sessionLocations.get(selectedSessionIndex) && (
                            <p className="text-xl mt-3">
                                <span className="text-green-400">🛫 {sessionLocations.get(selectedSessionIndex)?.departure}</span>
                                {' → '}
                                <span className="text-red-400">🛬 {sessionLocations.get(selectedSessionIndex)?.arrival}</span>
                            </p>
                        )}
                    </div>
                    <button
                        onClick={copyLink}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        🔗 Copier le lien
                    </button>
                </div>

                {sessions.length > 0 && (
                    <div className="bg-gray-800 rounded-lg p-6 mb-8">
                        <label className="block text-lg font-semibold mb-3">
                            📅 Sessions de vol ({sessions.length}):
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sessions.map((session, index) => {
                                const location = sessionLocations.get(index);
                                const flightTitle = location
                                    ? `${location.departure} ✈️ ${location.arrival}`
                                    : `Vol #${sessions.length - index}`;

                                return (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-lg border-2 transition-all ${selectedSessionIndex === index
                                                ? 'border-blue-500 bg-blue-900'
                                                : 'border-gray-600 bg-gray-700'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setSelectedSessionIndex(index)}
                                            className="w-full text-left"
                                        >
                                            <div className="font-bold text-lg mb-2 truncate" title={flightTitle}>
                                                {location ? (
                                                    <>
                                                        <span className="text-green-400">🛫 {location.departure}</span>
                                                        {' → '}
                                                        <span className="text-red-400">🛬 {location.arrival}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        Vol #{sessions.length - index}
                                                        <span className="text-gray-400 text-sm ml-2">(Chargement...)</span>
                                                    </>
                                                )}
                                            </div>
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
                                                📏 Distance: {formatDistance(session.distance)}
                                            </div>
                                            <div className="text-sm text-gray-300">
                                                📍 {session.tracks.length} points
                                            </div>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                shareSession(index);
                                            }}
                                            className="mt-3 w-full bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded text-sm transition-colors"
                                        >
                                            📤 Partager ce vol
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {sessionTracks.length > 0 && currentSession && (
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
                        <div className="bg-cyan-600 rounded-lg p-6">
                            <div className="text-3xl font-bold">{formatDistance(currentSession.distance)}</div>
                            <div className="text-cyan-200">Distance parcourue</div>
                        </div>
                    </div>
                )}

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

                {sessionTracks.length > 0 && (
                    <div className="mt-8 bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">📋 Détails du vol</h2>
                            <div className="text-sm text-gray-400">
                                {sessionTracks.length} points au total
                            </div>
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
                                    {sessionTracks
                                        .slice((currentPage - 1) * tracksPerPage, currentPage * tracksPerPage)
                                        .map((track, index) => (
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
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        {sessionTracks.length > tracksPerPage && (
                            <div className="p-4 border-t border-gray-700 flex justify-between items-center">
                                <div className="text-gray-400 text-sm">
                                    Affichage de {(currentPage - 1) * tracksPerPage + 1} à {Math.min(currentPage * tracksPerPage, sessionTracks.length)} sur {sessionTracks.length} points
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setCurrentPage(1)}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 rounded transition-colors"
                                    >
                                        ⏮️ Début
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 rounded transition-colors"
                                    >
                                        ◀️ Précédent
                                    </button>
                                    <div className="px-4 py-2 bg-blue-600 rounded">
                                        Page {currentPage} / {Math.ceil(sessionTracks.length / tracksPerPage)}
                                    </div>
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(Math.ceil(sessionTracks.length / tracksPerPage), prev + 1))}
                                        disabled={currentPage >= Math.ceil(sessionTracks.length / tracksPerPage)}
                                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 rounded transition-colors"
                                    >
                                        Suivant ▶️
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(Math.ceil(sessionTracks.length / tracksPerPage))}
                                        disabled={currentPage >= Math.ceil(sessionTracks.length / tracksPerPage)}
                                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 rounded transition-colors"
                                    >
                                        Fin ⏭️
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}