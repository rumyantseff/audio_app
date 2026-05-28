<template>
  <div class="relative rounded-2xl overflow-hidden px-8 pt-16 pb-8 min-h-[calc(100vh-9rem)] flex flex-col">
    <SectionTrackDetailHeroBg :image="song.artistAvatar" />

    <SharedBackButton to="/" class="absolute top-6 left-8 z-10" />

    <!-- Upper row: cover + info -->
    <div class="relative z-10 flex flex-col md:flex-row gap-10 items-start mb-8">
      <SectionTrackDetailCover :src="song.albumCover" :alt="song.albumName" />

      <SectionTrackDetailInfoPanel>
        <SectionTrackHeroInfo :song="song" />
        <SectionTrackStats :song="song" />
      </SectionTrackDetailInfoPanel>
    </div>

    <!-- Tracklist: other songs from same album -->
    <div class="relative z-10 mb-8">
      <SectionTrackDetailTracklist :songs="albumTracks" :current-song-id="song.id" />
    </div>

    <!-- Lower row: prev | play | next spread across width + waveform below -->
    <div class="relative z-10 mt-auto">
      <SectionTrackDetailPlayerBar
        :playing="playing"
        :loaded="loaded"
        :bars="bars"
        :percentage="percentage"
        :current-time="currentTime"
        :duration="duration"
        @toggle-play="togglePlay"
        @previous="goToPrevious"
        @next="goToNext"
        @seek="seekToPercent"
      />
    </div>

    <audio ref="audioEl" :src="`/${song.songSrc}`" preload="auto" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const props = defineProps<{ song: Song }>()

const { getNext, getPrevious, getSongsByAlbum } = useSupabaseSongs()
const {
  audioEl, loaded, playing, percentage,
  currentTime, duration,
  togglePlay, seekToPercent, attach, detach,
} = useAudioPlayer()

// Waveform bars — seeded pseudo-random for consistency per track
const BAR_COUNT = 120
const bars = computed(() => {
  const seed = (props.song.id ?? 1) * 9301 + 49297
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    const r = Math.abs(Math.sin(seed + i * 127.1 + i * i * 0.3))
    return Math.round(20 + r * 70)
  })
})

const albumTracks = ref<Song[]>([])

async function loadAlbumTracks() {
  albumTracks.value = await getSongsByAlbum(props.song.albumId)
}

watch(() => props.song.albumId, loadAlbumTracks, { immediate: true })

async function goToNext() {
  const next = await getNext(props.song.id)
  if (next) navigateTo(`/track/${next.id}`)
}

async function goToPrevious() {
  const prev = await getPrevious(props.song.id)
  if (prev) navigateTo(`/track/${prev.id}`)
}

onMounted(attach)
onBeforeUnmount(detach)
</script>
