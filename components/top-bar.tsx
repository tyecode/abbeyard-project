'use client'

import { usePathname, useRouter } from 'next/navigation'

import { IconsCollection } from '@/components/icons/radix-icons-collection'
import { ModeToggle } from '@/components/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const TopBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const title = pathname.split('/')[1]

  return (
    <section className='w-full border bg-background'>
      <div className='container flex h-20 items-center justify-between md:container'>
        {pathname !== '/' ? (
          <span className='text-2xl font-bold capitalize text-foreground/80'>
            {title}
          </span>
        ) : (
          <div className='flex flex-col text-xs font-normal capitalize'>
            Welcome back,{' '}
            <span className='text-xl font-semibold'>Sengphachanh</span>
          </div>
        )}

        <div className='flex items-center gap-4'>
          <ModeToggle />

          <Popover>
            <PopoverTrigger>
              <Avatar className='aspect-square w-10 cursor-pointer'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className='flex-center mx-6 my-2 w-96 flex-col gap-4 p-6'>
              <div className='flex-center flex-col gap-4 py-4'>
                <Avatar className='flex-center h-28 w-28 flex-col'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    alt='@shadcn'
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-center flex-col gap-1'>
                  <h1 className='text-center text-xl font-semibold'>
                    Sengphachanh Chanthavong
                  </h1>
                  <p className='text-base font-normal lowercase text-foreground/70'>
                    Sengphachanh.dev@gmail.com
                  </p>
                </div>
                <Button size={'sm'} variant={'outline'}>
                  Edit profile
                </Button>
              </div>
              <ul className='flex w-full flex-col border-t pt-4'>
                <li>
                  <Button
                    variant={'ghost'}
                    className='w-full justify-start gap-4 text-base'
                    onClick={() => router.push('/dashboard')}
                  >
                    <IconsCollection icon={'DashboardIcon'} />
                    Dashboard
                  </Button>
                </li>
                <li>
                  <form action='/api/logout' method='post'>
                    <Button
                      variant={'ghost'}
                      className='w-full justify-start gap-4 text-base'
                    >
                      <IconsCollection icon={'ExitIcon'} />
                      Logout
                    </Button>
                  </form>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  )
}

export default TopBar
