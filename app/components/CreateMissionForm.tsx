'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { AIRPORTS } from '../data/Airports'; // Importer vos aéroports

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Fonction pour calculer la distance entre deux points (formule de Haversine)
function calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3440.065; // Rayon de la Terre en miles nautiques
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
}

const MISSION_TYPES = {
    cargo: {
        name: '📦 Cargo (Fret)',
        description: 'Transport de marchandises',
        icon: '📦',
        minReward: 500
    },
    passenger: {
        name: '👥 Passenger (Passagers)',
        description: 'Transport de passagers',
        icon: '👥',
        minReward: 500
    },
    charter: {
        name: '✈️ Charter (Affrètement)',
        description: 'Vol privé à la demande',
        icon: '✈️',
        minReward: 500
    },
    training: {
        name: '🎓 Training (Entraînement)',
        description: 'Vols d\'entraînement - Pas de coût',
        icon: '🎓',
        minReward: 100
    },
    emergency: {
        name: '🚨 Emergency (Urgence)',
        description: 'Missions urgentes - Récompenses augmentées',
        icon: '🚨',
        minReward: 1000
    }
};

const PASSENGER_CLASSES = [
    { value: 'economy', label: 'Économique', multiplier: 1 },
    { value: 'business', label: 'Affaires', multiplier: 1.5 },
    { value: 'first', label: 'Première', multiplier: 2 }
];

interface CreateMissionFormProps {
    company: any;
    onSuccess?: () => void;
}

