'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { ConfirmModal, Notification } from '../../components/Modal';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function BrowseCompaniesPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [userCompany, setUserCompany] = useState<any>(null);
    const [companies, setCompanies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [joining, setJoining] = useState<string | null>(null);
    const [selectedCompany, setSelectedCompany] = useState<any>(null);
    const [showJoinConfirm, setShowJoinConfirm] = useState(false);
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
        checkAuthAndLoadCompanies();
    }, []);

    const checkAuthAndLoadCompanies = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            router.push('/auth/login');
            return;
        }

        setUser(session.user);

        // Vérifier si l'utilisateur a déjà une compagnie
        const { data: memberData } = await supabase
            .from('company_members')
            .select('*, companies(*)')
            .eq('user_id', session.user.id)
            .single();

        if (memberData) {
            setUserCompany(memberData.companies);
        }

        // Charger toutes les compagnies publiques
        await loadCompanies();
    };

    const loadCompanies = async () => {
        try {
            const { data: companiesData } = await supabase
                .from('companies')
                .select('*')
                .eq('status', 'active')
                .order('created_at', { ascending: false });

            if (companiesData) {
                const companiesWithStats = await Promise.all(
                    companiesData.map(async (company) => {
                        // Récupérer les membres
                        const { data: membersData } = await supabase
                            .from('company_members')
                            .select('id')
                            .eq('company_id', company.id);

                        // Compter les missions
                        const { data: missionsData } = await supabase
                            .from('missions')
                            .select('id')
                            .eq('company_id', company.id);

                        return {
                            ...company,
                            totalMissions: missionsData?.length || 0,
                            totalMembers: membersData?.length || 0
                        };
                    })
                );

                setCompanies(companiesWithStats);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des compagnies:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleJoinCompany = (company: any) => {
        if (userCompany) {
            setNotification({
                show: true,
                title: '❌ Impossible de rejoindre',
                message: `Vous appartenez déjà à une compagnie (${userCompany.name}).\nVous devez d'abord la quitter pour rejoindre une autre compagnie.`,
                type: 'warning'
            });
            return;
        }

        setSelectedCompany(company);
        setShowJoinConfirm(true);
    };

    const confirmJoin = async () => {
        if (!selectedCompany) return;

        setShowJoinConfirm(false);
        setJoining(selectedCompany.id);

        try {
            const { error } = await supabase
                .from('company_members')
                .insert([{
                    company_id: selectedCompany.id,
                    user_id: user.id,
                    role: 'pilot'
                }]);

            if (error) throw error;

            setNotification({
                show: true,
                title: '✅ Bienvenue !',
                message: `Vous avez rejoint la compagnie ${selectedCompany.name} avec succès !\nVous êtes maintenant pilote.`,
                type: 'success'
            });

            // Rediriger après 2 secondes
            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue lors de l\'adhésion',
                type: 'danger'
            });
            setJoining(null);
        }
    };

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Chargement...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 p-4">
            <div className="max-w-7xl mx-auto mt-8">
                {/* MODALS */}
                <ConfirmModal
                    isOpen={showJoinConfirm}
                    onClose={() => {
                        setShowJoinConfirm(false);
                        setSelectedCompany(null);
                    }}
                    onConfirm={confirmJoin}
                    title="🤝 Rejoindre la compagnie"
                    message={`Voulez-vous rejoindre la compagnie "${selectedCompany?.name}" en tant que pilote ?\n\nVous pourrez accepter et effectuer les missions de cette compagnie.`}
                    confirmText="Rejoindre"
                    cancelText="Annuler"
                    type="warning"
                    loading={joining !== null}
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

                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">🔍 Parcourir les compagnies</h1>
                    <p className="text-gray-400">Trouvez une compagnie à rejoindre</p>

                    {userCompany && (
                        <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg">
                            <p className="text-blue-300 text-sm">
                                ℹ️ Vous appartenez déjà à <strong>{userCompany.name}</strong>
                            </p>
                        </div>
                    )}
                </div>

                {/* Barre de recherche */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="🔎 Rechercher une compagnie..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-black/60 backdrop-blur-lg text-white px-6 py-4 rounded-xl border border-blue-500/30 focus:border-blue-500 focus:outline-none"
                    />
                </div>

                {/* Liste des compagnies */}
                {filteredCompanies.length === 0 ? (
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-12 border border-blue-500/30 text-center">
                        <div className="text-6xl mb-4">🏢</div>
                        <h2 className="text-2xl font-bold text-white mb-2">Aucune compagnie trouvée</h2>
                        <p className="text-gray-400">
                            {searchTerm ? 'Essayez une autre recherche' : 'Il n\'y a pas encore de compagnies'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCompanies.map((company) => (
                            <div
                                key={company.id}
                                className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500 transition"
                            >
                                {/* Logo et nom */}
                                <div className="flex items-center gap-4 mb-4">
                                    {company.logo_url ? (
                                        <img
                                            src={company.logo_url}
                                            alt={company.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-2xl font-bold text-white">
                                            {company.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white line-clamp-1">
                                            {company.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            Créée le {new Date(company.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[60px]">
                                    {company.description || 'Aucune description'}
                                </p>

                                {/* Statistiques */}
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                                        <p className="text-xs text-gray-400">Balance</p>
                                        <p className="text-sm font-bold text-yellow-400">
                                            {company.balance?.toLocaleString() || 0}
                                        </p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                                        <p className="text-xs text-gray-400">Membres</p>
                                        <p className="text-sm font-bold text-white">
                                            {company.totalMembers}
                                        </p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                                        <p className="text-xs text-gray-400">Missions</p>
                                        <p className="text-sm font-bold text-white">
                                            {company.totalMissions}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => router.push(`/company/${company.id}`)}
                                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition text-sm"
                                    >
                                        👁️ Voir
                                    </button>
                                    {!userCompany && (
                                        <button
                                            onClick={() => handleJoinCompany(company)}
                                            disabled={joining === company.id}
                                            className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-semibold py-2 rounded-lg transition text-sm"
                                        >
                                            {joining === company.id ? '⏳' : '✅ Rejoindre'}
                                        </button>
                                    )}
                                </div>

                                {/* Badge si c'est ma compagnie */}
                                {userCompany && userCompany.id === company.id && (
                                    <div className="mt-3 text-center">
                                        <span className="inline-block px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-xs font-semibold text-blue-400">
                                            ✓ Votre compagnie
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Call to action si pas de compagnie */}
                {!userCompany && companies.length > 0 && (
                    <div className="mt-8 bg-purple-900/30 border border-purple-500/50 rounded-xl p-6 text-center">
                        <h3 className="text-white font-bold mb-2">Vous ne trouvez pas votre bonheur ?</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Créez votre propre compagnie et commencez à recruter !
                        </p>
                        <button
                            onClick={() => router.push('/company/create')}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                            🏢 Créer ma compagnie
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}