import { create } from 'zustand'
import { Users } from '@prisma/client'

interface UsersState {
  users: Users[]
  updateUsers: (users: Users[]) => void
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  updateUsers: (users) => set((state) => ({ users: [...users] })),
}))
