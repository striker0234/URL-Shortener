import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fapcxqvycxpsetrkfarl.supabase.co' // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcGN4cXZ5Y3hwc2V0cmtmYXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMDA5ODcsImV4cCI6MjAzNjg3Njk4N30.0-0hYjvdymLqcemyufq9AzfVqpbAJTwfNZuQamRsAHE'// Ensure SUPABASE_KEY is set in your environment

const supabase = createClient(supabaseUrl, supabaseKey)

export { supabaseUrl }
export default supabase
