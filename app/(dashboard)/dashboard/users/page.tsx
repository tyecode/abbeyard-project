'use client'

import { Users } from '@prisma/client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { UserDropdown } from '@/components/user-dropdown'
import AddUserModal from '@/components/modals/add-user-modal'
import { getUsers } from '@/actions/users-actions'
import { useEffect, useTransition } from 'react'
import { useUsersStore } from '@/stores/useUsersStore'
import { Skeleton } from '@/components/ui/skeleton'

const UsersPage = () => {
  const users: Users[] = useUsersStore((state) => state.users)
  const updateUsers = useUsersStore((state) => state.updateUsers)
  const [isPending, setTransition] = useTransition()

  useEffect(() => {
    setTransition(async () => {
      await getUsers().then((data) => {
        updateUsers(data)
      })
    })
  }, [updateUsers])

  return (
    <div className='container'>
      <div className='flex grow justify-end py-4'>
        <AddUserModal />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User UID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        {!isPending ? (
          <TableBody>
            {users?.map((user: Users, index: number) => (
              <TableRow key={`user-${index}`} className='group'>
                <TableCell>
                  <span className='line-clamp-1 min-w-[100px] break-all'>
                    {user.id}
                  </span>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role.toLowerCase()}</TableCell>
                <TableCell>{user.created_at.toString()}</TableCell>
                <TableCell>
                  <span className='opacity-0 group-hover:opacity-100'>
                    <UserDropdown user={user} />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {[...Array(8)].map((array, index) => (
              <TableRow key={`row-${index}`}>
                <TableCell>
                  <Skeleton className='h-5 grow' />
                </TableCell>
                <TableCell>
                  <Skeleton className='h-5 grow' />
                </TableCell>
                <TableCell>
                  <Skeleton className='h-5 grow' />
                </TableCell>
                <TableCell>
                  <Skeleton className='h-5 grow' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  )
}

export default UsersPage
