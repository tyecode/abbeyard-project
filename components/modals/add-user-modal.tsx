'use client'

import { createUsers } from '@/app/actions/usersAction'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState, useTransition } from 'react'
import { useToast } from '../ui/use-toast'

const AddUserModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'}>Add user</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add user</DialogTitle>
        </DialogHeader>
        <form
          action={(formData: FormData) => {
            const response = createUsers(formData)

            toast({
              description: <span className='font-semibold'>{response}</span>,
            })
          }}
          className='grid gap-4 py-4'
        >
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
