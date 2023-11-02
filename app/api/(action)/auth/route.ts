import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export const GET = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return new Response(JSON.stringify(session), { status: 200 });
  } catch (error) {
    throw new Error('Authentication require to access!');
  }
};
