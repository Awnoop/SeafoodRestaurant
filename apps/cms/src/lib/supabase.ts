import { createClient } from "@supabase/supabase-js";

// These come from your CMS environment (.env.local in apps/cms/)
const supabaseUrl = process.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
}

// Export a single Supabase client for use throughout your CMS
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
