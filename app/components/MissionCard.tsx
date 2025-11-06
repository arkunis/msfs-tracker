'use client';
import { useRouter } from 'next/navigation';

const MISSION_ICONS: Record<string, string> = {
    cargo: '📦',
    passenger: '👥',
    charter: '✈️',
    training: '🎓',
    emergency: '🚨'
};

interface MissionCardProps {
    mission: any;
    onAccept?: (mission: any) => void;
    showCompany?: boolean;
    showActions?: boolean;
    compact?: boolean;
    currentUserId?: string | null;
    currentLauncherUuid?: string | null;
}

export default function MissionCard({
    mission,
    onAccept,
    showCompany = false,
    showActions = true,
    compact = false,
    currentUserId = null,
    currentLauncherUuid = null
}: MissionCardProps) {
    const router = useRouter();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'available': return 'bg-green-600/30 text-green-400 border-green-500/50';
            case 'in_progress': return 'bg-yellow-600/30 text-yellow-400 border-yellow-500/50';
            case 'completed': return 'bg-blue-600/30 text-blue-400 border-blue-500/50';
            case 'expired': return 'bg-gray-600/30 text-gray-400 border-gray-500/50';
            default: return 'bg-gray-600/30 text-gray-400 border-gray-500/50';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'available': return 'Disponible';
            case 'in_progress': return 'En cours';
            case 'completed': return 'Terminée';
            case 'expired': return 'Expirée';
            default: return status;
        }
    };

    const isAssignedToCurrentUser = () => {
        if (!mission) return false;
        if (currentUserId && mission.assigned_to && mission.assigned_to === currentUserId) return true;
        if (currentLauncherUuid && mission.assigned_launcher_uuid && mission.assigned_launcher_uuid === currentLauncherUuid) return true;
        return false;
    };

    const isAssignable = () => {
        // Allow accept if status available and not assigned to someone else
        if (mission.status !== 'available') return false;
        // if mission already has a proper assigned_to (user uuid) or assigned_launcher_uuid, don't show accept
        if (mission.assigned_to) return false;
        if (mission.assigned_launcher_uuid) return false;
        return true;
    };

    const handleAccept = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!onAccept) return;

        // Enrich the mission payload so the parent/API can set assigned_to + assigned_launcher_uuid
        const payload = {
            ...mission,
            assigned_to: currentUserId ?? mission.assigned_to ?? null,
            assigned_launcher_uuid: currentLauncherUuid ?? mission.assigned_launcher_uuid ?? null,
            assigned_at: new Date().toISOString()
        };

        onAccept(payload);
    };

    if (compact) {
        return (
            <div
                onClick={() => router.push(`/missions/${mission.id}`)}
                className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition cursor-pointer"
            >
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{MISSION_ICONS[mission.mission_type]}</span>
                        <div>
                            <h4 className="text-white font-semibold line-clamp-1">{mission.title}</h4>
                            <p className="text-sm text-gray-400">
                                {mission.departure_icao} → {mission.arrival_icao}
                            </p>
                        </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(mission.status)}`}>
                        {getStatusLabel(mission.status)}
                    </span>
                </div>
                {showCompany && mission.companies && (
                    <p className="text-xs text-gray-500 mb-2">
                        🏢 {mission.companies.name}
                    </p>
                )}
                <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-bold">
                        {(mission.reward_amount || mission.reward)?.toLocaleString()} SC
                    </span>
                    {mission.completed_at && (
                        <span className="text-xs text-gray-500">
                            ✅ {new Date(mission.completed_at).toLocaleDateString()}
                        </span>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500 transition">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{MISSION_ICONS[mission.mission_type]}</span>
                <div className="flex items-center gap-2">
                    {mission.mission_type === 'emergency' && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-600/30 text-red-400 animate-pulse">
                            🚨 URGENT
                        </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(mission.status)}`}>
                        {getStatusLabel(mission.status)}
                    </span>
                </div>
            </div>

            {/* Compagnie source (missions publiques) */}
            {showCompany && mission.companies && (
                <div className="mb-3 flex items-center gap-2">
                    {mission.companies.logo_url && (
                        <img
                            src={mission.companies.logo_url}
                            alt=""
                            className="w-6 h-6 rounded-full object-cover"
                        />
                    )}
                    <span className="text-xs text-gray-500">
                        🏢 {mission.companies.name}
                    </span>
                </div>
            )}

            {/* Titre */}
            <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                {mission.title}
            </h3>

            {/* Description si présente */}
            {mission.description && (
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {mission.description}
                </p>
            )}

            {/* Route */}
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <span className="font-mono font-bold text-white">{mission.departure_icao}</span>
                <span>✈️</span>
                <span className="font-mono font-bold text-white">{mission.arrival_icao}</span>
                {mission.distance_nm && (
                    <span className="ml-auto text-xs">
                        {mission.distance_nm} NM
                    </span>
                )}
            </div>

            {/* Détails spécifiques selon le type */}
            <div className="text-sm text-gray-400 mb-4 space-y-1">
                {mission.mission_type === 'cargo' && mission.cargo_weight && (
                    <p>📦 Cargo: {mission.cargo_weight.toLocaleString()} kg</p>
                )}
                {mission.mission_type === 'passenger' && mission.passenger_count && (
                    <p>👥 Passagers: {mission.passenger_count} ({mission.passenger_class || 'economy'})</p>
                )}
                {mission.mission_type === 'charter' && mission.aircraft_type && (
                    <p>✈️ Avion requis: {mission.aircraft_type}</p>
                )}
                {mission.min_pilot_hours > 0 && (
                    <p>⏱️ Minimum {mission.min_pilot_hours}h de vol</p>
                )}
            </div>

            {/* Récompense */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700 mb-4">
                <span className="text-gray-400 text-sm">Récompense</span>
                <span className="text-yellow-400 font-bold text-xl">
                    {mission.reward_amount?.toLocaleString() || mission.reward?.toLocaleString()} SC
                </span>
            </div>

            {/* Expiration */}
            {mission.expires_at && new Date(mission.expires_at) > new Date() && (
                <div className="mb-4 text-xs text-orange-400 flex items-center gap-1">
                    <span>⏰</span>
                    <span>Expire le {new Date(mission.expires_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</span>
                </div>
            )}

            {/* Actions */}
            {showActions && (
                <div className="flex gap-2">
                    <button
                        onClick={() => router.push(`/missions/${mission.id}`)}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition text-sm"
                    >
                        👁️ Détails
                    </button>

                    {onAccept && isAssignable() && (
                        <button
                            onClick={handleAccept}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition text-sm"
                        >
                            ✅ Accepter
                        </button>
                    )}

                    {/* Show "Continuer" only for the user/launcher who owns the mission */}
                    {mission.status === 'in_progress' && isAssignedToCurrentUser() && (
                        <button
                            onClick={() => router.push(`/missions/${mission.id}`)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition text-sm"
                        >
                            🎮 Continuer
                        </button>
                    )}

                    {/* If mission is in_progress but assigned to someone else, show a subtle label */}
                    {mission.status === 'in_progress' && !isAssignedToCurrentUser() && (
                        <div className="flex-1 flex items-center justify-center text-xs text-gray-400">
                            Assignée à un autre pilote
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}