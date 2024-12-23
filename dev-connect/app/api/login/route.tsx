import { auth } from 'firebase-admin';
import { customInitApp } from '@/lib/firebase-admin-config';
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

customInitApp();

export async function POST(request: NextRequest) {
  const authorization = request.headers.get('Authorization');
  if (authorization?.startsWith('Bearer ')) {
    const idToken = authorization.split('Bearer ')[1];

    try {
      const decodedToken = await auth().verifyIdToken(idToken);
      if (decodedToken) {
        const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
        const sessionCookie = await auth().createSessionCookie(idToken, { expiresIn });

        // Set the session cookie in the response
        const response = NextResponse.json({ message: 'Login successful' });
        response.cookies.set('session', sessionCookie, {
          maxAge: expiresIn / 1000, // MaxAge is in seconds
          httpOnly: true,
          secure: true, // Ensure HTTPS
          path: '/', // Make the cookie available to the entire app
        });

        return response;
      }
    } catch (error) {
      console.error('Error verifying ID token:', error);
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
