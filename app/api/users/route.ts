import { users } from '@prisma/client';
import { prisma } from '@/lib/prismaClient';

export const GET = async () => {
  try {
    const res = await prisma.users.findMany();
    const users: users[] = res;

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    throw new Error('Authentication require to access!');
  }
};
