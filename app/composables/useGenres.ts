import type { Genre } from '~/types/genre'

export function useGenres() {
  const client = useSupabaseClient()

  async function getAll(): Promise<Genre[]> {
    const { data } = await client.from('genres').select('*').order('name')
    return data ?? []
  }

  return { getAll }
}
