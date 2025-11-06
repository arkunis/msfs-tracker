'use client';
import { useEffect, useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import Portal from './Portal';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type DropdownPosition = {
    top: number;
    left: number | null;
    right: number | null;
    // width left implicit (we use a fixed desired width)
};

export default function NotificationBell({ userId }: { userId: string }) {
    const [notifications, setNotifications] = useState<any[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [loading, setLoading] = useState(true);
    const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>({ top: 0, left: null, right: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Desired dropdown width (matches the Tailwind w-[400px] used in markup)
    const DROPDOWN_WIDTH = 400;
    const SCREEN_MARGIN = 8;

    useEffect(() => {
        loadNotifications();

        const channel = supabase
            .channel('notifications')
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'notifications',
                filter: `user_id=eq.${userId}`
            }, (payload) => {
                console.log('Nouvelle notification reçue:', payload);
                setNotifications(prev => [payload.new, ...prev]);
                setUnreadCount(prev => prev + 1);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [userId]);

    // Compute dropdown position so it never overflows the viewport (mobile safe)
    useEffect(() => {
        if (showDropdown && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const ww = window.innerWidth;

            const top = rect.bottom + 8;

            // If the dropdown would exceed the right edge of the viewport:
            if (rect.left + DROPDOWN_WIDTH + SCREEN_MARGIN > ww) {
                // If the dropdown can't fit at its desired width, make it fullscreen-ish with margins
                if (DROPDOWN_WIDTH + SCREEN_MARGIN * 2 > ww) {
                    // Use left and right margins so it stretches to available width
                    setDropdownPosition({
                        top,
                        left: SCREEN_MARGIN,
                        right: SCREEN_MARGIN
                    });
                } else {
                    // Shift it so its right edge is SCREEN_MARGIN from viewport
                    const left = Math.max(SCREEN_MARGIN, ww - DROPDOWN_WIDTH - SCREEN_MARGIN);
                    setDropdownPosition({
                        top,
                        left,
                        right: null
                    });
                }
            } else {
                // Enough space to the right: prefer to anchor to the button's right edge (keep original behavior)
                const right = Math.max(0, ww - rect.right);
                setDropdownPosition({
                    top,
                    left: null,
                    right
                });
            }
        }
    }, [showDropdown]);

    const loadNotifications = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('notifications')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })
            .limit(20);

        if (error) {
            console.error('Erreur chargement notifications:', error);
        }

        if (data) {
            console.log('Notifications chargées:', data.length);
            setNotifications(data);
            setUnreadCount(data.filter(n => !n.read).length);
        }
        setLoading(false);
    };

    const markAsRead = async (id: string) => {
        await supabase
            .from('notifications')
            .update({ read: true })
            .eq('id', id);

        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, read: true } : n)
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
    };

    const markAllAsRead = async () => {
        const unreadIds = notifications.filter(n => !n.read).map(n => n.id);
        
        if (unreadIds.length > 0) {
            await supabase
                .from('notifications')
                .update({ read: true })
                .in('id', unreadIds);

            setNotifications(prev => prev.map(n => ({ ...n, read: true })));
            setUnreadCount(0);
        }
    };

    return (
        <>
            <button
                ref={buttonRef}
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative p-2 text-yellow-400 hover:text-yellow-300 transition rounded-lg hover:bg-gray-800/50"
                title="Notifications"
            >
                <span className="text-xl">🔔</span>
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold px-1 animate-pulse">
                        {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                )}
            </button>

            {showDropdown && (
                <Portal>
                    {/* Overlay pour fermer le dropdown */}
                    <div 
                        className="fixed inset-0 z-[9998]" 
                        onClick={() => setShowDropdown(false)}
                    />
                    
                    {/* Dropdown avec position absolue calculée (et responsive) */}
                    <div 
                        className="fixed z-[9999] bg-gray-900 border-2 border-gray-700 rounded-xl shadow-2xl max-h-[600px] overflow-hidden flex flex-col"
                        style={{
                            // Desktop desired width, but allow it to shrink on small screens
                            width: DROPDOWN_WIDTH,
                            maxWidth: 'calc(100% - 16px)',
                            top: `${dropdownPosition.top}px`,
                            left: dropdownPosition.left !== null ? `${dropdownPosition.left}px` : undefined,
                            right: dropdownPosition.right !== null ? `${dropdownPosition.right}px` : undefined
                        }}
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-700 bg-gray-800/80 sticky top-0 z-10">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-white text-lg">🔔 Notifications</h3>
                                {unreadCount > 0 && (
                                    <button
                                        onClick={markAllAsRead}
                                        className="text-xs text-blue-400 hover:text-blue-300 transition font-semibold"
                                    >
                                        Tout marquer comme lu
                                    </button>
                                )}
                            </div>
                            {unreadCount > 0 && (
                                <p className="text-xs text-gray-400 mt-1">
                                    {unreadCount} non lue{unreadCount > 1 ? 's' : ''}
                                </p>
                            )}
                        </div>

                        {/* Liste des notifications */}
                        <div className="overflow-y-auto flex-1">
                            {loading ? (
                                <div className="p-8 text-center">
                                    <div className="text-4xl mb-3 animate-bounce">⏳</div>
                                    <p className="text-gray-400 text-sm">Chargement...</p>
                                </div>
                            ) : notifications.length === 0 ? (
                                <div className="p-8 text-center">
                                    <div className="text-5xl mb-3">📭</div>
                                    <p className="text-gray-400 font-semibold mb-1">Aucune notification</p>
                                    <p className="text-gray-500 text-xs">Vous serez notifié ici</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-700/50">
                                    {notifications.map(notif => (
                                        <div
                                            key={notif.id}
                                            onClick={() => markAsRead(notif.id)}
                                            className={`p-4 cursor-pointer hover:bg-gray-800/70 transition ${
                                                !notif.read ? 'bg-blue-900/20 border-l-4 border-l-blue-500' : ''
                                            }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="text-2xl flex-shrink-0 mt-0.5">
                                                    {notif.type === 'success' ? '🎉' :
                                                     notif.type === 'warning' ? '⚠️' :
                                                     notif.type === 'danger' ? '❌' : 'ℹ️'}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-white text-sm mb-1 break-words">
                                                        {notif.title}
                                                    </p>
                                                    <p className="text-gray-400 text-xs mb-2 whitespace-pre-line break-words">
                                                        {notif.message}
                                                    </p>
                                                    <p className="text-gray-500 text-xs">
                                                        {formatDate(notif.created_at)}
                                                    </p>
                                                </div>
                                                {!notif.read && (
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1 animate-pulse"></div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {notifications.length > 0 && (
                            <div className="p-3 border-t border-gray-700 bg-gray-800/50">
                                <button
                                    onClick={() => {
                                        setShowDropdown(false);
                                    }}
                                    className="w-full text-center text-xs text-gray-400 hover:text-white transition"
                                >
                                    Voir toutes les notifications →
                                </button>
                            </div>
                        )}
                    </div>
                </Portal>
            )}
        </>
    );
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays < 7) return `Il y a ${diffDays}j`;
    
    return date.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    });
}