import type { Song } from '~/types/song'

export interface Artist {
  id: number
  name: string
  avatar: string
  cover: string
  listeners: number
  bio: string
  verified: boolean
}

export interface Album {
  id: number
  artist_id: number
  name: string
  cover: string
  year: string
  tracks: number
  duration: string
}

export interface RadioStation {
  id: number
  name: string
  genre: string
  cover: string
  listeners: number
}

function mapSong(row: any): Song {
  return {
    id: row.id,
    artistId: row.artist_id,
    albumId: row.album_id,
    artistName: row.artist_name,
    artistAvatar: row.artist_avatar,
    songName: row.song_name,
    albumName: row.album_name,
    date: row.date,
    albumCover: row.album_cover,
    songSrc: row.song_src,
    hears: row.hears,
    likes: row.likes,
  }
}

export function useSupabaseSongs() {
  const client = useSupabaseClient()

  async function getAll(): Promise<Song[]> {
    const { data } = await client.from('songs').select('*').order('id')
    return (data ?? []).map(mapSong)
  }

  async function getSong(id: number): Promise<Song | null> {
    const { data } = await client.from('songs').select('*').eq('id', id).single()
    return data ? mapSong(data) : null
  }

  async function getRecommended(): Promise<Song[]> {
    const { data } = await client.from('songs').select('*').order('id').limit(4)
    return (data ?? []).map(mapSong)
  }

  async function getNew(): Promise<Song[]> {
    const { data } = await client.from('songs').select('*').order('id', { ascending: false }).limit(4)
    return (data ?? []).map(mapSong)
  }

  async function getHits(): Promise<Song[]> {
    const { data } = await client.from('songs').select('*').order('hears', { ascending: false }).limit(5)
    return (data ?? []).map(mapSong)
  }

  async function getPopular(): Promise<Song[]> {
    const { data } = await client.from('songs').select('*').order('hears', { ascending: false }).limit(10)
    return (data ?? []).map(mapSong)
  }

  async function getSongsByArtist(artistId: number): Promise<Song[]> {
    const { data } = await client.from('songs').select('*').eq('artist_id', artistId).order('hears', { ascending: false })
    return (data ?? []).map(mapSong)
  }

  async function getSongsByAlbum(albumId: number): Promise<Song[]> {
    const { data } = await client.from('songs').select('*').eq('album_id', albumId).order('id')
    return (data ?? []).map(mapSong)
  }

  async function getNext(id: number): Promise<Song | null> {
    const { data } = await client.from('songs').select('*').gt('id', id).order('id').limit(1).single()
    return data ? mapSong(data) : null
  }

  async function getPrevious(id: number): Promise<Song | null> {
    const { data } = await client.from('songs').select('*').lt('id', id).order('id', { ascending: false }).limit(1).single()
    return data ? mapSong(data) : null
  }

  async function getArtist(id: number): Promise<Artist | null> {
    const { data } = await client.from('artists').select('*').eq('id', id).single()
    return data ?? null
  }

  async function getAlbum(id: number): Promise<Album | null> {
    const { data } = await client.from('albums').select('*').eq('id', id).single()
    return data ?? null
  }

  async function getAlbumsByArtist(artistId: number): Promise<Album[]> {
    const { data } = await client.from('albums').select('*').eq('artist_id', artistId)
    return data ?? []
  }

  async function getRadioStations(): Promise<RadioStation[]> {
    const { data } = await client.from('radio_stations').select('*').order('listeners', { ascending: false })
    return data ?? []
  }

  return {
    getAll,
    getSong,
    getRecommended,
    getNew,
    getHits,
    getPopular,
    getSongsByArtist,
    getSongsByAlbum,
    getNext,
    getPrevious,
    getArtist,
    getAlbum,
    getAlbumsByArtist,
    getRadioStations,
  }
}
