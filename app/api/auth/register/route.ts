import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
    try {
        const { username, email, password } = await request.json();

        // Validation
        if (!username || !email || !password) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis' },
                { status: 400 }
            );
        }

        // Créer l'utilisateur Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: { username }
        });

        if (authError) {
            return NextResponse.json(
                { error: authError.message },
                { status: 400 }
            );
        }

        // Créer le profil utilisateur
        const { error: profileError } = await supabase
            .from('users')
            .insert({
                id: authData.user.id,
                username,
                email,
                total_earnings: 0,
                missions_completed: 0
            });

        if (profileError) {
            return NextResponse.json(
                { error: 'Erreur lors de la création du profil' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            user: {
                id: authData.user.id,
                username,
                email
            }
        });

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Erreur serveur' },
            { status: 500 }
        );
    }
}