import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function getSkills() {
  const { data, error } = await supabase
    .from("skills")
    .select("*");

  if (error) {
    console.error("Failed to fetch skills:", error.message);
    throw error;
  }

  return data;
}