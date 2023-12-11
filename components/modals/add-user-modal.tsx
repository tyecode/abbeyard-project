'use client'

import { useState } from 'react'
import { Users } from '@prisma/client'
import { createUsers, getUsers } from '@/actions/users-actions'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useUsersStore } from '@/stores/useUsersStore'

const AddUserModal = () => {
  const updateUsers = useUsersStore((state) => state.updateUsers)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleCreateUser = async (formData: FormData) => {
    await createUsers(formData).then(async (res) => {
      if (!res.user)
        return toast({
          description: 'Could not create new user',
        })

      const users: Users[] = await getUsers()
      let newUsers: Users[] = [...users]

      updateUsers(newUsers)

      return toast({
        description: 'Create new user successful',
      })
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'}>Add user</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add user</DialogTitle>
        </DialogHeader>
        <form action={handleCreateUser} className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='email' className='text-right'>
              Email
            </Label>
            <Input
              id='email'
              name='email'
              className='col-span-3'
              type='email'
              required
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='password' className='text-right'>
              Password
            </Label>
            <Input
              id='password'
              name='password'
              type='password'
              className='col-span-3'
              required
            />
          </div>
          <Button type='submit' onClick={() => setIsOpen(false)}>
            Create user
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddUserModal
