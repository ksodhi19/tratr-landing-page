// tratr site config — the ONLY file you edit to wire things up.
// The anon key is designed to be public; Row-Level Security (see supabase_setup.sql)
// is what stops anyone from reading leads with it (anon = insert only).
window.TRATR_CFG = {
  supabaseUrl: "https://gfrlfymvwybunkjvqpou.supabase.co",   // Supabase → Project Settings → API → Project URL
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcmxmeW12d3lidW5ranZxcG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTI4MzMsImV4cCI6MjEwNTA2ODgzM30.cGx_p6ByT5PROwpTO-kCYmPYdhEmXHYXY3fFYnY8v4Y",   // anon public — safe to ship; RLS is the guard
  leadsTable: "tratr_leads",
  videoSrc: "media/tratr_bench_hud_20260916.mp4",  // the web cut (re-encoded, see media/README.md)
  posterSrc: "media/tratr_bench_hud_20260916_poster.png"
};
