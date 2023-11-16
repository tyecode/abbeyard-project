import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { prisma } from '@/lib/prisma-client'
import { Users } from '@prisma/client'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE!
)

export const GET = async () => {
  const users: Users[] = await prisma.users.findMany()

  // const {
  //   data: { users },
  //   error,
  // } = await supabase.auth.admin.listUsers()

  if (!users) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Could not retrieve users',
    })
  }

  return new Response(JSON.stringify(users), { status: 200 })
}

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json()
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (error) {
    return new NextResponse(error.message, {
      status: error.status,
      statusText: error.message,
    })
  }

  return new NextResponse(JSON.stringify({ email, password }), {
    status: 200,
    statusText: 'User created successfully',
  })
}

export const DELETE = async (request: NextRequest) => {
  const { id } = await request.json()
  const { data, error } = await supabase.auth.admin.deleteUser(id)

  if (error) {
    return new NextResponse(null, {
      status: error.status,
      statusText: error.message,
    })
  }

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    statusText: 'User deleted successful',
  })
}
