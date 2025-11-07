import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabase-admin';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const supabase = getSupabaseAdmin();
        const { launcherUuid, userId } = await request.json();
        
        if (!launcherUuid || !userId) {
            return NextResponse.json(
                { error: 'UUID et userId requis' },
                { status: 400 }
            );
        }

        // Vérifier si cet UUID n'est pas déjà utilisé par un autre compte
        const { data: existingUser, error: fetchError } = await supabase
            .from('users')
            .select('id, username')
            .eq('launcher_uuid', launcherUuid)
            .maybeSingle();

        if (fetchError) {
            console.error('Error fetching user:', fetchError);
        }

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
            console.error('Error updating user:', updateError);
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
        console.error('Error in link-uuid route:', error);
        return NextResponse.json(
            { error: error.message || 'Erreur serveur' },
            { status: 500 }
        );
    }
}