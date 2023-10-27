import { cookies } from 'next/headers';

import { createClient } from '@/utils/supabase/server';
import { Button } from '@/components/ui/button';

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div>
      <form action='/auth/sign-out' method='post'>
        <Button>Logout</Button>
      </form>
    </div>
  );
}
