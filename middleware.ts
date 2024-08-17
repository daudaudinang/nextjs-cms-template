import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Danh sách các đường dẫn không cần xác thực
const publicRoutes = ['/login', '/register', '/about', '/contact']

export function middleware(request: NextRequest) {
	const currentUser = request.cookies.get('currentUser')?.value

	// Kiểm tra nếu route hiện tại không nằm trong danh sách public
	if (!publicRoutes.includes(request.nextUrl.pathname)) {
		if (!currentUser) {
			// Nếu không có user, redirect về trang login
			const loginUrl = new URL('/login', request.url)
			loginUrl.searchParams.set('from', request.nextUrl.pathname)
			return NextResponse.redirect(loginUrl)
		}
	}

	// Nếu user đã đăng nhập và cố gắng truy cập trang login hoặc register, redirect về trang chủ
	if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') && currentUser) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	return NextResponse.next()
}

// Chỉ định các routes mà middleware sẽ chạy
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}