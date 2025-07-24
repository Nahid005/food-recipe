import { createClient } from "@supabase/supabase-js";

export const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseApiKey);

export default supabase;