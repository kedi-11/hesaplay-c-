import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    'Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY in the Vite environment.'
  )
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

function normalizeUsersError(error) {
  if (!error) return null

  if (error.code === 'PGRST205') {
    return new Error(
      [
        "Supabase Data API cannot see 'public.users'.",
        'The client URL/key are reaching Supabase successfully, but PostgREST schema cache does not contain that table.',
        'This is a Supabase-side issue, not a frontend query bug.'
      ].join(' ')
    )
  }

  return error
}

async function usersQuery(builder) {
  const { data, error } = await builder
  const normalizedError = normalizeUsersError(error)
  if (normalizedError) throw normalizedError
  return data
}

export async function sbLoginUser(username, password) {
  return (
    (await usersQuery(
      supabase
        .from('users')
        .select('*')
        .ilike('username', username)
        .eq('password', password)
        .maybeSingle()
    )) || null
  )
}

export async function sbGetUserByUsername(username) {
  return (
    (await usersQuery(
      supabase
        .from('users')
        .select('*')
        .ilike('username', username)
        .maybeSingle()
    )) || null
  )
}

export async function sbGetAllUsers() {
  return (
    (await usersQuery(
      supabase.from('users').select('*').order('created_at', { ascending: true })
    )) || []
  )
}

export async function sbCreateUser({ username, password, role, sections, buildings }) {
  return usersQuery(
    supabase
      .from('users')
      .insert([{ username, password, role, sections, buildings }])
      .select()
      .single()
  )
}

export async function sbUpdateUser(id, { password, role, sections, buildings }) {
  return usersQuery(
    supabase
      .from('users')
      .update({ password, role, sections, buildings })
      .eq('id', id)
      .select()
      .single()
  )
}

export async function sbDeleteUser(id) {
  await usersQuery(supabase.from('users').delete().eq('id', id))
  return true
}
