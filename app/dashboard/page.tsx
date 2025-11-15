'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import MissionCard from '../components/MissionCard';
import CreateMissionForm from '../components/CreateMissionForm';
import { ConfirmModal, Notification } from '../components/Modal';
import NotificationBell from '../components/NotificationBell';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type TabType = 'overview' | 'missions' | 'create-mission' | 'company' | 'stats';

export default function DashboardPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TabType>('overview');
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    const [company, setCompany] = useState<any>(null);
    const [companyMember, setCompanyMember] = useState<any>(null);
    const [missions, setMissions] = useState<any[]>([]);
    const [availableMissions, setAvailableMissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // States pour les modals
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

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            router.push('/auth/login');
            return;
        }

        setUser(session.user);
        await loadUserData(session.user.id);
        setLoading(false);
    };

    const loadUserData = async (userId: string) => {
        const { data: userData } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();

        if (userData) {
            setProfile(userData);

            const { data: memberData } = await supabase
                .from('company_members')
                .select('company_id, role, companies(*)')
                .eq('user_id', userId)
                .single();

            if (memberData) {
                setCompanyMember(memberData);
                setCompany({
                    ...memberData.companies,
                    role: memberData.role
                });
            }
        }

        loadAvailableMissions();
        loadUserMissions(userId);
    };

    const loadAvailableMissions = async () => {
        const { data } = await supabase
            .from('missions')
            .select('*, companies(name)')
            .eq('status', 'available')
            .order('created_at', { ascending: false })
            .limit(10);

        if (data) setAvailableMissions(data);
    };

    const loadUserMissions = async (userId: string) => {
        const { data } = await supabase
            .from('missions')
            .select('*, companies(name)')
            .eq('assigned_to', userId)
            .in('status', ['in_progress', 'completed'])
            .order('created_at', { ascending: false });

        if (data) setMissions(data);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    const canCreateMissions = companyMember && ['owner', 'admin', 'cmd'].includes(companyMember.role);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Chargement...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-4">
            {/* MODALS GLOBALES */}
            <Notification
                isOpen={notification.show}
                onClose={() => setNotification({ ...notification, show: false })}
                title={notification.title}
                message={notification.message}
                type={notification.type}
                autoClose={notification.type === 'success' ? 3000 : undefined}
            />

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-6">
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-2xl font-bold text-white cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => router.push('/profile')}
                                title="Modifier mon profil"
                            >
                                {profile?.username?.charAt(0).toUpperCase() || '?'}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl font-bold text-white">Bienvenue, {profile?.username}</h1>
                                    <button
                                        onClick={() => router.push('/profile')}
                                        className="text-gray-400 hover:text-white transition text-sm cursor-pointer"
                                        title="Modifier mon profil"
                                    >
                                        ✏️
                                    </button>
                                </div>
                                <p className="text-gray-400">{company?.name || 'Pilote indépendant'} {company?.role && `• ${company.role}`}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-yellow-400 font-bold text-lg">💰 {profile?.sky_credits?.toLocaleString() || 0} SC</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <NotificationBell userId={user.id} />
                            <button
                                onClick={() => router.push('/profile')}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                            >
                                👤 Profil
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                            >
                                🗺️ Carte
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                            >
                                🚪 Déconnexion
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="max-w-7xl mx-auto mb-6 z-40">
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-2 border border-blue-500/30">
                    <div className="grid grid-cols-2 md:flex gap-2">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'overview'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            📊 Vue d'ensemble
                        </button>
                        <button
                            onClick={() => setActiveTab('missions')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'missions'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            ✈️ Missions
                        </button>
                        {canCreateMissions && (
                            <button
                                onClick={() => setActiveTab('create-mission')}
                                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'create-mission'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                ➕ Créer Mission
                            </button>
                        )}
                        <button
                            onClick={() => setActiveTab('company')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'company'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            🏢 Compagnie
                        </button>
                        <button
                            onClick={() => setActiveTab('stats')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'stats'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            📈 Statistiques
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto">
                {activeTab === 'overview' && <OverviewTab profile={profile} company={company} missions={missions} />}
                {activeTab === 'missions' && (
                    <MissionsTab
                        availableMissions={availableMissions}
                        userMissions={missions}
                        userId={user?.id}
                        profile={profile}
                        onMissionAccept={() => loadUserData(user?.id)}
                        setNotification={setNotification}
                    />
                )}
                {activeTab === 'create-mission' && canCreateMissions && (
                    <CreateMissionTab
                        company={company}
                        onSuccess={() => {
                            setActiveTab('missions');
                            loadUserData(user?.id);
                        }}
                    />
                )}
                {activeTab === 'company' && <CompanyTab company={company} profile={profile} onCompanyUpdate={() => loadUserData(user?.id)} />}
                {activeTab === 'stats' && <StatsTab profile={profile} />}
            </div>
        </div>
    );
}

// ===== ONGLET VUE D'ENSEMBLE =====
function OverviewTab({ profile, company, missions }: any) {
    const [flightStats, setFlightStats] = useState({
        totalSessions: 0,
        totalDistance: 0,
        totalFlightTime: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.id) {
            loadQuickStats();
        }
    }, [profile]);

    const loadQuickStats = async () => {
        try {
            const { data: tracksData, error } = await supabase
                .rpc('get_user_flight_tracks', {
                    launcher_uuid_text: profile.launcher_uuid
                });

            if (tracksData && tracksData.length > 0) {
                const sessions = segmentFlights(tracksData);
                setFlightStats({
                    totalSessions: sessions.length,
                    totalDistance: sessions.reduce((sum, s) => sum + s.distance, 0),
                    totalFlightTime: sessions.reduce((sum, s) => sum + s.duration, 0)
                });
            }
        } catch (error) {
            console.error('Erreur chargement stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const segmentFlights = (tracks: any[]) => {
        if (tracks.length === 0) return [];
        const sessions: any[] = [];
        let currentSession: any[] = [tracks[0]];
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
            if (timeDiff > MAX_TIME_GAP) isNewSession = true;
            if (distance > MAX_TELEPORT_DISTANCE) isNewSession = true;
            if (prev.aircraft !== curr.aircraft) isNewSession = true;

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
                    const duration = new Date(currentSession[0].timestamp).getTime() -
                        new Date(currentSession[currentSession.length - 1].timestamp).getTime();

                    // ✅ RETOURNER TOUTES LES PROPRIÉTÉS
                    sessions.push({
                        distance: totalDistance,
                        duration,
                        tracks: currentSession,
                        aircraft: currentSession[0].aircraft,
                        startTime: currentSession[currentSession.length - 1].timestamp,
                        endTime: currentSession[0].timestamp
                    });
                }
                currentSession = [curr];
            } else {
                currentSession.push(curr);
            }
        }

        // ✅ NE PAS OUBLIER LA DERNIÈRE SESSION
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
            const duration = new Date(currentSession[0].timestamp).getTime() -
                new Date(currentSession[currentSession.length - 1].timestamp).getTime();

            // ✅ RETOURNER TOUTES LES PROPRIÉTÉS
            sessions.push({
                distance: totalDistance,
                duration,
                tracks: currentSession,
                aircraft: currentSession[0].aircraft,
                startTime: currentSession[currentSession.length - 1].timestamp,
                endTime: currentSession[0].timestamp
            });
        }

        return sessions;
    };

    const completedMissions = missions.filter((m: any) => m.status === 'completed').length;

    const formatTime = (milliseconds: number) => {
        const seconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return hours > 0 ? `${hours}h${minutes}m` : `${minutes}m`;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-400 font-semibold">Sky Credits</h3>
                    <span className="text-3xl">💰</span>
                </div>
                <p className="text-4xl font-bold text-yellow-400">{profile?.sky_credits?.toLocaleString() || 0}</p>
                <p className="text-xs text-gray-500 mt-1">Solde disponible</p>
            </div>

            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-400 font-semibold">Missions</h3>
                    <span className="text-3xl">✅</span>
                </div>
                <p className="text-4xl font-bold text-white">{completedMissions}</p>
                <p className="text-xs text-gray-500 mt-1">Complétées</p>
            </div>

            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-400 font-semibold">Sessions</h3>
                    <span className="text-3xl">🛫</span>
                </div>
                <p className="text-4xl font-bold text-white">{flightStats.totalSessions}</p>
                <p className="text-xs text-gray-500 mt-1">{flightStats.totalDistance.toFixed(1)} km</p>
            </div>

            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-400 font-semibold">Temps de vol</h3>
                    <span className="text-3xl">⏱️</span>
                </div>
                <p className="text-4xl font-bold text-white">{formatTime(flightStats.totalFlightTime)}</p>
                <p className="text-xs text-gray-500 mt-1">Total</p>
            </div>

            <div className="md:col-span-2 lg:col-span-4 bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4">🕒 Activité récente</h3>
                {missions.length === 0 ? (
                    <p className="text-gray-400">Aucune mission pour le moment</p>
                ) : (
                    <div className="space-y-3">
                        {missions.slice(0, 5).map((mission: any) => (
                            <MissionCard
                                key={mission.id}
                                mission={mission}
                                showCompany={true}
                                showActions={false}
                                compact={true}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// ===== ONGLET MISSIONS =====
function MissionsTab({ availableMissions, userMissions, userId, profile, onMissionAccept, setNotification }: any) {
    const [view, setView] = useState<'available' | 'my' | 'public'>('available');
    const [accepting, setAccepting] = useState(false);
    const [companyMissions, setCompanyMissions] = useState<any[]>([]);
    const [publicMissions, setPublicMissions] = useState<any[]>([]);
    const [myMissions, setMyMissions] = useState<any[]>([]);
    const [company, setCompany] = useState<any>(null);
    const [showAcceptConfirm, setShowAcceptConfirm] = useState(false);
    const [selectedMission, setSelectedMission] = useState<any>(null);

    useEffect(() => {
        loadMissions();
    }, []);

    const loadMissions = async () => {
        const { data: memberData } = await supabase
            .from('company_members')
            .select('company_id, companies(*)')
            .eq('user_id', userId)
            .single();

        if (memberData) {
            setCompany(memberData.companies);

            const { data: companyMissionsData } = await supabase
                .from('missions')
                .select('*, companies(name, logo_url)')
                .eq('company_id', memberData.company_id)
                .eq('status', 'available')
                .is('assigned_to', null)
                .order('created_at', { ascending: false });

            setCompanyMissions(companyMissionsData || []);
        }

        const { data: publicMissionsData } = await supabase
            .from('missions')
            .select('*, companies(name, logo_url)')
            .eq('visibility', 'public')
            .eq('status', 'available')
            .is('assigned_to', null)
            .is('assigned_launcher_uuid', null)
            .order('created_at', { ascending: false });

        setPublicMissions(publicMissionsData || []);

        const { data: myMissionsData } = await supabase
            .from('missions')
            .select('*, companies(name, logo_url)')
            .eq('assigned_to', userId)
            .in('status', ['in_progress', 'completed'])
            .order('assigned_at', { ascending: false });

        setMyMissions(myMissionsData || []);
    };

    const handleAcceptMission = (mission: any) => {
        // ❌ SUPPRIMÉ: Vérification inutile des crédits
        // Le pilote reçoit la récompense APRÈS avoir complété la mission, pas avant !

        // Vérifier seulement si une compagnie est requise pour les missions privées
        if (mission.visibility !== 'public' && !company) {
            setNotification({
                show: true,
                title: '❌ Compagnie requise',
                message: 'Vous devez rejoindre une compagnie pour accepter cette mission.',
                type: 'warning'
            });
            return;
        }

        setSelectedMission(mission);
        setShowAcceptConfirm(true);
    };

    const confirmAccept = async () => {
        if (!selectedMission) return;

        setShowAcceptConfirm(false);
        setAccepting(true);

        try {
            const updateData = {
                assigned_to: userId,
                assigned_launcher_uuid: profile.launcher_uuid,
                assigned_at: new Date().toISOString(),
                status: 'in_progress'
            };

            const { data, error: updateError } = await supabase
                .from('missions')
                .update(updateData)
                .eq('id', selectedMission.id)
                .is('assigned_to', null)
                .is('assigned_launcher_uuid', null)
                .select();

            if (updateError) throw updateError;

            if (!data || data.length === 0) {
                throw new Error('La mission a peut-être déjà été acceptée par quelqu\'un d\'autre');
            }

            setNotification({
                show: true,
                title: '✅ Mission acceptée !',
                message: `Vous avez accepté la mission "${selectedMission.title}".\nBon vol !`,
                type: 'success'
            });

            onMissionAccept();
            loadMissions();
        } catch (err: any) {
            console.error('Erreur:', err);
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: err.message || 'Erreur lors de l\'acceptation de la mission',
                type: 'danger'
            });
        } finally {
            setAccepting(false);
            setSelectedMission(null);
        }
    };

    const getCurrentMissions = () => {
        switch (view) {
            case 'available':
                return companyMissions;
            case 'my':
                return myMissions;
            case 'public':
                return publicMissions;
            default:
                return [];
        }
    };

    const currentMissions = getCurrentMissions();

    return (
        <div>
            <ConfirmModal
                isOpen={showAcceptConfirm}
                onClose={() => {
                    setShowAcceptConfirm(false);
                    setSelectedMission(null);
                }}
                onConfirm={confirmAccept}
                title="✈️ Accepter la mission"
                message={`Voulez-vous accepter la mission "${selectedMission?.title}" ?\n\nRoute : ${selectedMission?.departure_icao} → ${selectedMission?.arrival_icao}\nRécompense : ${selectedMission?.reward_amount?.toLocaleString()} SC`}
                confirmText="Accepter"
                cancelText="Annuler"
                type="warning"
                loading={accepting}
            />

            <div className="mb-6 flex flex-wrap gap-3">
                <button
                    onClick={() => setView('available')}
                    className={`px-6 py-3 rounded-lg font-semibold transition ${view === 'available'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                        }`}
                >
                    🏢 Ma compagnie ({companyMissions.length})
                </button>
                <button
                    onClick={() => setView('my')}
                    className={`px-6 py-3 rounded-lg font-semibold transition ${view === 'my'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                        }`}
                >
                    ✈️ Mes missions ({myMissions.length})
                </button>
                <button
                    onClick={() => setView('public')}
                    className={`px-6 py-3 rounded-lg font-semibold transition ${view === 'public'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                        }`}
                >
                    🌍 Missions publiques ({publicMissions.length})
                </button>
            </div>

            {!company && view === 'available' && (
                <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="text-3xl">⚠️</span>
                        <div>
                            <h3 className="text-yellow-400 font-bold mb-2">Aucune compagnie</h3>
                            <p className="text-gray-300 text-sm mb-3">
                                Vous devez rejoindre ou créer une compagnie pour voir et accepter ses missions
                            </p>
                            <button
                                onClick={() => window.location.href = '/company/create'}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
                            >
                                Créer ma compagnie
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {view === 'public' && publicMissions.length > 0 && (
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-4 mb-6">
                    <p className="text-blue-300 text-sm">
                        ℹ️ Les missions publiques sont accessibles à tous les pilotes, avec ou sans compagnie
                    </p>
                </div>
            )}

            {currentMissions.length === 0 ? (
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-12 border border-blue-500/30 text-center">
                    <div className="text-6xl mb-4">
                        {view === 'available' ? '🏢' : view === 'my' ? '✈️' : '🌍'}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {view === 'available' && 'Aucune mission disponible'}
                        {view === 'my' && 'Aucune mission en cours'}
                        {view === 'public' && 'Aucune mission publique'}
                    </h3>
                    <p className="text-gray-400">
                        {view === 'available' && !company && 'Créez ou rejoignez une compagnie pour voir ses missions'}
                        {view === 'available' && company && 'Votre compagnie n\'a pas encore créé de missions'}
                        {view === 'my' && 'Acceptez des missions pour commencer à voler'}
                        {view === 'public' && 'Aucune mission publique disponible pour le moment'}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentMissions.map((mission: any) => (
                        <MissionCard
                            key={mission.id}
                            mission={mission}
                            onAccept={view !== 'my' ? handleAcceptMission : undefined}
                            showCompany={view === 'public'}
                            showActions={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// ===== CREATE MISSION TAB =====
function CreateMissionTab({ company, onSuccess }: any) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">➕ Créer une Mission</h2>
                    <p className="text-gray-400">Proposez une nouvelle mission à vos pilotes</p>
                </div>

                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
                    <CreateMissionForm company={company} onSuccess={onSuccess} />
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <span>💡</span>
                        <span>Guide de création</span>
                    </h3>
                    <div className="space-y-3 text-sm text-gray-300">
                        <div>
                            <p className="font-semibold text-white mb-1">📦 Cargo</p>
                            <p className="text-xs text-gray-400">Idéal pour les vols de fret longue distance</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white mb-1">👥 Passagers</p>
                            <p className="text-xs text-gray-400">Plus rentable avec des vols long-courriers</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white mb-1">✈️ Charter</p>
                            <p className="text-xs text-gray-400">Vols privés premium</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white mb-1">🎓 Training</p>
                            <p className="text-xs text-gray-400">Parfait pour les nouveaux pilotes</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white mb-1">🚨 Urgence</p>
                            <p className="text-xs text-gray-400">Récompenses augmentées mais expire vite</p>
                        </div>
                    </div>
                </div>

                <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
                    <h3 className="text-white font-bold mb-4">📊 Votre compagnie</h3>
                    <div className="space-y-3">
                        <div>
                            <p className="text-xs text-gray-400">Balance</p>
                            <p className="text-2xl font-bold text-yellow-400">
                                {company?.balance?.toLocaleString() || 0} SC
                            </p>
                        </div>
                        <div className="pt-3 border-t border-gray-700">
                            <p className="text-xs text-gray-400">Missions créées</p>
                            <p className="text-xl font-bold text-white">
                                {company?.total_missions_created || 0}
                            </p>
                        </div>
                        <div className="pt-3 border-t border-gray-700">
                            <p className="text-xs text-gray-400">Missions complétées</p>
                            <p className="text-xl font-bold text-green-400">
                                {company?.total_missions_completed || 0}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ===== COMPANY TAB =====
function CompanyTab({ company, profile, onCompanyUpdate }: any) {
    const router = useRouter();
    const getRoleBadge = (role: string) => {
        switch (role) {
            case 'owner': return '👑 Propriétaire';
            case 'admin': return '⚙️ Administrateur';
            case 'cmd': return '✈️ Commandant';
            case 'pilot': return '🧑‍✈️ Pilote';
            default: return role;
        }
    };
    const [stats, setStats] = useState({
        totalMissionsCreated: 0,
        totalMissionsCompleted: 0,
        activeMissions: 0,
        totalMembers: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (company?.id) {
            loadCompanyStats();
        }
    }, [company?.id]);

    const loadCompanyStats = async () => {
        try {
            const { data: missionsData } = await supabase
                .from('missions')
                .select('id, status')
                .eq('company_id', company.id);

            const { data: membersData } = await supabase
                .from('company_members')
                .select('id')
                .eq('company_id', company.id);

            const createdCount = missionsData?.length || 0;
            const completedCount = missionsData?.filter(m => m.status === 'completed').length || 0;
            const activeCount = missionsData?.filter(m => ['available', 'in_progress'].includes(m.status)).length || 0;

            setStats({
                totalMissionsCreated: createdCount,
                totalMissionsCompleted: completedCount,
                activeMissions: activeCount,
                totalMembers: membersData?.length || 0
            });
        } catch (error) {
            console.error('Erreur lors du chargement des stats:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!company) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">🏢 Créer une compagnie</h3>
                    <p className="text-gray-400 mb-6">Lancez votre propre compagnie aérienne</p>
                    <button
                        onClick={() => router.push('/company/create')}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                    >
                        Créer ma compagnie
                    </button>
                </div>
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">🔍 Rejoindre une compagnie</h3>
                    <p className="text-gray-400 mb-6">Trouvez une compagnie existante</p>
                    <button
                        onClick={() => router.push('/company/browse')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                    >
                        Parcourir les compagnies
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{company.name}</h2>
                        <p className="text-gray-400">{company.description}</p>
                        <p className="text-sm text-blue-400 mt-2">
                            Votre rôle: {getRoleBadge(company.role)}
                        </p>
                    </div>
                    <button
                        onClick={() => router.push(`/company/${company.id}`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                    >
                        Voir la compagnie
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center text-gray-400 py-8">Chargement des statistiques...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                        <h3 className="text-gray-400 mb-2">Balance</h3>
                        <p className="text-3xl font-bold text-white">{company.balance?.toLocaleString() || 0} SC</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                        <h3 className="text-gray-400 mb-2">Missions créées</h3>
                        <p className="text-3xl font-bold text-white">{stats.totalMissionsCreated}</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
                        <h3 className="text-gray-400 mb-2">Missions complétées</h3>
                        <p className="text-3xl font-bold text-white">{stats.totalMissionsCompleted}</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30">
                        <h3 className="text-gray-400 mb-2">Missions actives</h3>
                        <p className="text-3xl font-bold text-white">{stats.activeMissions}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

// ===== STATS TAB =====
function StatsTab({ profile }: any) {
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
        distance: number;
    }

    interface FlightStats {
        totalSessions: number;
        totalDistance: number;
        totalFlightTime: number;
        totalTracks: number;
        maxAltitude: number;
        maxSpeed: number;
        averageDistance: number;
        averageDuration: number;
    }

    interface MissionStats {
        completedCount: number;
        totalEarnings: number;
        averageEarnings: number;
    }

    const [flightStats, setFlightStats] = useState<FlightStats>({
        totalSessions: 0,
        totalDistance: 0,
        totalFlightTime: 0,
        totalTracks: 0,
        maxAltitude: 0,
        maxSpeed: 0,
        averageDistance: 0,
        averageDuration: 0
    });

    const [sessions, setSessions] = useState<FlightSession[]>([]);
    const [missionStats, setMissionStats] = useState<MissionStats>({
        completedCount: 0,
        totalEarnings: 0,
        averageEarnings: 0
    });

    const [completedMissions, setCompletedMissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.id) {
            loadAllStats();
        }
    }, [profile]);

    // ✅ COPIÉ EXACTEMENT DE HISTORY
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

    const segmentFlights = (tracks: any[]) => {
        if (tracks.length === 0) return [];
        const sessions: any[] = [];
        let currentSession: any[] = [tracks[0]];
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
            if (timeDiff > MAX_TIME_GAP) isNewSession = true;
            if (distance > MAX_TELEPORT_DISTANCE) isNewSession = true;
            if (prev.aircraft !== curr.aircraft) isNewSession = true;

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
                    const duration = new Date(currentSession[0].timestamp).getTime() -
                        new Date(currentSession[currentSession.length - 1].timestamp).getTime();

                    sessions.push({
                        distance: totalDistance,
                        duration,
                        tracks: currentSession,  // ✅ AJOUTE
                        aircraft: currentSession[0].aircraft,  // ✅ AJOUTE
                        startTime: currentSession[currentSession.length - 1].timestamp,  // ✅ AJOUTE
                        endTime: currentSession[0].timestamp  // ✅ AJOUTE
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
            const duration = new Date(currentSession[0].timestamp).getTime() -
                new Date(currentSession[currentSession.length - 1].timestamp).getTime();

            sessions.push({
                distance: totalDistance,
                duration,
                tracks: currentSession,  // ✅ AJOUTE
                aircraft: currentSession[0].aircraft,  // ✅ AJOUTE
                startTime: currentSession[currentSession.length - 1].timestamp,  // ✅ AJOUTE
                endTime: currentSession[0].timestamp  // ✅ AJOUTE
            });
        }

        return sessions;
    };
    const loadAllStats = async () => {
        setLoading(true);

        try {
            const { data: tracksData, error } = await supabase
                .rpc('get_user_flight_tracks', {
                    launcher_uuid_text: profile.launcher_uuid
                });

            if (tracksData && tracksData.length > 0) {
                const flightSessions = segmentFlights(tracksData);
                setSessions(flightSessions);

                // Calculer les stats à partir des sessions
                const totalDistance = flightSessions.reduce((sum, s) => sum + s.distance, 0);
                const totalFlightTime = flightSessions.reduce((sum, s) => sum + s.duration, 0);

                // Trouver max altitude et speed
                let maxAltitude = 0;
                let maxSpeed = 0;
                tracksData.forEach((track: FlightTrack) => {
                    maxAltitude = Math.max(maxAltitude, track.altitude);
                    maxSpeed = Math.max(maxSpeed, track.speed);
                });

                const stats: FlightStats = {
                    totalSessions: flightSessions.length,
                    totalDistance: totalDistance,
                    totalFlightTime: totalFlightTime,
                    totalTracks: tracksData.length,
                    maxAltitude: maxAltitude,
                    maxSpeed: maxSpeed,
                    averageDistance: flightSessions.length > 0 ? totalDistance / flightSessions.length : 0,
                    averageDuration: flightSessions.length > 0 ? totalFlightTime / flightSessions.length : 0
                };

                setFlightStats(stats);
            }

            const { data: completedData } = await supabase
                .from('missions')
                .select('*, companies(name, logo_url)')
                .eq('assigned_to', profile.id)
                .eq('status', 'completed')
                .order('completed_at', { ascending: false });

            if (completedData) {
                setCompletedMissions(completedData);
                const totalEarnings = completedData.reduce((sum, mission) => sum + (mission.reward_amount || 0), 0);
                setMissionStats({
                    completedCount: completedData.length,
                    totalEarnings,
                    averageEarnings: completedData.length > 0 ? Math.round(totalEarnings / completedData.length) : 0
                });
            }
        } catch (error) {
            console.error('Erreur chargement stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (milliseconds: number) => {
        const seconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}min`;
    };

    const formatDistance = (km: number) => `${km.toFixed(1)} km`;

    const formatDate = (timestamp: string) => {
        return new Date(timestamp).toLocaleString('fr-FR', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    if (loading) {
        return <div className="text-center text-gray-400 py-8">⏳ Chargement des statistiques...</div>;
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-white">✈️ Statistiques de vol</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                        <h3 className="text-gray-400 mb-2">Sessions de vol</h3>
                        <p className="text-4xl font-bold text-white">{flightStats.totalSessions}</p>
                        <p className="text-xs text-gray-500 mt-1">{flightStats.totalTracks} points enregistrés</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
                        <h3 className="text-gray-400 mb-2">Temps de vol total</h3>
                        <p className="text-4xl font-bold text-white">{formatTime(flightStats.totalFlightTime)}</p>
                        <p className="text-xs text-gray-500 mt-1">Moyenne: {formatTime(flightStats.averageDuration)}</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30">
                        <h3 className="text-gray-400 mb-2">Distance totale</h3>
                        <p className="text-4xl font-bold text-white">{formatDistance(flightStats.totalDistance)}</p>
                        <p className="text-xs text-gray-500 mt-1">Moyenne: {formatDistance(flightStats.averageDistance)}</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                        <h3 className="text-gray-400 mb-2">Records</h3>
                        <p className="text-2xl font-bold text-white">{Math.round(flightStats.maxAltitude)} ft</p>
                        <p className="text-xs text-gray-500">Altitude max</p>
                        <p className="text-2xl font-bold text-white mt-2">{Math.round(flightStats.maxSpeed)} kts</p>
                        <p className="text-xs text-gray-500">Vitesse max</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4 text-white">💼 Missions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                        <h3 className="text-gray-400 mb-2">Missions complétées</h3>
                        <p className="text-4xl font-bold text-white">{missionStats.completedCount}</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                        <h3 className="text-gray-400 mb-2">Gains totaux</h3>
                        <p className="text-4xl font-bold text-yellow-400">{missionStats.totalEarnings.toLocaleString()} SC</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
                        <h3 className="text-gray-400 mb-2">Moyenne/mission</h3>
                        <p className="text-4xl font-bold text-white">{missionStats.averageEarnings.toLocaleString()} SC</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30">
                        <h3 className="text-gray-400 mb-2">Solde actuel</h3>
                        <p className="text-4xl font-bold text-yellow-400">{profile?.sky_credits?.toLocaleString() || 0} SC</p>
                    </div>
                </div>
            </div>

            {sessions.length > 0 && (
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                    <h3 className="text-xl font-bold text-white mb-4">📊 Dernières sessions de vol</h3>
                    <div className="space-y-3">
                        {sessions
                            .filter(session => session.tracks && session.tracks.length > 0) // ✅ Filtre
                            .slice(0, 5)
                            .map((session, index) => {
                                const duration = new Date(session.endTime).getTime() - new Date(session.startTime).getTime();
                                const maxAlt = Math.max(...session.tracks.map(t => t.altitude));
                                const maxSpd = Math.max(...session.tracks.map(t => t.speed));

                                return (
                                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="font-bold text-lg text-white">✈️ {session.aircraft}</p>
                                                <p className="text-sm text-gray-400">
                                                    {formatDate(session.startTime)} → {formatDate(session.endTime)}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-blue-400">{formatDistance(session.distance)}</p>
                                                <p className="text-sm text-gray-400">{formatTime(duration)}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 text-sm text-gray-300">
                                            <span>📏 {session.tracks.length} points</span>
                                            <span>⛰️ Max: {Math.round(maxAlt)} ft</span>
                                            <span>⚡ Max: {Math.round(maxSpd)} kts</span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    {sessions.length > 5 && (
                        <p className="text-center text-gray-400 mt-4">+ {sessions.length - 5} autres sessions</p>
                    )}
                </div>
            )}

            {completedMissions.length > 0 && (
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                    <h3 className="text-xl font-bold text-white mb-4">🎯 Missions complétées</h3>
                    <div className="space-y-3">
                        {completedMissions.map((mission: any) => (
                            <div key={mission.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-lg">{mission.title}</p>
                                        <p className="text-sm text-gray-400">
                                            {mission.departure_icao} → {mission.arrival_icao}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Complétée le {formatDate(mission.completed_at)}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-green-400">
                                            +{mission.reward_amount?.toLocaleString()} SC
                                        </p>
                                        <p className="text-sm text-gray-400">{mission.distance_nm} NM</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}