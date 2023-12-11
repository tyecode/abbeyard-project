import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  await supabase.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    status: 301,
  })
}
