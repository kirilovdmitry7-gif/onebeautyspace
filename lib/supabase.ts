import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase"; // Assuming you have a types/supabase.ts for your database types

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
