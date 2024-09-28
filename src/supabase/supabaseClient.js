
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ouardgrlcfmeehhjgymi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91YXJkZ3JsY2ZtZWVoaGpneW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MTE1MDIsImV4cCI6MjA0MTk4NzUwMn0.KFrc0tEmc_pXyJm_PrkCGjqzpF93PmpzcTwATFfqm6w';

export const supabase = createClient(supabaseUrl, supabaseKey);
        