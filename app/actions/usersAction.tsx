'use server'

import { revalidateTag } from 'next/cache'

import { Users } from '@prisma/client'
import { useDate } from '@/lib/date-format'

// get users operation
export const getUsers = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/users`,
    {
      cache: 'no-cache',
      next: {
        tags: ['users'],
      },
    }
  )
  const users = await response.json()

  const usersData = users.map((user: Users) => {
    const createdAt = useDate(user.created_at)

    return { ...user, created_at: createdAt }
  })

  if (!response.ok) throw new Error('Can not access users data')

  return usersData
}

// create users operation
export const createUsers = async (formData: FormData) => {
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const user = {
    email,
    password,
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/users`,
    {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  )

  if (!response.ok) return response.statusText

  revalidateTag('users')
  return response.statusText
}

// delete users operation
export const deleteUsers = async (user: Users) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/users`,
    {
      method: 'DELETE',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  )

  if (!response.ok) return response.statusText

  revalidateTag('users')
  return response.statusText
}
