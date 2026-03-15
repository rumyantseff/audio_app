<template>
  <div class="w-full max-w-player mx-4">
    <div class="bg-white rounded-2xl shadow-app min-w-player">
      <!-- Close -->
      <div class="flex justify-end px-2 pt-2">
        <button type="button" class="w-9 h-9 flex items-center justify-center text-font-primary hover:text-primary transition-colors" @click="emit('close')">
          <i class="mdi mdi-close text-xl" />
        </button>
      </div>

      <audio :src="song.songSrc" preload="auto" autoplay ref="audioEl" />

      <PlayerArtwork :song="song" />
      <PlayerInfo :song="song" />
      <PlayerStats :song="song" @like="song.likes++" />
      <PlayerSeekBar :percentage="percentage" :current-time="currentTime" :duration="duration" :loaded="loaded" @seek="setPosition" />
      <PlayerControls :playing="playing" :paused="paused" :loaded="loaded" @toggle-play="playing ? pause() : play()" @repeat="repeat" @next="emit('next')" @previous="emit('previous')" />
      <PlayerVolume :player-volume="playerVolume" :is-muted="isMuted" :loaded="loaded" @toggle-mute="mute" @volume-change="playerVolume = $event" />

      <div class="pb-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const props = defineProps<{ song: Song }>()
const emit = defineEmits<{ close: []; goback: []; next: []; previous: [] }>()

const audioEl = ref<HTMLAudioElement | null>(null)

const firstPlay   = ref(true)
const isMuted     = ref(false)
const loaded      = ref(false)
const playing     = ref(false)
const paused      = ref(false)
const percentage  = ref(0)
const currentTime = ref('00:00')
const totalDuration = ref(0)
const playerVolume  = ref(0.35)

const formatTime = (s: number) => new Date(s * 1000).toISOString().substring(15, 19)

const duration = computed(() => audioEl.value ? formatTime(totalDuration.value) : '00:00')

function play() {
  if (playing.value || !audioEl.value) return
  audioEl.value.play().then(() => { playing.value = true })
  paused.value = false
}

function pause() {
  if (!audioEl.value) return
  paused.value = !paused.value
  paused.value ? audioEl.value.pause() : audioEl.value.play()
}

function mute() {
  if (!audioEl.value) return
  isMuted.value = !isMuted.value
  audioEl.value.muted = isMuted.value
  playerVolume.value = isMuted.value ? 0 : 0.2
}

function repeat() {
  if (audioEl.value) audioEl.value.currentTime = 0
}

function setPosition(pct: number) {
  if (!audioEl.value) return
  percentage.value = pct
  audioEl.value.currentTime = (audioEl.value.duration / 100) * pct
}

function handleLoaded() {
  const el = audioEl.value
  if (!el || el.readyState < 2) return
  if (el.duration === Infinity) {
    el.currentTime = 1e101
    el.ontimeupdate = () => {
      el.ontimeupdate = () => {}
      el.currentTime = 0
      totalDuration.value = Math.floor(el.duration)
      loaded.value = true
    }
  } else {
    totalDuration.value = Math.floor(el.duration)
    loaded.value = true
  }
}

function handlePlayingUI() {
  const el = audioEl.value
  if (!el) return
  el.volume = playerVolume.value
  percentage.value = (el.currentTime / el.duration) * 100
  currentTime.value = formatTime(el.currentTime)
  playing.value = true
}

function handlePlayPause(e: Event) {
  const el = audioEl.value
  if (!el) return
  if (e.type === 'play' && firstPlay.value) {
    el.currentTime = 0
    firstPlay.value = false
  }
  if (e.type === 'pause' && !paused.value && !playing.value) {
    currentTime.value = '00:00'
  }
}

function handleEnded() {
  paused.value = false
  playing.value = false
}

onMounted(() => {
  const el = audioEl.value
  if (!el) return
  el.addEventListener('timeupdate', handlePlayingUI)
  el.addEventListener('loadeddata', handleLoaded)
  el.addEventListener('pause', handlePlayPause)
  el.addEventListener('play', handlePlayPause)
  el.addEventListener('ended', handleEnded)
})

onBeforeUnmount(() => {
  const el = audioEl.value
  if (!el) return
  el.removeEventListener('timeupdate', handlePlayingUI)
  el.removeEventListener('loadeddata', handleLoaded)
  el.removeEventListener('pause', handlePlayPause)
  el.removeEventListener('play', handlePlayPause)
  el.removeEventListener('ended', handleEnded)
})
</script>
