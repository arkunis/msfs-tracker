import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Récupérer le token depuis les cookies
    const token = req.cookies.get('sb-access-token')?.value;

    let session = null;
    if (token) {
        const { data } = await supabase.auth.getUser(token);
        session = data.user;
    }

    const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
    const isLinkLauncherPage = req.nextUrl.pathname === '/auth/link-launcher';
    const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard') || 
                             req.nextUrl.pathname.startsWith('/company') ||
                             req.nextUrl.pathname.startsWith('/missions');
                             req.nextUrl.pathname.startsWith('/profile');

    // Pas connecté et essaie d'accéder à une route protégée
    if (!session && isProtectedRoute) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Connecté mais pas sur une page auth
    if (session && !isAuthPage) {
        // Vérifier si l'UUID est lié
        const { data: profile } = await supabase
            .from('users')
            .select('launcher_uuid')
            .eq('id', session.id)
            .single();

        // Pas d'UUID et essaie d'accéder à une route protégée
        if (!profile?.launcher_uuid && isProtectedRoute) {
            return NextResponse.redirect(new URL('/auth/link-launcher', req.url));
        }
    }

    // Connecté avec UUID et essaie d'accéder à link-launcher
    if (session && isLinkLauncherPage) {
        const { data: profile } = await supabase
            .from('users')
            .select('launcher_uuid')
            .eq('id', session.id)
            .single();

        if (profile?.launcher_uuid) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
    }

    // Connecté et essaie d'accéder à login/register
    if (session && (req.nextUrl.pathname === '/auth/login' || req.nextUrl.pathname === '/auth/register')) {
        // Vérifier l'UUID
        const { data: profile } = await supabase
            .from('users')
            .select('launcher_uuid')
            .eq('id', session.id)
            .single();

        if (!profile?.launcher_uuid) {
            return NextResponse.redirect(new URL('/auth/link-launcher', req.url));
        } else {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/company/:path*',
        '/missions/:path*',
        '/auth/:path*'
    ],
};