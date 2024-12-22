import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');

  if (request.nextUrl.pathname === '/auth/login') {
    return NextResponse.next();
  }

  if (!session) {
    if (request.nextUrl.pathname !== '/auth/login') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/' 
};
