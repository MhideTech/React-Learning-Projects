import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yxxlczclizqbpkaxexne.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4eGxjemNsaXpxYnBrYXhleG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNDA0MDYsImV4cCI6MjA0NDgxNjQwNn0.UomYrw_ak89B3rlc7CNcEsRqBOF9QiBVaSR698UUueY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
