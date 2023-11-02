'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Spinner } from '@nextui-org/react';
import { navLinks } from '@/constants';
import LeftBar from '@/components/LeftBar';
import TopBar from '@/components/TopBar';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    fetch('/api/auth')
      .then((res) => res.json())
      .then((session) => {
        if (!session) {
          router.replace('/login');
        }
      })
      .finally(() =>
        setTimeout(() => {
          setLoadingState(false);
        }, 500)
      );
  }, [router]);

  return (
    <>
      {isLoading && (
        <div className='flex-center absolute left-0 top-0 z-50 h-screen w-screen bg-background'>
          <Spinner size='lg' color='success' labelColor='success' />
        </div>
      )}
      {pathname !== '/login' && (
        <aside className='h-full w-[20rem] border bg-background'>
          <LeftBar navLinks={navLinks} />
        </aside>
      )}

      <main className='flex h-full w-full flex-col'>
        {pathname !== '/login' && <TopBar />}
        {children}
      </main>
    </>
  );
};

export default RootTemplate;
