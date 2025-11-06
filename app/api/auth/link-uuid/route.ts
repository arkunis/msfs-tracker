import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
    try {
        const { launcherUuid, userId } = await request.json();

        if (!launcherUuid || !userId) {
            return NextResponse.json(
                { error: 'UUID et userId requis' },
                { status: 400 }
            );
        }

        // Vérifier si cet UUID n'est pas déjà utilisé par un autre compte
        const { data: existingUser } = await supabase
            .from('users')
            .select('id, username')
            .eq('launcher_uuid', launcherUuid)
            .single();

        if (existingUser && existingUser.id !== userId) {
            return NextResponse.json(
                { error: 'Cet UUID est déjà lié à un autre compte' },
                { status: 400 }
            );
        }

        // Lier l'UUID au compte
        const { error: updateError } = await supabase
            .from('users')
            .update({ launcher_uuid: launcherUuid })
            .eq('id', userId);

        if (updateError) {
            return NextResponse.json(
                { error: 'Erreur lors de la liaison UUID' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'UUID lié avec succès'
        });

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Erreur serveur' },
            { status: 500 }
        );
    }
}