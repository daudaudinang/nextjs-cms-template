import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import i18nConfig from '../configs/i18n-config'

// Danh sách các đường dẫn không cần xác thực
const publicRoutes = ['/login', '/register', '/about', '/contact']

const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: i18nConfig.locales,

    // Used when no locale matches
    defaultLocale: i18nConfig.defaultLocale,
})

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const currentUser = request.cookies.get('currentUser')?.value

    const pathnameWithoutLocale = pathname.replace(
        new RegExp(`^/(${i18nConfig.locales.join('|')})`),
        ''
    )

    const localeMatch = pathname.match(new RegExp(`^/(${i18nConfig.locales.join('|')})`))
    const locale = localeMatch ? localeMatch[1] : ''

    const basePath = locale ? `/${locale}` : ''

    if (!publicRoutes.some(route => pathnameWithoutLocale.startsWith(route)) && !currentUser) {
        const loginUrl = new URL(`${basePath}/login`, request.url)
        loginUrl.searchParams.set('from', pathname)
        return NextResponse.redirect(loginUrl)
    }

    console.log('locale', locale, pathnameWithoutLocale)
    // Nếu user đã đăng nhập và cố gắng truy cập trang login, register, hoặc trang chủ, redirect về dashboard
    if (
        (pathnameWithoutLocale.startsWith('/login') ||
            pathnameWithoutLocale.startsWith('/register') ||
            pathnameWithoutLocale === '/' ||
            pathnameWithoutLocale.trim() === '') &&
        currentUser
    ) {
        return NextResponse.redirect(new URL(`${basePath}/dashboard`, request.url))
    }

    return intlMiddleware(request)
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
