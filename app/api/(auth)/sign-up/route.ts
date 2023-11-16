import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { email, password } = await request.json()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return new NextResponse(null, {
      status: 500,
      statusText: 'Could not insert new user',
    })
  }

  return new NextResponse(null, {
    status: 200,
    statusText: 'Inserted new user',
  })
}
