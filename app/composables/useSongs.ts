import type { Song } from '~/types/song'

export interface Artist {
  id: number
  name: string
  avatar: string
  cover: string
  listeners: number
  bio: string
}

export interface Album {
  id: number
  artistId: number
  name: string
  cover: string
  year: string
  tracks: number
  duration: string
}

const artists: Artist[] = [
  { id: 1, name: 'Klimeks', avatar: 'kratos-avatar.jpg', cover: 'kratos-avatar.jpg', listeners: 850000, bio: 'Klimeks is an electronic music producer known for atmospheric soundscapes and cinematic compositions.' },
  { id: 2, name: 'SKELER', avatar: 'photo-1611773951410-3099ecbfd5ea.jpg', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', listeners: 1200000, bio: 'SKELER is a synthwave and retrowave artist crafting dark, neon-soaked electronic music.' },
  { id: 3, name: 'Klimeks 2', avatar: 'photo-1611773951410-3099ecbfd5ea.jpg', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', listeners: 320000, bio: 'Klimeks 2 explores ambient and experimental electronic music territories.' },
]

const albums: Album[] = [
  { id: 1, artistId: 1, name: 'The Album', cover: 'kratos-avatar.jpg', year: '2023', tracks: 8, duration: '42 min' },
  { id: 2, artistId: 1, name: 'Cosmos', cover: 'kratos-avatar.jpg', year: '2019', tracks: 10, duration: '55 min' },
  { id: 3, artistId: 2, name: 'Night Drive', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', year: '2020', tracks: 12, duration: '48 min' },
  { id: 4, artistId: 2, name: 'Synthwave Vol.1', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', year: '2020', tracks: 9, duration: '38 min' },
  { id: 5, artistId: 3, name: 'The Album 2', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', year: '2023', tracks: 7, duration: '35 min' },
]

const songs: Song[] = [
  { id: 1, artistId: 1, albumId: 1, artistName: 'Klimeks', artistAvatar: 'kratos-avatar.jpg', songName: 'Eternally Yours', albumName: 'The Album', date: '15.03.2023', albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg', songSrc: 'Klimeks - Eternally Yours.mp4', hears: 199, likes: 13 },
  { id: 2, artistId: 3, albumId: 5, artistName: 'Klimeks 2', artistAvatar: 'photo-1611773951410-3099ecbfd5ea.jpg', songName: 'Eternally Yours 2', albumName: 'The Album 2', date: '15.03.2023', albumCover: 'kratos-avatar.jpg', songSrc: 'SKELER - NRG.mp4', hears: 200, likes: 14 },
  { id: 3, artistId: 2, albumId: 3, artistName: 'SKELER', artistAvatar: 'kratos-avatar.jpg', songName: 'NRG', albumName: 'Night Drive', date: '02.01.2022', albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg', songSrc: 'SKELER - NRG.mp4', hears: 84200, likes: 3100 },
  { id: 4, artistId: 1, albumId: 1, artistName: 'Klimeks', artistAvatar: 'kratos-avatar.jpg', songName: 'Lost in Time', albumName: 'The Album', date: '20.06.2021', albumCover: 'kratos-avatar.jpg', songSrc: 'Klimeks - Eternally Yours.mp4', hears: 512000, likes: 21400 },
  { id: 5, artistId: 2, albumId: 3, artistName: 'SKELER', artistAvatar: 'photo-1611773951410-3099ecbfd5ea.jpg', songName: 'Afterglow', albumName: 'Night Drive', date: '11.11.2020', albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg', songSrc: 'SKELER - NRG.mp4', hears: 1200000, likes: 88000 },
  { id: 6, artistId: 1, albumId: 2, artistName: 'Klimeks', artistAvatar: 'kratos-avatar.jpg', songName: 'Solar Winds', albumName: 'Cosmos', date: '03.03.2019', albumCover: 'kratos-avatar.jpg', songSrc: 'Klimeks - Eternally Yours.mp4', hears: 3400000, likes: 140000 },
  { id: 7, artistId: 2, albumId: 3, artistName: 'SKELER', artistAvatar: 'photo-1611773951410-3099ecbfd5ea.jpg', songName: 'Midnight Run', albumName: 'Night Drive', date: '05.07.2022', albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg', songSrc: 'SKELER - NRG.mp4', hears: 670000, likes: 31000 },
  { id: 8, artistId: 1, albumId: 1, artistName: 'Klimeks', artistAvatar: 'kratos-avatar.jpg', songName: 'Echo Chamber', albumName: 'The Album', date: '18.09.2021', albumCover: 'kratos-avatar.jpg', songSrc: 'Klimeks - Eternally Yours.mp4', hears: 420000, likes: 18500 },
  { id: 9, artistId: 2, albumId: 4, artistName: 'SKELER', artistAvatar: 'photo-1611773951410-3099ecbfd5ea.jpg', songName: 'Neon Dreams', albumName: 'Synthwave Vol.1', date: '22.12.2020', albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg', songSrc: 'SKELER - NRG.mp4', hears: 950000, likes: 44000 },
  { id: 10, artistId: 1, albumId: 2, artistName: 'Klimeks', artistAvatar: 'kratos-avatar.jpg', songName: 'Stardust', albumName: 'Cosmos', date: '11.01.2020', albumCover: 'kratos-avatar.jpg', songSrc: 'Klimeks - Eternally Yours.mp4', hears: 2100000, likes: 97000 },
  { id: 11, artistId: 1, albumId: 2, artistName: 'Klimeks', artistAvatar: 'kratos-avatar.jpg', songName: 'Stardust', albumName: 'Cosmos', date: '11.01.2020', albumCover: 'kratos-avatar.jpg', songSrc: 'Klimeks - Eternally Yours.mp4', hears: 2100000, likes: 97000 },
]

export interface RadioStation {
  id: number
  name: string
  genre: string
  cover: string
  listeners: number
}

const radioStations: RadioStation[] = [
  { id: 1, name: 'Chill FM', genre: 'Chill / Lo-fi', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', listeners: 12400 },
  { id: 2, name: 'Bass Nation', genre: 'Bass / Electronic', cover: 'kratos-avatar.jpg', listeners: 8900 },
  { id: 3, name: 'Retro Vibes', genre: '80s / Synthwave', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', listeners: 5600 },
  { id: 4, name: 'Deep House', genre: 'House / Deep', cover: 'kratos-avatar.jpg', listeners: 21000 },
  { id: 5, name: 'Indie Pulse', genre: 'Indie / Alternative', cover: 'photo-1611773951410-3099ecbfd5ea.jpg', listeners: 7300 },
]

export function useSongs() {
  function getSong(id: number) {
    return songs.find(s => s.id === id) ?? null
  }

  function getAll() {
    return songs
  }

  function getRecommended() {
    return songs.slice(0, 4)
  }

  function getNew() {
    return [...songs].reverse().slice(0, 4)
  }

  function getHits() {
    return [...songs].sort((a, b) => b.hears - a.hears).slice(0, 5)
  }

  function getRadioStations() {
    return radioStations
  }

  function getNext(id: number) {
    const idx = songs.findIndex(s => s.id === id)
    return songs[(idx + 1) % songs.length] ?? null
  }

  function getPrevious(id: number) {
    const idx = songs.findIndex(s => s.id === id)
    return songs[(idx - 1 + songs.length) % songs.length] ?? null
  }

  function getArtist(id: number) {
    return artists.find(a => a.id === id) ?? null
  }

  function getAlbum(id: number) {
    return albums.find(a => a.id === id) ?? null
  }

  function getSongsByArtist(artistId: number) {
    return songs.filter(s => s.artistId === artistId)
  }

  function getSongsByAlbum(albumId: number) {
    return songs.filter(s => s.albumId === albumId)
  }

  function getAlbumsByArtist(artistId: number) {
    return albums.filter(a => a.artistId === artistId)
  }

  return { getSong, getAll, getRecommended, getNew, getHits, getRadioStations, getNext, getPrevious, getArtist, getAlbum, getSongsByArtist, getSongsByAlbum, getAlbumsByArtist }
}
