import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Типы для TypeScript (внутри файла)
export type Database = {
  public: {
    Tables: {
      health_entries: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          sleep_hours: number | null;
          energy_level: number | null;
          water_glasses: number | null;
          mood_level: number | null;
          steps_count: number | null;
          wellness_score: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          date: string;
          sleep_hours?: number | null;
          energy_level?: number | null;
          water_glasses?: number | null;
          mood_level?: number | null;
          steps_count?: number | null;
          wellness_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          date?: string;
          sleep_hours?: number | null;
          energy_level?: number | null;
          water_glasses?: number | null;
          mood_level?: number | null;
          steps_count?: number | null;
          wellness_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
