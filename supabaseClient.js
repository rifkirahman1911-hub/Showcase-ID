// supabaseClient.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.47.8/+esm";

// GANTI HANYA JIKA PERLU (URL project mu sudah kamu berikan)
const SUPABASE_URL = 'https://tfpgnqwfunusckgnumub.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcGducXdmdW51c2NrZ251bXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MTY0MzMsImV4cCI6MjA3OTI5MjQzM30.Z3QXOAxh8bp8q1rVP_aCTW7lrX05s2BuWybcpcq0aSg';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
