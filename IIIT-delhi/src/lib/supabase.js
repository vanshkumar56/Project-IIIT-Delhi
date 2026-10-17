import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export function createSupabaseClient(getToken) {
  return createClient(supabaseUrl, supabaseKey, {
    accessToken: async () => {
      const token = await getToken();

      if (!token) {
        throw new Error('Clerk Supabase token is unavailable');
      }

      return token;
    },
  });
}