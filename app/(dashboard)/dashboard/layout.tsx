'use client'

import LeftBar from '@/components/left-bar'
import TopBar from '@/components/top-bar'
import { Toaster } from '@/components/ui/toaster'

const dashboard = [
  {
    id: 1,
    title: 'Users',
    link: '/dashboard/users',
  },
]

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <aside className='h-full w-[18rem] border bg-background'>
        <LeftBar navLinks={dashboard} />
      </aside>

      <main className='flex h-full w-full flex-col'>
        <TopBar />
        {children}
        <Toaster />
      </main>
    </>
  )
}

export default DashboardPageLayout
