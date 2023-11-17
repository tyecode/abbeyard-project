'use server'

import { Users } from '@prisma/client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { UserDropdown } from '@/components/user-dropdown'
import AddUserModal from '@/components/modals/add-user-modal'
import { getUsers } from '@/app/actions/usersAction'

const UsersPage = async () => {
  const users: Users[] = await getUsers()

  return (
    <div className='container'>
      <div className='flex grow justify-end py-4'>
        <AddUserModal />
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User UID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: Users, index: number) => (
            <TableRow key={`user-${index}`}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role.toLowerCase()}</TableCell>
              <TableCell>{user.created_at.toString()}</TableCell>
              <TableCell>
                <UserDropdown user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default UsersPage
