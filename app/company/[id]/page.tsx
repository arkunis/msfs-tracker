'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter, useParams } from 'next/navigation';
import { ConfirmModal, Notification } from '../../components/Modal';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CompanyDetailPage() {
    const router = useRouter();
    const params = useParams();
    const companyId = params.id as string;

    const [user, setUser] = useState<any>(null);
    const [company, setCompany] = useState<any>(null);
    const [userMembership, setUserMembership] = useState<any>(null);
    const [members, setMembers] = useState<any[]>([]);
    const [missions, setMissions] = useState<any[]>([]);
    const [stats, setStats] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'missions' | 'settings'>('overview');
    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState({ name: '', description: '' });

    // States pour les modals
    const [showDeleteCompanyConfirm, setShowDeleteCompanyConfirm] = useState(false);
    const [showRemoveMemberConfirm, setShowRemoveMemberConfirm] = useState(false);
    const [showChangeRoleModal, setShowChangeRoleModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState<any>(null);
    const [selectedRole, setSelectedRole] = useState<string>('');
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
        checkAuthAndLoadCompany();
    }, [companyId]);

    const checkAuthAndLoadCompany = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            router.push('/auth/login');
            return;
        }

        setUser(session.user);

        const { data: companyData } = await supabase
            .from('companies')
            .select('*')
            .eq('id', companyId)
            .single();

        if (!companyData) {
            router.push('/dashboard');
            return;
        }

        setCompany(companyData);
        setEditData({ name: companyData.name, description: companyData.description || '' });

        const { data: memberData } = await supabase
            .from('company_members')
            .select('*')
            .eq('company_id', companyId)
            .eq('user_id', session.user.id)
            .single();

        setUserMembership(memberData);

        await Promise.all([
            loadMembers(),
            loadMissions(),
            loadStats()
        ]);

        setLoading(false);
    };

    const loadMembers = async () => {
        const { data } = await supabase
            .from('company_members')
            .select('*, users(username, total_flights, total_flight_time)')
            .eq('company_id', companyId)
            .order('joined_at', { ascending: true });
        setMembers(data || []);
    };

    const loadMissions = async () => {
        const { data } = await supabase
            .from('missions')
            .select('*')
            .eq('company_id', companyId)
            .order('created_at', { ascending: false })
            .limit(10);

        setMissions(data || []);
    };

    const loadStats = async () => {
        const { data: allMissions } = await supabase
            .from('missions')
            .select('id, status')
            .eq('company_id', companyId);

        const totalMissions = allMissions?.length || 0;
        const completedMissions = allMissions?.filter(m => m.status === 'completed').length || 0;
        const activeMissions = allMissions?.filter(m => ['available', 'in_progress'].includes(m.status)).length || 0;

        setStats({
            totalMissions,
            completedMissions,
            activeMissions
        });
    };

    const handleUpdateCompany = async () => {
        try {
            const { error } = await supabase
                .from('companies')
                .update({
                    name: editData.name,
                    description: editData.description
                })
                .eq('id', companyId);

            if (error) throw error;

            setCompany({ ...company, ...editData });
            setEditMode(false);
            setNotification({
                show: true,
                title: '✅ Succès',
                message: 'Compagnie mise à jour avec succès',
                type: 'success'
            });
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue',
                type: 'danger'
            });
        }
    };

    const handleDeleteCompany = () => {
        setShowDeleteCompanyConfirm(true);
    };

    const confirmDeleteCompany = async () => {
        setShowDeleteCompanyConfirm(false);

        try {
            await supabase.from('company_members').delete().eq('company_id', companyId);
            
            const { error } = await supabase
                .from('companies')
                .delete()
                .eq('id', companyId);

            if (error) throw error;

            setNotification({
                show: true,
                title: '✅ Compagnie supprimée',
                message: 'La compagnie a été supprimée avec succès',
                type: 'success'
            });

            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue',
                type: 'danger'
            });
        }
    };

    const handleRemoveMember = (member: any) => {
        setSelectedMember(member);
        setShowRemoveMemberConfirm(true);
    };

    const confirmRemoveMember = async () => {
        if (!selectedMember) return;

        setShowRemoveMemberConfirm(false);

        try {
            const { error } = await supabase
                .from('company_members')
                .delete()
                .eq('id', selectedMember.id);

            if (error) throw error;

            setNotification({
                show: true,
                title: '✅ Membre retiré',
                message: `${selectedMember.users.username} a été retiré de la compagnie`,
                type: 'success'
            });

            loadMembers();
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue',
                type: 'danger'
            });
        } finally {
            setSelectedMember(null);
        }
    };

    const handleChangeRole = (member: any, newRole: string) => {
        setSelectedMember(member);
        setSelectedRole(newRole);
        setShowChangeRoleModal(true);
    };

    const confirmChangeRole = async () => {
        if (!selectedMember || !selectedRole) return;

        setShowChangeRoleModal(false);

        try {
            const { error } = await supabase
                .from('company_members')
                .update({ role: selectedRole })
                .eq('id', selectedMember.id);

            if (error) throw error;

            setNotification({
                show: true,
                title: '✅ Rôle modifié',
                message: `${selectedMember.users.username} est maintenant ${
                    selectedRole === 'cmd' ? 'Commandant' :
                    selectedRole === 'admin' ? 'Administrateur' : 'Pilote'
                }`,
                type: 'success'
            });

            loadMembers();
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue',
                type: 'danger'
            });
        } finally {
            setSelectedMember(null);
            setSelectedRole('');
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/company/${companyId}`);
        setNotification({
            show: true,
            title: '✅ Lien copié !',
            message: 'Le lien de la compagnie a été copié dans le presse-papiers',
            type: 'success'
        });
    };

    const canManage = userMembership && ['owner', 'admin', 'cmd'].includes(userMembership.role);
    const isOwner = userMembership && userMembership.role === 'owner';

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Chargement...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-4">
            <div className="max-w-7xl mx-auto mt-8">
                {/* MODALS */}
                <ConfirmModal
                    isOpen={showDeleteCompanyConfirm}
                    onClose={() => setShowDeleteCompanyConfirm(false)}
                    onConfirm={confirmDeleteCompany}
                    title="⚠️ Supprimer la compagnie"
                    message={`Êtes-vous sûr de vouloir supprimer "${company?.name}" ?\n\nCette action est irréversible !\nToutes les missions et données seront perdues.`}
                    confirmText="Supprimer"
                    cancelText="Annuler"
                    type="danger"
                />

                <ConfirmModal
                    isOpen={showRemoveMemberConfirm}
                    onClose={() => {
                        setShowRemoveMemberConfirm(false);
                        setSelectedMember(null);
                    }}
                    onConfirm={confirmRemoveMember}
                    title="👤 Retirer un membre"
                    message={`Êtes-vous sûr de vouloir retirer ${selectedMember?.users?.username} de la compagnie ?\n\nCette personne perdra l'accès aux missions de la compagnie.`}
                    confirmText="Retirer"
                    cancelText="Annuler"
                    type="warning"
                />

                <ConfirmModal
                    isOpen={showChangeRoleModal}
                    onClose={() => {
                        setShowChangeRoleModal(false);
                        setSelectedMember(null);
                        setSelectedRole('');
                    }}
                    onConfirm={confirmChangeRole}
                    title="🔄 Changer le rôle"
                    message={`Voulez-vous changer le rôle de ${selectedMember?.users?.username} en ${
                        selectedRole === 'cmd' ? 'Commandant' :
                        selectedRole === 'admin' ? 'Administrateur' : 'Pilote'
                    } ?\n\n${
                        selectedRole === 'cmd' ? 'Les commandants peuvent créer, modifier et supprimer des missions.' :
                        selectedRole === 'admin' ? 'Les administrateurs ont les mêmes droits que les commandants.' :
                        'Les pilotes peuvent uniquement accepter et effectuer des missions.'
                    }`}
                    confirmText="Confirmer"
                    cancelText="Annuler"
                    type="warning"
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
                    onClick={() => router.push('/dashboard')}
                    className="mb-6 text-gray-400 hover:text-white transition flex items-center gap-2 cursor-pointer"
                >
                    ← Retour au dashboard
                </button>

                {/* Carte de la compagnie */}
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 mb-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                            {company.logo_url && (
                                <img
                                    src={company.logo_url}
                                    alt={company.name}
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            )}
                            <div>
                                {editMode ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editData.name}
                                            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                            className="text-3xl font-bold bg-gray-800 text-white px-4 py-2 rounded-lg mb-2"
                                            maxLength={50}
                                        />
                                        <textarea
                                            value={editData.description}
                                            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                                            className="w-full bg-gray-800 text-gray-400 px-4 py-2 rounded-lg resize-none"
                                            rows={2}
                                            maxLength={500}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-3xl font-bold text-white">{company.name}</h1>
                                        <p className="text-gray-400 mt-1">{company.description}</p>
                                    </>
                                )}
                                <div className="flex items-center gap-4 mt-2">
                                    <span className="text-sm text-blue-400">👥 {members.length} membres</span>
                                    <span className="text-sm text-gray-500">•</span>
                                    <span className="text-sm text-gray-400">Créée le {new Date(company.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>

                        {canManage && (
                            <div className="flex gap-2">
                                {editMode ? (
                                    <>
                                        <button
                                            onClick={handleUpdateCompany}
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                                        >
                                            💾 Enregistrer
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditMode(false);
                                                setEditData({ name: company.name, description: company.description || '' });
                                            }}
                                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
                                        >
                                            ❌ Annuler
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => setEditMode(true)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        ✏️ Modifier
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Lien de partage */}
                    <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                        <p className="text-sm text-gray-400 mb-2">🔗 Lien de partage</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={`${window.location.origin}/company/${companyId}`}
                                readOnly
                                className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm"
                            />
                            <button
                                onClick={handleCopyLink}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-sm"
                            >
                                📋 Copier
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats rapides */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-yellow-500/30">
                        <h3 className="text-gray-400 text-sm mb-2">Balance</h3>
                        <p className="text-3xl font-bold text-yellow-400">{company.balance?.toLocaleString() || 0} SC</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
                        <h3 className="text-gray-400 text-sm mb-2">Missions créées</h3>
                        <p className="text-3xl font-bold text-white">{stats.totalMissions}</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-green-500/30">
                        <h3 className="text-gray-400 text-sm mb-2">Complétées</h3>
                        <p className="text-3xl font-bold text-white">{stats.completedMissions}</p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                        <h3 className="text-gray-400 text-sm mb-2">Actives</h3>
                        <p className="text-3xl font-bold text-white">{stats.activeMissions}</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-2 border border-blue-500/30 mb-6">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'
                                }`}
                        >
                            📊 Vue d'ensemble
                        </button>
                        <button
                            onClick={() => setActiveTab('members')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'members' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'
                                }`}
                        >
                            👥 Membres
                        </button>
                        <button
                            onClick={() => setActiveTab('missions')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'missions' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'
                                }`}
                        >
                            ✈️ Missions
                        </button>
                        {isOwner && (
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'
                                    }`}
                            >
                                ⚙️ Paramètres
                            </button>
                        )}
                    </div>
                </div>

                {/* Contenu des tabs */}
                {activeTab === 'overview' && (
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Vue d'ensemble</h2>
                        <p className="text-gray-400">Statistiques et activité de la compagnie...</p>
                    </div>
                )}

                {activeTab === 'members' && (
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Membres ({members.length})</h2>
                        <div className="space-y-3">
                            {members.map((member) => (
                                <div key={member.id} className="bg-gray-800/50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <p className="text-white font-semibold">{member.users.username}</p>
                                            <div className="flex items-center gap-4 mt-1">
                                                <span className={`text-xs px-2 py-1 rounded-full ${
                                                    member.role === 'owner' ? 'bg-yellow-600/30 text-yellow-400' :
                                                    member.role === 'admin' ? 'bg-blue-600/30 text-blue-400' :
                                                    member.role === 'cmd' ? 'bg-purple-600/30 text-purple-400' :
                                                    'bg-gray-600/30 text-gray-400'
                                                }`}>
                                                    {member.role === 'owner' ? '👑 Owner' :
                                                     member.role === 'admin' ? '⚙️ Admin' :
                                                     member.role === 'cmd' ? '✈️ Commandant' :
                                                     '🧑‍✈️ Pilote'}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {member.users.total_flights || 0} vols
                                                </span>
                                            </div>
                                        </div>

                                        {/* Actions pour le owner */}
                                        {isOwner && member.role !== 'owner' && member.user_id !== user.id && (
                                            <div className="flex gap-2">
                                                {/* Dropdown pour changer le rôle */}
                                                <select
                                                    value={member.role}
                                                    onChange={(e) => handleChangeRole(member, e.target.value)}
                                                    className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm border border-gray-600 hover:bg-gray-600 transition"
                                                >
                                                    <option value="pilot">🧑‍✈️ Pilote</option>
                                                    <option value="cmd">✈️ Commandant</option>
                                                    <option value="admin">⚙️ Admin</option>
                                                </select>

                                                <button
                                                    onClick={() => handleRemoveMember(member)}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition text-sm"
                                                >
                                                    Retirer
                                                </button>
                                            </div>
                                        )}

                                        {/* Admin/Cmd ne peuvent retirer que les pilotes */}
                                        {!isOwner && canManage && 
                                         member.role === 'pilot' && 
                                         member.user_id !== user.id && (
                                            <button
                                                onClick={() => handleRemoveMember(member)}
                                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition text-sm"
                                            >
                                                Retirer
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'missions' && (
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-white">Missions récentes</h2>
                            {canManage && (
                                <button
                                    onClick={() => router.push('/dashboard')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                                >
                                    ➕ Créer une mission
                                </button>
                            )}
                        </div>
                        <div className="space-y-3">
                            {missions.map((mission) => (
                                <div key={mission.id} className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-800/70 transition"
                                     onClick={() => router.push(`/missions/${mission.id}`)}>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-semibold">{mission.title}</p>
                                            <p className="text-sm text-gray-400">{mission.departure_icao} → {mission.arrival_icao}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            mission.status === 'available' ? 'bg-green-600/30 text-green-400' :
                                            mission.status === 'in_progress' ? 'bg-yellow-600/30 text-yellow-400' :
                                            'bg-blue-600/30 text-blue-400'
                                        }`}>
                                            {mission.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'settings' && isOwner && (
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">⚙️ Paramètres</h2>
                        <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
                            <h3 className="text-red-400 font-bold mb-2">⚠️ Zone dangereuse</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                La suppression de la compagnie est irréversible. Toutes les missions et données seront perdues.
                            </p>
                            <button
                                onClick={handleDeleteCompany}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                            >
                                🗑️ Supprimer la compagnie
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}