'use server'

import { Users } from '@prisma/client'
import { prisma } from '@/lib/prisma-client'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE!
)

export const getUsers = async () => {
  try {
    const users: Users[] = await prisma.users.findMany()

    return users
  } catch (error) {
    throw new Error('Could not retrieve user')
  }
}

export const createUsers = async (formData: FormData) => {
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))

  try {
    const { data: users } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    return users
  } catch (error) {
    throw new Error('Could not create user')
  }
}

export const deleteUsers = async (user: Users) => {
  try {
    const { data: users } = await supabase.auth.admin.deleteUser(user.id)

    return users
  } catch (error) {
    throw new Error('Could new delete user')
  }
}
