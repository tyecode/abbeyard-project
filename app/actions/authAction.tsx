'use server'

import { prisma } from '@/lib/prisma-client'
import { Users } from '@prisma/client'

export const getAuth = async (user: Users) => {
  const data = prisma.users.findUnique({
    where: {
      id: user.id,
    },
  })

  return data
}
