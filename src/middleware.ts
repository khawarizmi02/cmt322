import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/admin(.*)', '/api/webhooks(.*)', '/'])

const isAdminRoute = (req: Request) => {
  const url = new URL(req.url)
  return url.pathname.startsWith('/admin')
}

export default clerkMiddleware(async (auth, req) => {
  // Protect all routes starting with `/admin`
  if (isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== 'admin') {
    const url = new URL('/', req.url)
    return NextResponse.redirect(url)
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}