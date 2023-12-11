import { type NextRequest } from 'next/server'
import { NextResponse, NextMiddleware, NextFetchEvent } from 'next/server'
import { cookies } from 'next/headers'
import { createClient } from '@/lib/supabase/server'

export const redirectMiddleware = (middleware: NextMiddleware) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('Users').select('*')

    if (!!data && request.nextUrl.pathname.startsWith('/dashboard/users')) {
      if (data[0]?.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/', request.url))
      }
    }

    return middleware(request, event)
  }
}
