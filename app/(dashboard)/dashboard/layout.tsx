'use client'

import LeftBar from '@/components/left-bar'
import TopBar from '@/components/top-bar'

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
      </main>
    </>
  )
}

export default DashboardPageLayout
