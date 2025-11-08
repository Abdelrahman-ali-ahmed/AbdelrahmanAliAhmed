import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for root path - let Next.js handle it directly
  // This eliminates middleware processing latency for the most important request
  if (pathname === '/') {
    return NextResponse.next();
  }

  // For all other paths, use the default next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Exclude static files, API routes, and Next.js internals
    '/((?!_next/static|_next/image|_vercel|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)'
  ]
};

