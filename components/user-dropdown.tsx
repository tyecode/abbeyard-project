'use client'

import { useTransition } from 'react'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { Users } from '@prisma/client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useToast } from '@/components/ui/use-toast'
import { deleteUsers } from '@/app/actions/usersAction'

type Props = {
  user: Users
}

export const UserDropdown = (props: Props) => {
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
