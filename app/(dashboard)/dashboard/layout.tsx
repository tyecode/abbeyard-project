import LeftBar from '@/components/LeftBar'
import TopBar from '@/components/TopBar'

const dashboard = [
  {
    id: 1,
    title: 'Users',
    link: '/dashboard/users',
  },
]

const getSession = async () => {}

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
