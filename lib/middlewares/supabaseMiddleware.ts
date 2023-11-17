import { type NextRequest } from 'next/server'
import { NextResponse, NextMiddleware, NextFetchEvent } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export const supabaseMiddleware = (middleware: NextMiddleware) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // Create an unmodified response
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    // Create a Supabase client configured to use cookies
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            // If the cookie is updated, update the cookies for the request and response
            request.cookies.set({
              name,
              value,
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name, options) {
            // If the cookie is removed, update the cookies for the request and response
            request.cookies.delete({
              name,
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.delete({
              name,
              ...options,
            })
          },
        },
      }
    )

    await supabase.auth.getSession()

    return middleware(request, event)
  }
}
