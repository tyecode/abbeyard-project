'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { deleteUsers } from '@/app/actions/usersAction'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { Users } from '.prisma/client'
import { useToast } from './ui/use-toast'
import { useTransition } from 'react'

type Props = {
  user: Users
}

export const UsersDropdown = (props: Props) => {
  const { toast } = useToast()
  const [isPending, setTransition] = useTransition()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex-center aspect-square w-7 cursor-pointer rounded-md outline-none hover:bg-slate-200'>
        <DotsVerticalIcon width={28} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              const response = deleteUsers(props.user)

              toast({
                description: <span className='font-semibold'>{response}</span>,
              })
            }}
          >
            Delete user
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
