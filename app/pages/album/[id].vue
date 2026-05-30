<template>
  <div v-if="album" class="w-full px-8 py-6">
    <div class="relative rounded-2xl overflow-hidden px-8 pt-16 pb-8 min-h-[calc(100vh-9rem)]">
      <SectionTrackDetailHeroBg :image="album.cover" />

      <SharedBackButton class="absolute top-6 left-8 z-10" />

      <!-- Upper row: left (cover + info) / right (full tracklist) -->
      <div class="relative z-10 flex flex-col md:flex-row gap-10 items-start mb-8">
        <div class="flex flex-col md:flex-row gap-10 items-start flex-1 min-w-0">
          <div class="flex-shrink-0 mx-auto md:mx-0">
            <div class="relative w-60 h-60 rounded-3xl overflow-hidden shadow-2xl">
              <img :src="album.cover" :alt="album.name" class="w-full h-full object-cover" />
              <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-primary/10 dark:to-primary/30 pointer-events-none" />
            </div>
          </div>

          <div class="flex-1 min-w-0">
            <p class="text-xs font-semibold tracking-widest uppercase text-secondary dark:text-tertiary mb-2">Album</p>
            <h1 class="text-font-primary dark:text-gray-100 font-bold text-3xl md:text-4xl leading-tight mb-3">{{ album.name }}</h1>
            <SectionTrackHeroInfoArtistMeta
              v-if="artist"
              :artist-id="artist.id"
              :name="artist.name"
              :avatar="artist.avatar"
              class="mb-3"
            />
            <p class="text-font-secondary dark:text-gray-400 text-sm">
              {{ album.year }} · {{ album.tracks }} tracks · {{ album.duration }}
            </p>
          </div>
        </div>

        <div class="w-full md:w-[28rem] lg:w-[48rem] shrink-0">
          <SectionTrackDetailTracklist
            :songs="tracks"
            :current-song-id="currentSong?.id ?? -1"
            :album-id="album.id"
            :hide-more="true"
            @select="onSelectTrack"
          />
        </div>
      </div>
    </div>
  </div>

  <SectionTrackNotFound v-else-if="!pending" />
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const route = useRoute()
const { getAlbum, getSongsByAlbum, getArtist } = useSupabaseSongs()
const { playSong, currentSong } = useAudioPlayer()

const { data, pending } = useAsyncData(
  () => `album-${route.params.id}`,
  async () => {
    const id = Number(route.params.id)
    const album = await getAlbum(id)
    if (!album) return { album: null, tracks: [] as Song[], artist: null }
    const [tracks, artist] = await Promise.all([
      getSongsByAlbum(id),
      getArtist(album.artist_id),
    ])
    return { album, tracks, artist }
  },
  { watch: [() => route.params.id] },
)

const album = computed(() => data.value?.album ?? null)
const tracks = computed<Song[]>(() => data.value?.tracks ?? [])
const artist = computed(() => data.value?.artist ?? null)

function onSelectTrack(song: Song) {
  playSong(song, tracks.value)
}

watchEffect(() => {
  if (album.value) useHead({ title: `${album.value.name} – Album` })
})
</script>
