'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password
            });

            if (signInError) {
                throw new Error(signInError.message);
            }

            if (!data.user) {
                throw new Error('Erreur lors de la connexion');
            }

            // Vérifier si l'UUID est lié
            const { data: profile } = await supabase
                .from('users')
                .select('launcher_uuid')
                .eq('id', data.user.id)
                .single();

            if (!profile?.launcher_uuid) {
                // Pas d'UUID, rediriger vers la page de liaison
                router.push('/auth/link-launcher');
            } else {
                // UUID présent, rediriger vers le dashboard
                router.push('/dashboard');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
            <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-500/30">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">✈️ AeroQuest</h1>
                    <p className="text-gray-400">Connexion à votre compte</p>
                </div>

                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 text-sm font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                            placeholder="pilot@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 text-sm font-semibold mb-2">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
                    >
                        {loading ? 'Connexion...' : 'Se connecter'}
                    </button>
                </form>

                <div className="mt-6 text-center space-y-2">
                    <p className="text-gray-400">
                        Pas encore de compte ?{' '}
                        <a href="/auth/register" className="text-blue-400 hover:text-blue-300 font-semibold">
                            S'inscrire
                        </a>
                    </p>
                    <a href="/auth/reset-password" className="text-gray-500 hover:text-gray-300 text-sm">
                        Mot de passe oublié ?
                    </a>
                </div>
            </div>
        </div>
    );
}