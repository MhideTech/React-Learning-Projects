import { createClient } from "@supabase/supabase-js";
// import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tiniiihcwpbgtocmyzcc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbmlpaWhjd3BiZ3RvY215emNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMjA0MTcsImV4cCI6MjA0MTc5NjQxN30.aiZTcRu4fFA7ag0MTADlB78i-KugCVT4zRHnLpQwYPU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
