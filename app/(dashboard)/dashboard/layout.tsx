'use client'

import { getAuth } from '@/app/actions/authAction'
import LeftBar from '@/components/left-bar'
import TopBar from '@/components/top-bar'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const dashboard = [
  {
    id: 1,
    title: 'Users',
    link: '/dashboard/users',
  },
]

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const supabase = createClient()

  // useEffect(() => {
  //   supabase.auth
  //     .getUser()
  //     .then((res: any) => res.data.user)
  //     .then(async (user) => {
  //       const data = await getAuth(user)

  //       if (data?.role !== 'ADMIN') router.replace('/')
  //     })
  // }, [router, supabase])

  return (
    <>
      <aside className='h-full w-[18rem] border bg-background'>
        <LeftBar navLinks={dashboard} />
      </aside>

      <main className='flex h-full w-full flex-col'>
        <TopBar />
        {children}
      </main>
    </>
  )
}

export default DashboardPageLayout
