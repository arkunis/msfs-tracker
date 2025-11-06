'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { ConfirmModal, Notification } from '../components/Modal';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Prix des modifications (en Sky Credits)
const PRICES = {
    USERNAME: 500,
    EMAIL: 1000,
    PASSWORD: 0 // Gratuit pour la sécurité
};

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // États des formulaires
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // États des modals
    const [showUsernameConfirm, setShowUsernameConfirm] = useState(false);
    const [showEmailConfirm, setShowEmailConfirm] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
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
        checkAuthAndLoadProfile();
    }, []);

    const checkAuthAndLoadProfile = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            router.push('/auth/login');
            return;
        }

        setUser(session.user);

        const { data: userData } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single();

        if (userData) {
            setProfile(userData);
            setNewUsername(userData.username);
            setNewEmail(session.user.email || '');
        }

        setLoading(false);
    };

    const handleUsernameChange = () => {
        if (!newUsername || newUsername === profile.username) {
            setNotification({
                show: true,
                title: '⚠️ Attention',
                message: 'Veuillez entrer un nouveau pseudo différent',
                type: 'warning'
            });
            return;
        }

        if (newUsername.length < 3 || newUsername.length > 20) {
            setNotification({
                show: true,
                title: '⚠️ Attention',
                message: 'Le pseudo doit contenir entre 3 et 20 caractères',
                type: 'warning'
            });
            return;
        }

        if (profile.sky_credits < PRICES.USERNAME) {
            setNotification({
                show: true,
                title: '❌ Crédits insuffisants',
                message: `Vous avez besoin de ${PRICES.USERNAME} SC pour changer votre pseudo.\nVotre solde : ${profile.sky_credits} SC`,
                type: 'danger'
            });
            return;
        }

        setShowUsernameConfirm(true);
    };

    const confirmUsernameChange = async () => {
        setShowUsernameConfirm(false);
        setSaving(true);

        try {
            // Vérifier que le pseudo n'est pas déjà pris
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('username', newUsername)
                .single();

            if (existingUser) {
                throw new Error('Ce pseudo est déjà utilisé');
            }

            // Déduire les crédits et mettre à jour le pseudo
            const { error: updateError } = await supabase
                .from('users')
                .update({
                    username: newUsername,
                    sky_credits: profile.sky_credits - PRICES.USERNAME
                })
                .eq('id', user.id);

            if (updateError) throw updateError;

            setProfile({
                ...profile,
                username: newUsername,
                sky_credits: profile.sky_credits - PRICES.USERNAME
            });

            setNotification({
                show: true,
                title: '✅ Pseudo modifié',
                message: `Votre pseudo a été changé en "${newUsername}".\n${PRICES.USERNAME} SC ont été déduits de votre compte.`,
                type: 'success'
            });
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue',
                type: 'danger'
            });
            setNewUsername(profile.username);
        } finally {
            setSaving(false);
        }
    };

    const handleEmailChange = () => {
        if (!newEmail || newEmail === user.email) {
            setNotification({
                show: true,
                title: '⚠️ Attention',
                message: 'Veuillez entrer un nouvel email différent',
                type: 'warning'
            });
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            setNotification({
                show: true,
                title: '⚠️ Attention',
                message: 'Veuillez entrer une adresse email valide',
                type: 'warning'
            });
            return;
        }

        if (profile.sky_credits < PRICES.EMAIL) {
            setNotification({
                show: true,
                title: '❌ Crédits insuffisants',
                message: `Vous avez besoin de ${PRICES.EMAIL} SC pour changer votre email.\nVotre solde : ${profile.sky_credits} SC`,
                type: 'danger'
            });
            return;
        }

        setShowEmailConfirm(true);
    };

    const confirmEmailChange = async () => {
        setShowEmailConfirm(false);
        setSaving(true);

        try {
            // Mettre à jour l'email dans Supabase Auth
            const { error: authError } = await supabase.auth.updateUser({
                email: newEmail
            });

            if (authError) throw authError;

            // Déduire les crédits
            const { error: updateError } = await supabase
                .from('users')
                .update({
                    sky_credits: profile.sky_credits - PRICES.EMAIL
                })
                .eq('id', user.id);

            if (updateError) throw updateError;

            setProfile({
                ...profile,
                sky_credits: profile.sky_credits - PRICES.EMAIL
            });

            setNotification({
                show: true,
                title: '✅ Email modifié',
                message: `Un email de confirmation a été envoyé à ${newEmail}.\nVeuillez confirmer votre nouvel email.\n${PRICES.EMAIL} SC ont été déduits.`,
                type: 'success'
            });
        } catch (error: any) {
            setNotification({
                show: true,
                title: '❌ Erreur',
                message: error.message || 'Une erreur est survenue',
                type: 'danger'
            });
            setNewEmail(user.email);
        } finally {
            setSaving(false);
        }
    };

    const handlePasswordChange = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            setNotification({
                show: true,
                title: '⚠️ Attention',
                message: 'Veuillez remplir tous les champs',
                type: 'warning'
            });
            return;
        }

        if (newPassword.length < 6) {
            setNotification({
                show: true,
                title: '⚠️ Attention',
                message: 'Le mot de passe doit contenir au moins 6 caractères',
                type: 'warning'
            });
            return;
        }

        if (newPassword !== confirmPassword) {
            setNotification({
                show: true,
                title: '⚠️ Attention',
                message: 'Les mots de passe ne correspondent pas',
                type: 'warning'
            });
            return;
        }

        setShowPasswordConfirm(true);
    };

    const confirmPasswordChange = async () => {
        setShowPasswordConfirm(false);
        setSaving(true);

        try {
            // Vérifier le mot de passe actuel en tentant une connexion
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email: user.email,
                password: currentPassword
            });

            if (signInError) {
                throw new Error('Mot de passe actuel incorrect');
            }

            // Mettre à jour le mot de passe
            const { error: updateError } = await supabase.auth.updateUser({
                password: newPassword
            });

            if (updateError) throw updateError;

            setNotification({
                show: true,
                title: '✅ Mot de passe modifié',
                message: 'Votre mot de passe a été changé avec succès.\nChangement gratuit pour votre sécurité.',
                type: 'success'
            });

            // Réinitialiser les champs
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Chargement...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-4">
            <div className="max-w-4xl mx-auto mt-8">
                {/* MODALS */}
                <ConfirmModal
                    isOpen={showUsernameConfirm}
                    onClose={() => setShowUsernameConfirm(false)}
                    onConfirm={confirmUsernameChange}
                    title="✏️ Changer de pseudo"
                    message={`Voulez-vous changer votre pseudo en "${newUsername}" ?\n\n💰 Coût : ${PRICES.USERNAME} SC\nSolde actuel : ${profile.sky_credits} SC\nSolde après : ${profile.sky_credits - PRICES.USERNAME} SC`}
                    confirmText="Confirmer"
                    cancelText="Annuler"
                    type="warning"
                    loading={saving}
                />

                <ConfirmModal
                    isOpen={showEmailConfirm}
                    onClose={() => setShowEmailConfirm(false)}
                    onConfirm={confirmEmailChange}
                    title="📧 Changer d'email"
                    message={`Voulez-vous changer votre email en "${newEmail}" ?\n\nVous recevrez un email de confirmation.\n\n💰 Coût : ${PRICES.EMAIL} SC\nSolde actuel : ${profile.sky_credits} SC\nSolde après : ${profile.sky_credits - PRICES.EMAIL} SC`}
                    confirmText="Confirmer"
                    cancelText="Annuler"
                    type="warning"
                    loading={saving}
                />

                <ConfirmModal
                    isOpen={showPasswordConfirm}
                    onClose={() => setShowPasswordConfirm(false)}
                    onConfirm={confirmPasswordChange}
                    title="🔒 Changer de mot de passe"
                    message={`Voulez-vous changer votre mot de passe ?\n\n🆓 Gratuit pour votre sécurité`}
                    confirmText="Confirmer"
                    cancelText="Annuler"
                    type="info"
                    loading={saving}
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

                {/* En-tête du profil */}
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                                {profile.username?.charAt(0).toUpperCase() || '?'}
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">{profile.username}</h1>
                                <p className="text-gray-400">{user.email}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="text-yellow-400 font-bold">💰 {profile.sky_credits?.toLocaleString()} SC</span>
                                    <span className="text-gray-500">•</span>
                                    <span className="text-gray-400 text-sm">🛫 {profile.total_flights || 0} vols</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tarifs */}
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-4 mb-6">
                    <h3 className="text-blue-300 font-bold mb-2">💡 Tarification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">✏️ Pseudo :</span>
                            <span className="text-white font-bold">{PRICES.USERNAME} SC</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">📧 Email :</span>
                            <span className="text-white font-bold">{PRICES.EMAIL} SC</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">🔒 Mot de passe :</span>
                            <span className="text-green-400 font-bold">GRATUIT</span>
                        </div>
                    </div>
                </div>

                {/* Formulaire de modification du pseudo */}
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 mb-6">
                    <h2 className="text-xl font-bold text-white mb-4">✏️ Changer de pseudo</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Pseudo actuel</label>
                            <input
                                type="text"
                                value={profile.username}
                                disabled
                                className="w-full bg-gray-800/50 text-gray-500 px-4 py-3 rounded-lg cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Nouveau pseudo</label>
                            <input
                                type="text"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                                placeholder="Entrez votre nouveau pseudo"
                                maxLength={20}
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                            />
                            <p className="text-xs text-gray-500 mt-1">3-20 caractères • Coût : {PRICES.USERNAME} SC</p>
                        </div>
                        <button
                            onClick={handleUsernameChange}
                            disabled={saving}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                            {saving ? '⏳ Modification...' : `💰 Changer (${PRICES.USERNAME} SC)`}
                        </button>
                    </div>
                </div>

                {/* Formulaire de modification de l'email */}
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 mb-6">
                    <h2 className="text-xl font-bold text-white mb-4">📧 Changer d'email</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Email actuel</label>
                            <input
                                type="email"
                                value={user.email}
                                disabled
                                className="w-full bg-gray-800/50 text-gray-500 px-4 py-3 rounded-lg cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Nouvel email</label>
                            <input
                                type="email"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                placeholder="Entrez votre nouvel email"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                            />
                            <p className="text-xs text-gray-500 mt-1">Vous recevrez un email de confirmation • Coût : {PRICES.EMAIL} SC</p>
                        </div>
                        <button
                            onClick={handleEmailChange}
                            disabled={saving}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                            {saving ? '⏳ Modification...' : `💰 Changer (${PRICES.EMAIL} SC)`}
                        </button>
                    </div>
                </div>

                {/* Formulaire de modification du mot de passe */}
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 mb-6">
                    <h2 className="text-xl font-bold text-white mb-4">🔒 Changer de mot de passe</h2>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 mb-4">
                        <p className="text-green-400 text-sm">🆓 Gratuit pour votre sécurité</p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Mot de passe actuel</label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Entrez votre mot de passe actuel"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Nouveau mot de passe</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Entrez votre nouveau mot de passe"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
                            />
                            <p className="text-xs text-gray-500 mt-1">Minimum 6 caractères</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Confirmer le mot de passe</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirmez votre nouveau mot de passe"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
                            />
                        </div>
                        <button
                            onClick={handlePasswordChange}
                            disabled={saving}
                            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                            {saving ? '⏳ Modification...' : '🔒 Changer le mot de passe (Gratuit)'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}