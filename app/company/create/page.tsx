'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const COMPANY_CREATION_COST = 3000;

export default function CreateCompanyPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [userProfile, setUserProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        logo_url: '',
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

        const { data: profileData } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single();

        if (profileData) {
            setUserProfile(profileData);
        }

        const { data: memberData } = await supabase
            .from('company_members')
            .select('*')
            .eq('user_id', session.user.id)
            .single();

        if (memberData) {
            router.push('/dashboard');
            return;
        }

        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (userProfile.sky_credits < COMPANY_CREATION_COST) {
            setError(`Crédits insuffisants. Il vous faut ${COMPANY_CREATION_COST.toLocaleString()} SC pour créer une compagnie.`);
            return;
        }

        setCreating(true);

        try {
            await supabase.from('company_members').delete().eq('user_id', user.id);

            const { data: existingCompany } = await supabase
                .from('companies')
                .select('id')
                .eq('name', formData.name)
                .single();

            if (existingCompany) {
                setError('Ce nom de compagnie est déjà utilisé');
                setCreating(false);
                return;
            }

            const { data: newCompany, error: companyError } = await supabase
                .from('companies')
                .insert([{
                    name: formData.name,
                    description: formData.description,
                    logo_url: formData.logo_url || null,
                    owner_id: user.id,
                    balance: 10000,
                    status: 'active'
                }])
                .select()
                .single();

            if (companyError) throw companyError;

            // Déduire les crédits
            const { error: creditError } = await supabase.rpc('update_user_credits', {
                p_user_id: user.id,
                p_amount: -COMPANY_CREATION_COST,
                p_transaction_type: 'company_creation',
                p_description: `Création de la compagnie ${formData.name}`,
                p_reference_id: newCompany.id
            });

            if (creditError) {
                await supabase.from('companies').delete().eq('id', newCompany.id);
                throw creditError;
            }

            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Erreur lors de la création de la compagnie');
            setCreating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Chargement...</div>
            </div>
        );
    }

    const canAfford = userProfile?.sky_credits >= COMPANY_CREATION_COST;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 p-4">
            <div className="max-w-2xl mx-auto mt-12">
                <button
                    onClick={() => router.push('/dashboard')}
                    className="mb-6 text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                    ← Retour au dashboard
                </button>

                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">🏢 Créer votre compagnie</h1>
                        <p className="text-gray-400">Lancez votre compagnie aérienne virtuelle</p>
                    </div>

                    <div className={`mb-6 p-4 rounded-lg border-2 ${canAfford
                        ? 'bg-green-900/30 border-green-500/50'
                        : 'bg-red-900/30 border-red-500/50'
                        }`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Vos crédits disponibles</p>
                                <p className="text-3xl font-bold text-yellow-400">
                                    {userProfile?.sky_credits?.toLocaleString() || 0} SC
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-400">Coût de création</p>
                                <p className="text-3xl font-bold text-white">
                                    {COMPANY_CREATION_COST.toLocaleString()} SC
                                </p>
                            </div>
                        </div>
                        {!canAfford && (
                            <div className="mt-3 pt-3 border-t border-red-500/30">
                                <p className="text-red-300 text-sm">
                                    ❌ Il vous manque <strong>{(COMPANY_CREATION_COST - userProfile?.sky_credits).toLocaleString()} SC</strong>
                                </p>
                                <p className="text-red-400 text-xs mt-1">
                                    Complétez des missions pour gagner des crédits !
                                </p>
                            </div>
                        )}
                    </div>

                    {error && (
                        <div className="bg-red-600/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                Nom de la compagnie *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Ex: Air France Virtual"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                                maxLength={50}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                {formData.name.length}/50 caractères
                            </p>
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-2">
                                Description *
                            </label>
                            <textarea
                                required
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Décrivez votre compagnie, sa mission, son style de vol..."
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none h-32 resize-none"
                                maxLength={500}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                {formData.description.length}/500 caractères
                            </p>
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-2">
                                Logo URL (optionnel)
                            </label>
                            <input
                                type="url"
                                value={formData.logo_url}
                                onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                                placeholder="https://exemple.com/logo.png"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                URL d'une image pour le logo de votre compagnie
                            </p>
                        </div>

                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold mb-2">💰 Capital de départ</h3>
                            <p className="text-gray-300 text-sm">
                                Votre compagnie démarrera avec <strong className="text-yellow-400">10,000 SC</strong>
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                                Utilisez ces crédits pour créer des missions et développer votre activité
                            </p>
                        </div>

                        <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold mb-2">👤 Votre rôle</h3>
                            <p className="text-gray-300 text-sm">
                                En tant que fondateur, vous serez automatiquement <strong>propriétaire (owner)</strong>
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                                Vous pourrez gérer les membres, créer des missions et administrer la compagnie
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={creating || !canAfford}
                            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition text-lg"
                        >
                            {creating ? '🔄 Création en cours...' :
                                !canAfford ? '❌ Crédits insuffisants' :
                                    `🚀 Créer ma compagnie (-${COMPANY_CREATION_COST.toLocaleString()} SC)`}
                        </button>

                        {!canAfford && (
                            <p className="text-center text-sm text-gray-400">
                                💡 Astuce: Acceptez des missions dans le dashboard pour gagner des Sky Credits
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}