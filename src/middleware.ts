import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle root path: rewrite to /en instead of redirecting
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/en`;
    return NextResponse.rewrite(url);
  }

  // For all other paths, use the default next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next|_vercel|.*\\..*|api).*)'
  ]
};