export default function CreateMissionForm({ company, onSuccess }: CreateMissionFormProps) {
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [departureAirport, setDepartureAirport] = useState<any>(null);
    const [arrivalAirport, setArrivalAirport] = useState<any>(null);
    const [icaoError, setIcaoError] = useState({ departure: '', arrival: '' });

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        mission_type: 'cargo',
        visibility: 'company',
        departure_icao: '',
        arrival_icao: '',
        distance_nm: 0,
        cargo_weight: 0,
        passenger_count: 0,
        passenger_class: 'economy',
        aircraft_type: '',
        reward_amount: 1000,
        min_pilot_hours: 0,
        expires_in_hours: 72
    });

    // Fonction pour trouver un aéroport par code ICAO
    const findAirport = (icao: string) => {
        return AIRPORTS.find(a => a.icao?.toUpperCase() === icao.toUpperCase());
    };

    const validateAndCalculateDistance = (depIcao: string, arrIcao: string) => {
        const depAirport = findAirport(depIcao);
        const arrAirport = findAirport(arrIcao);

        // Valider le départ
        if (depIcao.length === 4) {
            if (!depAirport) {
                setIcaoError(prev => ({ ...prev, departure: '❌ Code ICAO invalide' }));
                setDepartureAirport(null);
            } else {
                setIcaoError(prev => ({ ...prev, departure: '' }));
                setDepartureAirport(depAirport);
            }
        } else {
            setIcaoError(prev => ({ ...prev, departure: '' }));
            setDepartureAirport(null);
        }

        // Valider l'arrivée
        if (arrIcao.length === 4) {
            if (!arrAirport) {
                setIcaoError(prev => ({ ...prev, arrival: '❌ Code ICAO invalide' }));
                setArrivalAirport(null);
            } else {
                setIcaoError(prev => ({ ...prev, arrival: '' }));
                setArrivalAirport(arrAirport);
            }
        } else {
            setIcaoError(prev => ({ ...prev, arrival: '' }));
            setArrivalAirport(null);
        }

        // Calculer la distance si les deux aéroports sont valides
        if (depAirport && arrAirport && depIcao !== arrIcao) {
            const distance = calculateHaversineDistance(
                depAirport.lat,
                depAirport.lon,
                arrAirport.lat,
                arrAirport.lon
            );
            setFormData(prev => ({ ...prev, distance_nm: distance }));
        } else if (depIcao === arrIcao && depIcao.length === 4) {
            setIcaoError(prev => ({
                ...prev,
                arrival: '❌ L\'aéroport d\'arrivée doit être différent'
            }));
        }
    };

    const calculateReward = () => {
        const { mission_type, distance_nm, cargo_weight, passenger_count, passenger_class, aircraft_type } = formData;

        // Coûts réalistes en Sky Credits (SC) basés sur les coûts réels d'exploitation
        const COSTS = {
            // Coût carburant par NM selon type d'avion (en SC)
            fuel_per_nm: {
                'turboprop': 2,      // Petit avion économique
                'regional': 4,       // Avion régional
                'narrowbody': 8,     // A320/B737
                'widebody': 15,      // A330/B777
                'heavy': 25          // A380/B747
            },
            // Coût fixe par vol (maintenance, équipage, parking)
            fixed_per_flight: {
                'turboprop': 500,
                'regional': 1000,
                'narrowbody': 2000,
                'widebody': 4000,
                'heavy': 6000
            },
            // Coût par passager (repas, service, assurance)
            per_passenger: 15,
            // Coût par tonne de cargo (manutention, assurance)
            per_ton_cargo: 100
        };

        // Déterminer automatiquement le type d'avion selon la capacité
        let aircraft_category = 'turboprop';
        if (mission_type === 'passenger') {
            if (passenger_count <= 30) aircraft_category = 'turboprop';
            else if (passenger_count <= 100) aircraft_category = 'regional';
            else if (passenger_count <= 220) aircraft_category = 'narrowbody';
            else if (passenger_count <= 350) aircraft_category = 'widebody';
            else aircraft_category = 'heavy';
        } else if (mission_type === 'cargo') {
            const tons = cargo_weight / 1000;
            if (tons <= 5) aircraft_category = 'turboprop';
            else if (tons <= 20) aircraft_category = 'regional';
            else if (tons <= 50) aircraft_category = 'narrowbody';
            else if (tons <= 100) aircraft_category = 'widebody';
            else aircraft_category = 'heavy';
        } else if (mission_type === 'charter') {
            aircraft_category = 'narrowbody'; // Charter classique
        } else if (mission_type === 'training') {
            aircraft_category = 'turboprop'; // Petit avion école
        } else if (mission_type === 'emergency') {
            aircraft_category = 'regional'; // Avion ambulance
        }

        // Calcul des coûts de base
        const fuelCost = COSTS.fuel_per_nm[aircraft_category] * distance_nm;
        const fixedCost = COSTS.fixed_per_flight[aircraft_category];

        let totalCost = fuelCost + fixedCost;
        let revenueMultiplier = 1;

        switch (mission_type) {
            case 'cargo': {
                const tons = cargo_weight / 1000;
                const cargoCost = tons * COSTS.per_ton_cargo;
                totalCost += cargoCost;

                // Revenus cargo : prix au kg selon distance
                const pricePerKg = distance_nm < 500 ? 0.5 :
                    distance_nm < 2000 ? 0.8 :
                        1.2;
                const revenue = cargo_weight * pricePerKg;

                // Marge bénéficiaire : 30-40%
                revenueMultiplier = 1.3 + Math.random() * 0.1;
                totalCost = Math.max(totalCost, revenue * revenueMultiplier);
                break;
            }

            case 'passenger': {
                const passengerCost = passenger_count * COSTS.per_passenger;
                totalCost += passengerCost;

                // Prix par passager selon classe et distance
                const classMultiplier = PASSENGER_CLASSES.find(c => c.value === passenger_class)?.multiplier || 1;

                // Prix réaliste par passager
                let pricePerPassenger = 100; // Base
                if (distance_nm < 500) {
                    pricePerPassenger = 80 * classMultiplier;  // Court courrier
                } else if (distance_nm < 2000) {
                    pricePerPassenger = 200 * classMultiplier; // Moyen courrier
                } else if (distance_nm < 5000) {
                    pricePerPassenger = 500 * classMultiplier; // Long courrier
                } else {
                    pricePerPassenger = 800 * classMultiplier; // Ultra long courrier
                }

                const revenue = passenger_count * pricePerPassenger;

                // Taux de remplissage : 70-90% (réaliste)
                const loadFactor = 0.7 + Math.random() * 0.2;
                totalCost = Math.max(totalCost, revenue * loadFactor);
                break;
            }

            case 'charter': {
                // Charter = location privée d'avion
                // Prix au NM très élevé
                const charterRate = aircraft_category === 'turboprop' ? 15 :
                    aircraft_category === 'regional' ? 30 :
                        aircraft_category === 'narrowbody' ? 50 :
                            aircraft_category === 'widebody' ? 100 : 150;

                totalCost = (charterRate * distance_nm) + fixedCost;
                // Marge élevée sur le charter : 50-70%
                revenueMultiplier = 1.5 + Math.random() * 0.2;
                totalCost *= revenueMultiplier;
                break;
            }

            case 'training': {
                // Vol école : prix réduit car formation
                // Coût horaire d'un vol école
                const hours = distance_nm / 120; // ~120 kts moyenne
                const hourlyRate = 200; // SC par heure de vol
                totalCost = Math.max(500, hours * hourlyRate);
                break;
            }

            case 'emergency': {
                // Urgence = tarif premium x3-5
                const emergencyMultiplier = 3 + Math.random() * 2;
                totalCost = (fuelCost + fixedCost) * emergencyMultiplier;

                // Prime d'urgence fixe
                totalCost += 2000;
                break;
            }
        }

        // Facteur de variation marché : ±15%
        const marketVariation = 0.85 + Math.random() * 0.3;
        totalCost *= marketVariation;

        // Arrondir à la dizaine
        const finalReward = Math.round(totalCost / 10) * 10;

        setFormData(prev => ({
            ...prev,
            reward_amount: Math.max(500, finalReward) // Minimum 500 SC
        }));
    };


    useEffect(() => {
        calculateReward();
    }, [formData.mission_type, formData.distance_nm, formData.cargo_weight,
    formData.passenger_count, formData.passenger_class]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation des ICAO
        if (!departureAirport || !arrivalAirport) {
            setError('Veuillez entrer des codes ICAO valides');
            return;
        }

        if (formData.departure_icao === formData.arrival_icao) {
            setError('Les aéroports de départ et d\'arrivée doivent être différents');
            return;
        }

        // Validation
        if (formData.reward_amount < 1000 && formData.mission_type !== 'training') {
            setError('La récompense minimum est de 1000 SC');
            return;
        }

        if (formData.reward_amount > company.balance) {
            setError(`Fonds insuffisants. Balance de la compagnie: ${company.balance.toLocaleString()} SC`);
            return;
        }

        setCreating(true);

        try {
            const expiresAt = formData.expires_in_hours > 0
                ? new Date(Date.now() + formData.expires_in_hours * 60 * 60 * 1000).toISOString()
                : null;

            const { data: { user } } = await supabase.auth.getUser();
            if (!user) throw new Error('Non authentifié');

            const missionData: any = {
                company_id: company.id,
                created_by: user.id,
                title: formData.title,
                description: formData.description,
                mission_type: formData.mission_type,
                visibility: formData.visibility,
                departure_icao: formData.departure_icao.toUpperCase(),
                arrival_icao: formData.arrival_icao.toUpperCase(),
                distance_nm: formData.distance_nm,
                reward_amount: formData.reward_amount,
                min_pilot_hours: formData.min_pilot_hours,
                expires_at: expiresAt,
                status: 'available'
            };

            // Ajouter les champs spécifiques selon le type
            if (formData.mission_type === 'cargo') {
                missionData.cargo_weight = formData.cargo_weight;
            } else if (formData.mission_type === 'passenger') {
                missionData.passenger_count = formData.passenger_count;
                missionData.passenger_class = formData.passenger_class;
            } else if (formData.mission_type === 'charter') {
                missionData.aircraft_type = formData.aircraft_type;
            }

            const { data: mission, error: missionError } = await supabase
                .from('missions')
                .insert([missionData])
                .select()
                .single();

            if (missionError) throw missionError;

            // Déduire le montant de la récompense du solde de la compagnie
            const { error: balanceError } = await supabase
                .from('companies')
                .update({
                    balance: company.balance - formData.reward_amount
                })
                .eq('id', company.id);

            if (balanceError) {
                await supabase.from('missions').delete().eq('id', mission.id);
                throw balanceError;
            }

            setSuccess(`✅ Mission "${formData.title}" créée avec succès !`);

            // Réinitialiser le formulaire
            setFormData({
                title: '',
                description: '',
                mission_type: 'cargo',
                visibility: 'company',
                departure_icao: '',
                arrival_icao: '',
                distance_nm: 0,
                cargo_weight: 0,
                passenger_count: 0,
                passenger_class: 'economy',
                aircraft_type: '',
                reward_amount: 1000,
                min_pilot_hours: 0,
                expires_in_hours: 72
            });
            setDepartureAirport(null);
            setArrivalAirport(null);
            setIcaoError({ departure: '', arrival: '' });

            if (onSuccess) {
                setTimeout(() => {
                    onSuccess();
                }, 2000);
            }
        } catch (err: any) {
            console.error('Erreur:', err);
            setError(err.message || 'Erreur lors de la création de la mission');
        } finally {
            setCreating(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Balance de la compagnie */}
            <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border border-yellow-500/30">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-400">Balance de la compagnie</p>
                        <p className="text-3xl font-bold text-yellow-400">
                            {company?.balance?.toLocaleString() || 0} SC
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Coût de cette mission</p>
                        <p className="text-3xl font-bold text-white">
                            {formData.reward_amount.toLocaleString()} SC
                        </p>
                    </div>
                </div>
                {formData.reward_amount > company.balance && (
                    <div className="mt-3 pt-3 border-t border-red-500/30">
                        <p className="text-red-300 text-sm">
                            ❌ Fonds insuffisants
                        </p>
                    </div>
                )}
            </div>

            {/* Messages */}
            {error && (
                <div className="bg-red-600/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {success && (
                <div className="bg-green-600/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg">
                    {success}
                </div>
            )}

            {/* Type de mission */}
            <div>
                <label className="block text-white font-semibold mb-3">
                    Type de mission *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {Object.entries(MISSION_TYPES).map(([key, type]) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setFormData({ ...formData, mission_type: key })}
                            className={`p-4 rounded-lg border-2 transition text-left ${formData.mission_type === key
                                ? 'bg-blue-600/30 border-blue-500'
                                : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                                }`}
                        >
                            <div className="text-3xl mb-2">{type.icon}</div>
                            <div className="text-white font-semibold text-xs">{key}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Titre */}
            <div>
                <label className="block text-white font-semibold mb-2">
                    Titre de la mission *
                </label>
                <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Ex: Transport urgent de matériel médical"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    maxLength={100}
                />
                <p className="text-xs text-gray-500 mt-1">
                    {formData.title.length}/100 caractères
                </p>
            </div>

            {/* Description */}
            <div>
                <label className="block text-white font-semibold mb-2">
                    Description
                </label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Détails supplémentaires sur la mission..."
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none h-24 resize-none"
                    maxLength={500}
                />
                <p className="text-xs text-gray-500 mt-1">
                    {formData.description.length}/500 caractères
                </p>
            </div>

            {/* Visibilité */}
            <div>
                <label className="block text-white font-semibold mb-2">
                    Visibilité de la mission *
                </label>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, visibility: 'company' })}
                        className={`p-4 rounded-lg border-2 transition ${formData.visibility === 'company'
                            ? 'bg-blue-600/30 border-blue-500'
                            : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                            }`}
                    >
                        <div className="text-3xl mb-2">🏢</div>
                        <div className="text-white font-semibold">Compagnie uniquement</div>
                        <div className="text-gray-400 text-xs mt-1">
                            Visible uniquement par vos membres
                        </div>
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, visibility: 'public' })}
                        className={`p-4 rounded-lg border-2 transition ${formData.visibility === 'public'
                            ? 'bg-green-600/30 border-green-500'
                            : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                            }`}
                    >
                        <div className="text-3xl mb-2">🌍</div>
                        <div className="text-white font-semibold">Publique</div>
                        <div className="text-gray-400 text-xs mt-1">
                            Accessible à tous les pilotes
                        </div>
                    </button>
                </div>
            </div>

            {/* Aéroports */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-white font-semibold mb-2">
                        Départ (ICAO) *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.departure_icao}
                        onChange={(e) => {
                            const val = e.target.value.toUpperCase();
                            setFormData({ ...formData, departure_icao: val });
                            validateAndCalculateDistance(val, formData.arrival_icao);
                        }}
                        placeholder="LFPG"
                        className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg border ${icaoError.departure ? 'border-red-500' : 'border-gray-700'
                            } focus:border-blue-500 focus:outline-none uppercase`}
                        maxLength={4}
                    />
                    {icaoError.departure && (
                        <p className="text-red-400 text-xs mt-1">{icaoError.departure}</p>
                    )}
                    {departureAirport && (
                        <p className="text-green-400 text-xs mt-1">
                            ✓ {departureAirport.name}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">
                        Arrivée (ICAO) *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.arrival_icao}
                        onChange={(e) => {
                            const val = e.target.value.toUpperCase();
                            setFormData({ ...formData, arrival_icao: val });
                            validateAndCalculateDistance(formData.departure_icao, val);
                        }}
                        placeholder="EGLL"
                        className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg border ${icaoError.arrival ? 'border-red-500' : 'border-gray-700'
                            } focus:border-blue-500 focus:outline-none uppercase`}
                        maxLength={4}
                    />
                    {icaoError.arrival && (
                        <p className="text-red-400 text-xs mt-1">{icaoError.arrival}</p>
                    )}
                    {arrivalAirport && (
                        <p className="text-green-400 text-xs mt-1">
                            ✓ {arrivalAirport.name}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">
                        Distance (NM)
                    </label>
                    <input
                        type="number"
                        value={formData.distance_nm}
                        readOnly
                        className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 cursor-not-allowed"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Calculé automatiquement
                    </p>
                </div>
            </div>

            {/* Route visuelle si les deux aéroports sont valides */}
            {departureAirport && arrivalAirport && (
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">✈️ Route</h3>
                    <div className="flex items-center gap-3 text-sm">
                        <div className="flex-1">
                            <p className="text-gray-400">{departureAirport.name}</p>
                            <p className="text-white font-mono font-bold">{departureAirport.icao}</p>
                        </div>
                        <div className="text-2xl">→</div>
                        <div className="flex-1 text-right">
                            <p className="text-gray-400">{arrivalAirport.name}</p>
                            <p className="text-white font-mono font-bold">{arrivalAirport.icao}</p>
                        </div>
                    </div>
                    <p className="text-center text-yellow-400 font-bold mt-3">
                        {formData.distance_nm} NM
                    </p>
                </div>
            )}

            {/* Champs spécifiques selon le type */}
            {formData.mission_type === 'cargo' && (
                <div>
                    <label className="block text-white font-semibold mb-2">
                        Poids du cargo (kg) *
                    </label>
                    <input
                        type="number"
                        required
                        value={formData.cargo_weight}
                        onChange={(e) => setFormData({ ...formData, cargo_weight: parseInt(e.target.value) || 0 })}
                        placeholder="5000"
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        min="0"
                    />
                </div>
            )}

            {formData.mission_type === 'passenger' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white font-semibold mb-2">
                            Nombre de passagers *
                        </label>
                        <input
                            type="number"
                            required
                            value={formData.passenger_count}
                            onChange={(e) => setFormData({ ...formData, passenger_count: parseInt(e.target.value) || 0 })}
                            placeholder="150"
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                            min="1"
                        />
                    </div>
                    <div>
                        <label className="block text-white font-semibold mb-2">
                            Classe *
                        </label>
                        <select
                            value={formData.passenger_class}
                            onChange={(e) => setFormData({ ...formData, passenger_class: e.target.value })}
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        >
                            {PASSENGER_CLASSES.map(cls => (
                                <option key={cls.value} value={cls.value}>
                                    {cls.label} (x{cls.multiplier})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            {formData.mission_type === 'charter' && (
                <div>
                    <label className="block text-white font-semibold mb-2">
                        Type d'avion requis
                    </label>
                    <input
                        type="text"
                        value={formData.aircraft_type}
                        onChange={(e) => setFormData({ ...formData, aircraft_type: e.target.value })}
                        placeholder="Ex: Citation CJ4, King Air 350"
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                </div>
            )}

            {/* Paramètres avancés */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-white font-semibold mb-2">
                        Heures de vol minimum
                    </label>
                    <input
                        type="number"
                        value={formData.min_pilot_hours}
                        onChange={(e) => setFormData({ ...formData, min_pilot_hours: parseInt(e.target.value) || 0 })}
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        min="0"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">
                        Expiration (heures)
                    </label>
                    <input
                        type="number"
                        value={formData.expires_in_hours}
                        onChange={(e) => setFormData({ ...formData, expires_in_hours: parseInt(e.target.value) || 0 })}
                        placeholder="72"
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        0 = pas d'expiration
                    </p>
                </div>
            </div>

            {/* Récompense calculée */}
            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">💰 Récompense calculée</h3>
                <p className="text-green-400 text-3xl font-bold">
                    {formData.reward_amount.toLocaleString()} SC
                </p>
                <p className="text-gray-400 text-sm mt-2">
                    Cette somme sera déduite du solde de votre compagnie
                </p>
            </div>

            {/* Bouton de soumission */}
            <button
                type="submit"
                disabled={creating || formData.reward_amount > company.balance || !departureAirport || !arrivalAirport}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition text-lg"
            >
                {creating ? '🔄 Création en cours...' :
                    formData.reward_amount > company.balance ? '❌ Fonds insuffisants' :
                        !departureAirport || !arrivalAirport ? '❌ Codes ICAO invalides' :
                            '🚀 Créer la mission'}
            </button>
        </form>
    );
}