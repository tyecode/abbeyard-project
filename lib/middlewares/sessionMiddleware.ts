import { type NextRequest } from 'next/server'
import { NextResponse, NextMiddleware, NextFetchEvent } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export const sessionMiddleware = (middleware: NextMiddleware) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })
    const auth = await supabase.auth.getSession()

    if (!auth.data.session && !req.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    return middleware(req, event)
  }
}
