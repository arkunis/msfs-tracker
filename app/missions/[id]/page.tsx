'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter, useParams } from 'next/navigation';
import { AIRPORTS } from '../../data/Airports';
import { ConfirmModal, InputModal, Notification } from '../../components/Modal';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const MISSION_ICONS: Record<string, string> = {
    cargo: '📦',
    passenger: '👥',
    charter: '✈️',
    training: '🎓',
    emergency: '🚨'
};

const MISSION_TYPES_LABELS: Record<string, string> = {
    cargo: 'Cargo (Fret)',
    passenger: 'Passagers',
    charter: 'Charter',
    training: 'Entraînement',
    emergency: 'Urgence'
};

const MODIFICATION_FEE_PERCENT = 0.01; // 1%
const PASSENGER_CLASSES = [
    { value: 'economy', label: 'Économique' },
    { value: 'business', label: 'Affaires' },
    { value: 'first', label: 'Première' }
];

// Fonction pour calculer la distance entre deux points (formule de Haversine)
function calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3440.065; // Rayon de la Terre en miles nautiques
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
}

export default function MissionDetailPage() {
    const router = useRouter();
    const params = useParams();
    const missionId = params.id as string;

    const [user, setUser] = useState<any>(null);
    const [mission, setMission] = useState<any>(null);
    const [company, setCompany] = useState<any>(null);
    const [userMembership, setUserMembership] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [saving, setSaving] = useState(false);
    const [showUpdateConfirm, setShowUpdateConfirm] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showDeleteInput, setShowDeleteInput] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        title: string;
        message: string;
        type: 'success' | 'danger' | 'warning' | 'info';
    }>({
        show: false,
        title: '',
        message: '',
        type: 'info'
    });

    const [editData, setEditData] = useState({
        title: '',
        description: '',
        departure_icao: '',
        arrival_icao: '',
        distance_nm: 0,
        cargo_weight: 0,
        passenger_count: 0,
        passenger_class: 'economy',
        aircraft_type: '',
        min_pilot_hours: 0
    });

    const [departureAirport, setDepartureAirport] = useState<any>(null);
    const [arrivalAirport, setArrivalAirport] = useState<any>(null);
    const [icaoError, setIcaoError] = useState({ departure: '', arrival: '' });

    useEffect(() => {
        checkAuthAndLoadMission();
    }, [missionId]);

    const checkAuthAndLoadMission = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            router.push('/auth/login');
            return;
        }

        setUser(session.user);

        // Charger la mission
        const { data: missionData, error: missionError } = await supabase
            .from('missions')
            .select('*, companies(name, logo_url, balance)')
            .eq('id', missionId)
            .single();

        if (missionError || !missionData) {
            router.push('/dashboard');
            return;
        }

        setMission(missionData);
        setCompany(missionData.companies);

        // Initialiser les données d'édition
        setEditData({
            title: missionData.title || '',
            description: missionData.description || '',
            departure_icao: missionData.departure_icao || '',
            arrival_icao: missionData.arrival_icao || '',
            distance_nm: missionData.distance_nm || 0,
            cargo_weight: missionData.cargo_weight || 0,
            passenger_count: missionData.passenger_count || 0,
            passenger_class: missionData.passenger_class || 'economy',
            aircraft_type: missionData.aircraft_type || '',
            min_pilot_hours: missionData.min_pilot_hours || 0
        });

        // Charger les infos des aéroports
        if (missionData.departure_icao) {
            const dep = AIRPORTS.find(a => a.icao?.toUpperCase() === missionData.departure_icao.toUpperCase());
            setDepartureAirport(dep);
        }
        if (missionData.arrival_icao) {
            const arr = AIRPORTS.find(a => a.icao?.toUpperCase() === missionData.arrival_icao.toUpperCase());
            setArrivalAirport(arr);
        }

        // Vérifier les permissions
        const { data: memberData } = await supabase
            .from('company_members')
            .select('*')
            .eq('company_id', missionData.company_id)
            .eq('user_id', session.user.id)
            .single();

        setUserMembership(memberData);
        setLoading(false);
    };

    const findAirport = (icao: string) => {
        return AIRPORTS.find(a => a.icao?.toUpperCase() === icao.toUpperCase());
    };

    const validateAndCalculateDistance = (depIcao: string, arrIcao: string) => {
        const depAirport = findAirport(depIcao);
        const arrAirport = findAirport(arrIcao);

        if (depIcao.length === 4) {
            if (!depAirport) {
                setIcaoError(prev => ({ ...prev, departure: '❌ Code ICAO invalide' }));
                setDepartureAirport(null);
            } else {
                setIcaoError(prev => ({ ...prev, departure: '' }));
                setDepartureAirport(depAirport);
            }
        } else {
            setIcaoError(prev => ({ ...prev, departure: '' }));
            setDepartureAirport(null);
        }

        if (arrIcao.length === 4) {
            if (!arrAirport) {
                setIcaoError(prev => ({ ...prev, arrival: '❌ Code ICAO invalide' }));
                setArrivalAirport(null);
            } else {
                setIcaoError(prev => ({ ...prev, arrival: '' }));
                setArrivalAirport(arrAirport);
            }
        } else {
            setIcaoError(prev => ({ ...prev, arrival: '' }));
            setArrivalAirport(null);
        }

        if (depAirport && arrAirport && depIcao !== arrIcao) {
            const distance = calculateHaversineDistance(
                depAirport.lat,
                depAirport.lon,
                arrAirport.lat,
                arrAirport.lon
            );
            setEditData(prev => ({ ...prev, distance_nm: distance }));
        } else if (depIcao === arrIcao && depIcao.length === 4) {
            setIcaoError(prev => ({
                ...prev,
                arrival: '❌ L\'aéroport d\'arrivée doit être différent'
            }));
        }
    };

    const handleUpdateMission = async () => {
        if (!canEdit) return;

        // Validation
        if (!departureAirport || !arrivalAirport) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: 'Veuillez entrer des codes ICAO valides',
                type: 'danger'
            });
            return;
        }

        if (editData.departure_icao === editData.arrival_icao) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: 'Les aéroports de départ et d\'arrivée doivent être différents',
                type: 'danger'
            });
            return;
        }

        // Vérifier que la compagnie a assez de SC
        const modificationFee = Math.ceil(mission.reward_amount * MODIFICATION_FEE_PERCENT);

        if (company.balance < modificationFee) {
            setNotification({
                show: true,
                title: '❌ Fonds insuffisants',
                message: `La compagnie a besoin de ${modificationFee.toLocaleString()} SC pour modifier cette mission.`,
                type: 'danger'
            });
            return;
        }

        // Afficher la modal de confirmation
        setShowUpdateConfirm(true);
    };

    const confirmUpdate = async () => {
        setShowUpdateConfirm(false);
        setSaving(true);

        const modificationFee = Math.ceil(mission.reward_amount * MODIFICATION_FEE_PERCENT);

        try {
            // Mettre à jour la mission
            const updatePayload: any = {
                title: editData.title,
                description: editData.description,
                departure_icao: editData.departure_icao.toUpperCase(),
                arrival_icao: editData.arrival_icao.toUpperCase(),
                distance_nm: editData.distance_nm,
                min_pilot_hours: editData.min_pilot_hours
            };

            if (mission.mission_type === 'cargo') {
                updatePayload.cargo_weight = editData.cargo_weight;
            } else if (mission.mission_type === 'passenger') {
                updatePayload.passenger_count = editData.passenger_count;
                updatePayload.passenger_class = editData.passenger_class;
            } else if (mission.mission_type === 'charter') {
                updatePayload.aircraft_type = editData.aircraft_type;
            }

            const { error: updateError } = await supabase
                .from('missions')
                .update(updatePayload)
                .eq('id', missionId);

            if (updateError) throw updateError;

            // Déduire les frais de modification
            const { error: balanceError } = await supabase
                .from('companies')
                .update({
                    balance: company.balance - modificationFee
                })
                .eq('id', mission.company_id);

            if (balanceError) throw balanceError;

            setNotification({
                show: true,
                title: '✅ Succès',
                message: `Mission mise à jour avec succès !\nFrais de modification : ${modificationFee.toLocaleString()} SC`,
                type: 'success'
            });

            setEditMode(false);
            checkAuthAndLoadMission(); // ✅ CORRIGÉ
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue',
                type: 'danger'
            });
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteMission = async () => {
        if (!canEdit) return;
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        setShowDeleteConfirm(false);
        setShowDeleteInput(true);
    };

    const executeDelete = async (value: string) => {
        setShowDeleteInput(false);
        setDeleting(true);

        try {
            // Supprimer la mission directement
            // (pas de tables liées à nettoyer)
            const { error } = await supabase
                .from('missions')
                .delete()
                .eq('id', missionId);

            if (error) throw error;

            setNotification({
                show: true,
                title: '✅ Mission supprimée',
                message: `La mission a été supprimée.\nLes ${mission.reward_amount.toLocaleString()} SC ne sont pas remboursés.`,
                type: 'success'
            });

            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue lors de la suppression',
                type: 'danger'
            });
            setDeleting(false);
        }
    };

    const canEdit = userMembership &&
        ['owner', 'admin', 'cmd'].includes(userMembership.role) &&
        mission?.status === 'available' &&
        !mission?.assigned_to;

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Chargement...</div>
            </div>
        );
    }

    if (!mission) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Mission introuvable</div>
            </div>
        );
    }

    const modificationFee = Math.ceil(mission.reward_amount * MODIFICATION_FEE_PERCENT);

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 p-4">
            <div className="max-w-5xl mx-auto mt-8">
                {/* MODALS */}
                <ConfirmModal
                    isOpen={showUpdateConfirm}
                    onClose={() => setShowUpdateConfirm(false)}
                    onConfirm={confirmUpdate}
                    title="💰 Confirmer la modification"
                    message={`Frais de modification : ${modificationFee.toLocaleString()} SC (${(MODIFICATION_FEE_PERCENT * 100)}%)\n\nCes frais seront déduits de la balance de la compagnie.\nLa récompense de la mission reste inchangée.\n\nVoulez-vous continuer ?`}
                    confirmText="Confirmer"
                    cancelText="Annuler"
                    type="warning"
                    loading={saving}
                />

                <ConfirmModal
                    isOpen={showDeleteConfirm}
                    onClose={() => setShowDeleteConfirm(false)}
                    onConfirm={confirmDelete}
                    title="⚠️ Supprimer la mission"
                    message={`Vous êtes sur le point de supprimer la mission "${mission?.title}".\n\n⚠️ IMPORTANT : Les ${mission?.reward_amount?.toLocaleString()} SC investis dans cette mission ne seront PAS remboursés !\n\nCette action est irréversible. Voulez-vous continuer ?`}
                    confirmText="Continuer"
                    cancelText="Annuler"
                    type="danger"
                />

                <InputModal
                    isOpen={showDeleteInput}
                    onClose={() => setShowDeleteInput(false)}
                    onConfirm={executeDelete}
                    title="🔒 Confirmation finale"
                    message={`Pour confirmer la suppression définitive, tapez le mot :`}
                    placeholder="Tapez SUPPRIMER"
                    expectedValue="SUPPRIMER"
                    confirmText="Supprimer définitivement"
                    cancelText="Annuler"
                    type="danger"
                />

                <Notification
                    isOpen={notification.show}
                    onClose={() => setNotification({ ...notification, show: false })}
                    title={notification.title}
                    message={notification.message}
                    type={notification.type}
                    autoClose={notification.type === 'success' ? 3000 : undefined}
                />

                {/* Header */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 text-gray-400 hover:text-white transition flex items-center gap-2 cursor-pointer"
                >
                    ← Retour
                </button>

                {/* Carte principale de la mission */}
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 mb-6">
                    {/* En-tête avec icône et statut */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="text-6xl">
                                {MISSION_ICONS[mission.mission_type]}
                            </div>
                            <div>
                                {editMode ? (
                                    <input
                                        type="text"
                                        value={editData.title}
                                        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                                        className="text-3xl font-bold bg-gray-800 text-white px-4 py-2 rounded-lg mb-2 w-full"
                                        maxLength={100}
                                    />
                                ) : (
                                    <h1 className="text-3xl font-bold text-white">{mission.title}</h1>
                                )}
                                <div className="flex items-center gap-3 mt-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${mission.status === 'available' ? 'bg-green-600/30 text-green-400' :
                                        mission.status === 'in_progress' ? 'bg-yellow-600/30 text-yellow-400' :
                                            mission.status === 'completed' ? 'bg-blue-600/30 text-blue-400' :
                                                'bg-gray-600/30 text-gray-400'
                                        }`}>
                                        {mission.status === 'available' ? 'Disponible' :
                                            mission.status === 'in_progress' ? 'En cours' :
                                                mission.status === 'completed' ? 'Terminée' : mission.status}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        {MISSION_TYPES_LABELS[mission.mission_type]}
                                    </span>
                                    {mission.visibility === 'public' && (
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/30 text-purple-400">
                                            🌍 Public
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Boutons d'action */}
                        {canEdit && !editMode && (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setEditMode(true)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                                >
                                    ✏️ Modifier
                                </button>
                                <button
                                    onClick={handleDeleteMission}
                                    disabled={deleting}
                                    className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    {deleting ? '⏳' : '🗑️ Supprimer'}
                                </button>
                            </div>
                        )}

                        {editMode && (
                            <div className="flex gap-2">
                                <button
                                    onClick={handleUpdateMission}
                                    disabled={saving}
                                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    {saving ? '⏳ Enregistrement...' : '💾 Enregistrer'}
                                </button>
                                <button
                                    onClick={() => {
                                        setEditMode(false);
                                        checkAuthAndLoadMission();
                                    }}
                                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
                                >
                                    ❌ Annuler
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-gray-400 text-sm mb-2">Description</h3>
                        {editMode ? (
                            <textarea
                                value={editData.description}
                                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg resize-none"
                                rows={3}
                                maxLength={500}
                            />
                        ) : (
                            <p className="text-white">
                                {mission.description || 'Aucune description'}
                            </p>
                        )}
                    </div>

                    {/* Route */}
                    <div className="mb-6">
                        <h3 className="text-gray-400 text-sm mb-3">✈️ Route</h3>
                        {editMode ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-white font-semibold mb-2 text-sm">
                                        Départ (ICAO)
                                    </label>
                                    <input
                                        type="text"
                                        value={editData.departure_icao}
                                        onChange={(e) => {
                                            const val = e.target.value.toUpperCase();
                                            setEditData({ ...editData, departure_icao: val });
                                            validateAndCalculateDistance(val, editData.arrival_icao);
                                        }}
                                        className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg border ${icaoError.departure ? 'border-red-500' : 'border-gray-700'
                                            } uppercase`}
                                        maxLength={4}
                                    />
                                    {icaoError.departure && (
                                        <p className="text-red-400 text-xs mt-1">{icaoError.departure}</p>
                                    )}
                                    {departureAirport && (
                                        <p className="text-green-400 text-xs mt-1">✓ {departureAirport.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2 text-sm">
                                        Arrivée (ICAO)
                                    </label>
                                    <input
                                        type="text"
                                        value={editData.arrival_icao}
                                        onChange={(e) => {
                                            const val = e.target.value.toUpperCase();
                                            setEditData({ ...editData, arrival_icao: val });
                                            validateAndCalculateDistance(editData.departure_icao, val);
                                        }}
                                        className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg border ${icaoError.arrival ? 'border-red-500' : 'border-gray-700'
                                            } uppercase`}
                                        maxLength={4}
                                    />
                                    {icaoError.arrival && (
                                        <p className="text-red-400 text-xs mt-1">{icaoError.arrival}</p>
                                    )}
                                    {arrivalAirport && (
                                        <p className="text-green-400 text-xs mt-1">✓ {arrivalAirport.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2 text-sm">
                                        Distance (NM)
                                    </label>
                                    <input
                                        type="number"
                                        value={editData.distance_nm}
                                        readOnly
                                        className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 cursor-not-allowed"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Calculé automatiquement</p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-center flex-1">
                                        <p className="text-gray-400 text-sm mb-1">Départ</p>
                                        <p className="text-2xl font-bold text-white font-mono">{mission.departure_icao}</p>
                                        {departureAirport && (
                                            <p className="text-sm text-gray-400 mt-1">{departureAirport.name}</p>
                                        )}
                                    </div>
                                    <div className="text-4xl mx-8">→</div>
                                    <div className="text-center flex-1">
                                        <p className="text-gray-400 text-sm mb-1">Arrivée</p>
                                        <p className="text-2xl font-bold text-white font-mono">{mission.arrival_icao}</p>
                                        {arrivalAirport && (
                                            <p className="text-sm text-gray-400 mt-1">{arrivalAirport.name}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-700 text-center">
                                    <p className="text-gray-400 text-sm">Distance</p>
                                    <p className="text-xl font-bold text-yellow-400">{mission.distance_nm} NM</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Détails spécifiques selon le type */}
                    <div className="mb-6">
                        <h3 className="text-gray-400 text-sm mb-3">📋 Détails de la mission</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mission.mission_type === 'cargo' && (
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <p className="text-gray-400 text-sm mb-1">Poids du cargo</p>
                                    {editMode ? (
                                        <input
                                            type="number"
                                            value={editData.cargo_weight}
                                            onChange={(e) => setEditData({ ...editData, cargo_weight: parseInt(e.target.value) || 0 })}
                                            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg"
                                            min="0"
                                        />
                                    ) : (
                                        <p className="text-xl font-bold text-white">
                                            {mission.cargo_weight?.toLocaleString()} kg
                                        </p>
                                    )}
                                </div>
                            )}

                            {mission.mission_type === 'passenger' && (
                                <>
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                        <p className="text-gray-400 text-sm mb-1">Nombre de passagers</p>
                                        {editMode ? (
                                            <input
                                                type="number"
                                                value={editData.passenger_count}
                                                onChange={(e) => setEditData({ ...editData, passenger_count: parseInt(e.target.value) || 0 })}
                                                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg"
                                                min="1"
                                            />
                                        ) : (
                                            <p className="text-xl font-bold text-white">
                                                {mission.passenger_count} passagers
                                            </p>
                                        )}
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                        <p className="text-gray-400 text-sm mb-1">Classe</p>
                                        {editMode ? (
                                            <select
                                                value={editData.passenger_class}
                                                onChange={(e) => setEditData({ ...editData, passenger_class: e.target.value })}
                                                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg"
                                            >
                                                {PASSENGER_CLASSES.map(cls => (
                                                    <option key={cls.value} value={cls.value}>
                                                        {cls.label}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <p className="text-xl font-bold text-white capitalize">
                                                {mission.passenger_class}
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}

                            {mission.mission_type === 'charter' && mission.aircraft_type && (
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <p className="text-gray-400 text-sm mb-1">Avion requis</p>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={editData.aircraft_type}
                                            onChange={(e) => setEditData({ ...editData, aircraft_type: e.target.value })}
                                            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg"
                                        />
                                    ) : (
                                        <p className="text-xl font-bold text-white">{mission.aircraft_type}</p>
                                    )}
                                </div>
                            )}

                            {mission.min_pilot_hours > 0 && (
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <p className="text-gray-400 text-sm mb-1">Heures de vol minimum</p>
                                    {editMode ? (
                                        <input
                                            type="number"
                                            value={editData.min_pilot_hours}
                                            onChange={(e) => setEditData({ ...editData, min_pilot_hours: parseInt(e.target.value) || 0 })}
                                            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg"
                                            min="0"
                                        />
                                    ) : (
                                        <p className="text-xl font-bold text-white">{mission.min_pilot_hours}h</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Récompense */}
                    <div className="bg-linear-to-r from-yellow-900/30 to-green-900/30 border border-yellow-500/50 rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">💰 Récompense</p>
                                <p className="text-4xl font-bold text-yellow-400">
                                    {mission.reward_amount?.toLocaleString()} SC
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    La récompense ne change pas lors de modifications
                                </p>
                            </div>
                            {editMode && (
                                <div className="text-right">
                                    <p className="text-gray-400 text-sm mb-1">Frais de modification</p>
                                    <p className="text-2xl font-bold text-orange-400">
                                        {modificationFee.toLocaleString()} SC
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {(MODIFICATION_FEE_PERCENT * 100)}% de la récompense
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Informations complémentaires */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                            <p className="text-gray-400 mb-1">🏢 Compagnie</p>
                            <p className="text-white font-semibold">{company?.name}</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4">
                            <p className="text-gray-400 mb-1">📅 Créée le</p>
                            <p className="text-white font-semibold">
                                {new Date(mission.created_at).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                        {mission.expires_at && (
                            <div className="bg-gray-800/50 rounded-lg p-4">
                                <p className="text-gray-400 mb-1">⏰ Expire le</p>
                                <p className="text-white font-semibold">
                                    {new Date(mission.expires_at).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        )}
                        {mission.assigned_to && (
                            <div className="bg-gray-800/50 rounded-lg p-4">
                                <p className="text-gray-400 mb-1">👤 Assignée à</p>
                                <p className="text-white font-semibold">
                                    {mission.assigned_at && new Date(mission.assigned_at).toLocaleDateString()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Avertissements */}
                {!canEdit && mission.status === 'available' && !mission.assigned_to && (
                    <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6 mb-6">
                        <p className="text-yellow-400 text-sm">
                            ℹ️ Vous n'avez pas les permissions pour modifier ou supprimer cette mission.
                            Seuls les propriétaires, administrateurs et commandants peuvent le faire.
                        </p>
                    </div>
                )}

                {mission.status !== 'available' && (
                    <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
                        <p className="text-blue-300 text-sm">
                            ℹ️ Cette mission ne peut plus être modifiée car elle est {
                                mission.status === 'in_progress' ? 'en cours' :
                                    mission.status === 'completed' ? 'terminée' : mission.status
                            }.
                        </p>
                    </div>
                )}

                {mission.assigned_to && (
                    <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6 mb-6">
                        <p className="text-purple-300 text-sm">
                            ℹ️ Cette mission est assignée à un pilote et ne peut plus être modifiée ou supprimée.
                        </p>
                    </div>
                )}

                {/* Zone dangereuse */}
                {canEdit && (
                    <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6">
                        <h3 className="text-red-400 font-bold mb-3">⚠️ Zone dangereuse</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <p>
                                <strong className="text-red-400">• Modification :</strong> Coûte {modificationFee.toLocaleString()} SC ({(MODIFICATION_FEE_PERCENT * 100)}% de la récompense).
                                Les frais sont déduits de la balance de la compagnie.
                            </p>
                            <p>
                                <strong className="text-red-400">• Suppression :</strong> Les {mission.reward_amount?.toLocaleString()} SC investis dans cette mission
                                ne seront PAS remboursés. La suppression est définitive et irréversible.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}