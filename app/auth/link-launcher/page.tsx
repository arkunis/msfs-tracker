'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LinkLauncherPage() {
    const router = useRouter();
    const [uuid, setUuid] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        checkLauncherStatus();
    }, []);

    const checkLauncherStatus = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            
            if (!user) {
                router.push('/auth/login');
                return;
            }

            const { data: profile } = await supabase
                .from('users')
                .select('launcher_uuid')
                .eq('id', user.id)
                .single();

            if (profile?.launcher_uuid) {
                router.push('/');
            } else {
                setCheckingStatus(false);
            }
        } catch (err) {
            console.error('Erreur:', err);
            setCheckingStatus(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data: { session } } = await supabase.auth.getSession();
            
            if (!session) {
                setError('Session expirée, veuillez vous reconnecter');
                return;
            }

            const response = await fetch('/api/auth/link-uuid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    launcherUuid: uuid.trim(),
                    userId: session.user.id
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erreur lors de la liaison');
            }

            router.push('/');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (checkingStatus) {
        return (
            <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Vérification...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
            <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-blue-500/30">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Dernière étape !
                    </h1>
                    <p className="text-gray-400">
                        Liez votre launcher AeroQuest Tracker pour accéder au service
                    </p>
                </div>

                {/* Instructions */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
                    <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        📋 Instructions
                    </h2>
                    <ol className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                            <span>Téléchargez le launcher AeroQuest Tracker si ce n'est pas déjà fait</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                            <span>Lancez l'application pour la première fois</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                            <span>Un <strong>UUID unique</strong> sera généré et affiché dans le launcher</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                            <span>Copiez cet UUID et collez-le ci-dessous</span>
                        </li>
                    </ol>
                </div>

                {/* Download Button */}
                <div className="mb-6">
                    <a 
                        href="/download/MSFS-TRACKER.exe" 
                        download="MSFS-TRACKER.exe"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 flex items-center justify-center gap-2 text-lg text-center"
                    >
                        📥 Télécharger AeroQuest Tracker
                    </a>
                </div>

                {/* Form */}
                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 text-sm font-semibold mb-2">
                            UUID du Launcher
                        </label>
                        <input
                            type="text"
                            required
                            value={uuid}
                            onChange={(e) => setUuid(e.target.value)}
                            className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition font-mono text-center text-lg"
                            placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                        />
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Format: 8-4-4-4-12 caractères (généré automatiquement par le launcher)
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition duration-200 transform hover:scale-105 text-lg cursor-pointer"
                    >
                        {loading ? 'Liaison en cours...' : '✅ Lier mon launcher'}
                    </button>
                </form>

                {/* Info */}
                <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        🔒 Votre UUID est unique et sécurisé. Il permet de lier votre launcher à votre compte.
                    </p>
                </div>

                {/* Logout */}
                <div className="mt-4 text-center">
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            router.push('/auth/login');
                        }}
                        className="text-gray-400 hover:text-white text-sm underline cursor-pointer"
                    >
                        Se déconnecter
                    </button>
                </div>
            </div>
        </div>
    );
}