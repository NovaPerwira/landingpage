import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'id', 'jp'],
  defaultLocale: 'en',
  localeDetection: false,
})

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Admin auth check
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin-token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin-login', request.url))
    }
  }

  // Apply locale middleware
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
