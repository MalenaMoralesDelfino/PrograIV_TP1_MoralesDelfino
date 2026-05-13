import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://imwedqpuaabogtkpvhsl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DF6OcDe3vMol84s1XKfiqA_1T1hXGzq';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);