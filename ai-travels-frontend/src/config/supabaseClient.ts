import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fifkpxsjkukmdslvwqdd.supabase.co;";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZmtweHNqa3VrbWRzbHZ3cWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NjE3MjYsImV4cCI6MjA3MTUzNzcyNn0.s8nP6qNh26WIIkelPcEeTwnYJZoHXBmZk7qehODbeHQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
