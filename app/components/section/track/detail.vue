<template>
  <div class="relative rounded-2xl overflow-hidden px-8 pt-16 pb-8 flex flex-col md:flex-row gap-10 items-start">
    <SectionTrackDetailHeroBg :image="song.albumCover" />

    <SharedBackButton to="/" class="absolute top-6 left-8 z-10" />

    <SectionTrackDetailCover :src="song.albumCover" :alt="song.albumName" />

    <SectionTrackDetailInfoPanel>
      <SectionTrackHeroInfo :song="song" />
      <SectionTrackStats :song="song" />

      <audio ref="audioEl" :src="`/${song.songSrc}`" preload="auto" />

      <SectionTrackWaveform
        :bars="bars"
        :percentage="percentage"
        :current-time="currentTime"
        :duration="duration"
        @seek="seekToPercent"
      />

      <div class="grid grid-cols-2 items-center mt-4 mb-6">
        <SectionTrackControls
          :playing="playing"
          :loaded="loaded"
          @toggle-play="togglePlay"
          @repeat="restart"
          @previous="goToPrevious"
          @next="goToNext"
        />
        <SectionTrackVolume
          :volume="playerVolume"
          :muted="isMuted"
          :icon="volumeIcon"
          @toggle-mute="mute"
          @change="setVolume"
        />
      </div>
    </SectionTrackDetailInfoPanel>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const props = defineProps<{ song: Song }>()

const { getNext, getPrevious } = useSupabaseSongs()
const {
  audioEl, loaded, playing, isMuted, percentage,
  currentTime, duration, playerVolume, volumeIcon,
  togglePlay, mute, setVolume, restart, seekToPercent, attach, detach,
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
