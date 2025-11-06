'use client';
import { useEffect, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    type?: 'info' | 'warning' | 'danger' | 'success';
}

export function Modal({ isOpen, onClose, title, children, type = 'info' }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const borderColor = {
        info: 'border-blue-500/50',
        warning: 'border-yellow-500/50',
        danger: 'border-red-500/50',
        success: 'border-green-500/50'
    }[type];

    const bgGradient = {
        info: 'from-blue-900/40 to-blue-900/10',
        warning: 'from-yellow-900/40 to-yellow-900/10',
        danger: 'from-red-900/40 to-red-900/10',
        success: 'from-green-900/40 to-green-900/10'
    }[type];

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div 
                className={`bg-linear-to-br ${bgGradient} border ${borderColor} rounded-2xl p-6 max-w-md w-full shadow-2xl animate-slideUp`}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                <div className="text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: 'warning' | 'danger' | 'info';
    loading?: boolean;
}

export function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Confirmer',
    cancelText = 'Annuler',
    type = 'warning',
    loading = false
}: ConfirmModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title} type={type}>
            <p className="mb-6 whitespace-pre-line">{message}</p>
            <div className="flex gap-3">
                <button
                    onClick={onClose}
                    disabled={loading}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white font-semibold py-3 rounded-lg transition"
                >
                    {cancelText}
                </button>
                <button
                    onClick={onConfirm}
                    disabled={loading}
                    className={`flex-1 ${
                        type === 'danger' 
                            ? 'bg-red-600 hover:bg-red-700' 
                            : 'bg-yellow-600 hover:bg-yellow-700'
                    } disabled:bg-gray-600 text-white font-semibold py-3 rounded-lg transition`}
                >
                    {loading ? '⏳ Traitement...' : confirmText}
                </button>
            </div>
        </Modal>
    );
}

interface InputModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (value: string) => void;
    title: string;
    message: string;
    placeholder?: string;
    expectedValue?: string;
    confirmText?: string;
    cancelText?: string;
    type?: 'warning' | 'danger';
}

export function InputModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    placeholder = '',
    expectedValue,
    confirmText = 'Confirmer',
    cancelText = 'Annuler',
    type = 'warning'
}: InputModalProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = () => {
        if (expectedValue && value !== expectedValue) {
            setError(`Veuillez taper exactement "${expectedValue}"`);
            return;
        }
        onConfirm(value);
        setValue('');
        setError('');
    };

    const handleClose = () => {
        setValue('');
        setError('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title={title} type={type}>
            <p className="mb-4 whitespace-pre-line">{message}</p>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setError('');
                }}
                placeholder={placeholder}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none mb-2"
                autoFocus
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleConfirm();
                }}
            />
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            <div className="flex gap-3">
                <button
                    onClick={handleClose}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition"
                >
                    {cancelText}
                </button>
                <button
                    onClick={handleConfirm}
                    className={`flex-1 ${
                        type === 'danger' 
                            ? 'bg-red-600 hover:bg-red-700' 
                            : 'bg-yellow-600 hover:bg-yellow-700'
                    } text-white font-semibold py-3 rounded-lg transition`}
                >
                    {confirmText}
                </button>
            </div>
        </Modal>
    );
}

interface NotificationProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type?: 'info' | 'success' | 'warning' | 'danger';
    autoClose?: number;
}

export function Notification({ 
    isOpen, 
    onClose, 
    title, 
    message, 
    type = 'info',
    autoClose 
}: NotificationProps) {
    useEffect(() => {
        if (isOpen && autoClose) {
            const timer = setTimeout(onClose, autoClose);
            return () => clearTimeout(timer);
        }
    }, [isOpen, autoClose, onClose]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title} type={type}>
            <p className="mb-6 whitespace-pre-line">{message}</p>
            <button
                onClick={onClose}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
                OK
            </button>
        </Modal>
    );
}