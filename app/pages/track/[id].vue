<template>
  <div v-if="song" class="w-full px-8 py-6">

      <!-- Main layout with blur background -->
      <div class="relative rounded-2xl overflow-hidden px-8 pt-16 pb-8 flex flex-col md:flex-row gap-10 items-start">
        <!-- Hero background blur -->
        <div
          class="absolute inset-0 z-0 opacity-40 dark:opacity-25 pointer-events-none"
          :style="`background: url('${song.albumCover}') center/cover no-repeat; filter: blur(60px) saturate(2);`"
        />

        <!-- Back button -->
        <button
          type="button"
          class="absolute top-6 left-8 z-10 flex items-center gap-2 text-font-secondary hover:text-font-primary dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-sm font-medium"
          @click="navigateTo('/')"
        >
          <i class="mdi mdi-arrow-left text-lg" />
          Back
        </button>

        <!-- Cover art -->
        <div class="flex-shrink-0 mx-auto md:mx-0">
          <div class="w-60 h-60 rounded-3xl overflow-hidden shadow-2xl">
            <img :src="song.albumCover" :alt="song.albumName" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Info + player -->
        <div class="flex-1 min-w-0">

          <!-- Song info -->
          <div class="mb-5">
            <p class="text-xs font-semibold tracking-widest uppercase text-secondary dark:text-tertiary mb-2">
              {{ song.albumName }}
            </p>
            <h1 class="text-font-primary dark:text-gray-100 font-bold text-3xl md:text-4xl leading-tight mb-2">
              {{ song.songName }}
            </h1>
            <div class="flex items-center gap-3 mt-3">
              <img :src="`/${song.artistAvatar}`" :alt="song.artistName" class="w-8 h-8 rounded-full object-cover" />
              <span class="text-font-secondary dark:text-gray-400 text-sm font-medium">{{ song.artistName }}</span>
              <span class="text-font-secondary/40 dark:text-gray-600">·</span>
              <span class="text-font-secondary dark:text-gray-400 text-sm">{{ song.date }}</span>
            </div>
          </div>

          <!-- Stats -->
          <div class="flex items-center gap-4 mb-6">
            <div class="flex items-center gap-1.5 text-font-secondary dark:text-gray-400 text-sm">
              <i class="mdi mdi-headphones text-base" />
              <span>{{ formatNumber(song.hears) }}</span>
            </div>
            <button
              type="button"
              class="flex items-center gap-1.5 text-sm transition-colors"
              :class="liked ? 'text-quanterary' : 'text-font-secondary dark:text-gray-400 hover:text-quanterary'"
              @click="toggleLike"
            >
              <i :class="['mdi text-base', liked ? 'mdi-heart' : 'mdi-heart-outline']" />
              <span>{{ formatNumber(song.likes) }}</span>
            </button>
          </div>

          <!-- Audio element -->
          <audio ref="audioEl" :src="`/${song.songSrc}`" preload="auto" />

          <!-- Waveform seek bar -->
          <div class="mb-2">
            <div
              ref="waveRef"
              class="relative w-full h-16 flex items-end gap-px overflow-hidden rounded-lg px-1 cursor-pointer select-none"
              style="background: rgba(13,74,86,0.08)"
              @click="seekFromWave"
            >
              <div
                v-for="(h, i) in bars"
                :key="i"
                class="flex-1 rounded-sm"
                :style="{ height: `${h}%`, minWidth: '2px' }"
                :class="(i / bars.length * 100) <= percentage
                  ? 'bg-primary dark:bg-tertiary opacity-90'
                  : 'bg-font-secondary/25 dark:bg-gray-500/30'"
              />
              <!-- Playhead -->
              <div
                class="absolute top-0 bottom-0 w-0.5 bg-primary dark:bg-tertiary pointer-events-none"
                :style="{ left: `${percentage}%` }"
              />
            </div>
            <div class="flex justify-between mt-1.5 px-1">
              <span class="text-font-secondary dark:text-gray-400 text-xs">{{ currentTime }}</span>
              <span class="text-font-secondary dark:text-gray-400 text-xs">{{ duration }}</span>
            </div>
          </div>

          <!-- Controls + Volume row -->
          <div class="grid grid-cols-2 items-center mt-4 mb-6">
            <!-- Controls (left) -->
            <div class="flex items-center gap-4">
              <button type="button" class="w-9 h-9 flex items-center justify-center text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100 transition-colors" @click="repeat">
                <i class="mdi mdi-repeat text-xl" />
              </button>
              <button type="button" class="w-9 h-9 flex items-center justify-center text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100 transition-colors" @click="goToPrevious">
                <i class="mdi mdi-skip-previous-outline text-2xl" />
              </button>
              <button
                type="button"
                :disabled="!loaded"
                class="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white shadow-app hover:opacity-90 transition-opacity disabled:opacity-40"
                @click="togglePlay"
              >
                <i :class="['mdi text-3xl', playing ? 'mdi-pause' : 'mdi-play']" />
              </button>
              <button type="button" class="w-9 h-9 flex items-center justify-center text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100 transition-colors" @click="goToNext">
                <i class="mdi mdi-skip-next-outline text-2xl" />
              </button>
              <button type="button" class="w-9 h-9 flex items-center justify-center text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100 transition-colors">
                <i class="mdi mdi-shuffle text-xl" />
              </button>
            </div>

            <!-- Volume (right) -->
            <div class="flex items-center justify-end gap-2">
              <button
                type="button"
                class="w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0"
                :class="isMuted || playerVolume === 0 ? 'text-font-secondary/40 dark:text-gray-600' : 'text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100'"
                @click="mute"
              >
                <i :class="['mdi text-xl', volumeIcon]" />
              </button>
              <div class="relative group flex-1">
                <div
                  class="pointer-events-none absolute -top-8 -translate-x-1/2 bg-font-primary/80 text-font-tertiary text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  :style="{ left: `${(isMuted ? 0 : playerVolume) * 100}%` }"
                >
                  {{ isMuted ? 0 : Math.ceil(playerVolume * 100) }}%
                </div>
                <RangeSlider
                  :model-value="isMuted ? 0 : playerVolume"
                  :min="0"
                  :max="1"
                  :step="0.01"
                  :volume="true"
                  @update:model-value="onVolumeChange"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>

  <!-- More albums -->
  <div v-if="song" class="w-full px-8">
    <TrackAlbums
      :artist-id="song.artistId"
      :artist-name="song.artistName"
      :current-album-id="song.albumId"
    />
  </div>

  <!-- 404 -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <i class="mdi mdi-music-off text-6xl text-font-secondary/30 mb-4 block" />
      <p class="text-font-secondary text-lg">Track not found</p>
      <button type="button" class="mt-4 text-secondary hover:text-primary text-sm transition-colors" @click="navigateTo('/')">
        Back to Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'

const route = useRoute()
const { getSong, getNext, getPrevious } = useSupabaseSongs()

const id = Number(route.params.id)
const song = ref()
const liked = ref(false)

onMounted(async () => {
  song.value = await getSong(id)
  if (song.value) {
    useHead({ title: `${song.value.songName} – ${song.value.artistName}` })
  }
})

// Audio state
const audioEl = ref<HTMLAudioElement | null>(null)
const waveRef = ref<HTMLDivElement | null>(null)
const loaded = ref(false)
const playing = ref(false)
const isMuted = ref(false)
const percentage = ref(0)
const currentTime = ref('00:00')
const totalDuration = ref(0)
const playerVolume = ref(0.35)

// Waveform bars — pseudo-random ale seed-ovaný podľa id aby bol konzistentný
const BAR_COUNT = 120
const bars = computed(() => {
  const seed = (song.value?.id ?? 1) * 9301 + 49297
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    const r = Math.abs(Math.sin(seed + i * 127.1 + i * i * 0.3))
    return Math.round(20 + r * 70)
  })
})

// Volume icon podľa úrovne
const volumeIcon = computed(() => {
  if (isMuted.value || playerVolume.value === 0) return 'mdi-volume-variant-off'
  if (playerVolume.value <= 0.33) return 'mdi-volume-low'
  if (playerVolume.value <= 0.75) return 'mdi-volume-medium'
  return 'mdi-volume-high'
})

const formatTime = (s: number) => new Date(s * 1000).toISOString().substring(15, 19)
const duration = computed(() => totalDuration.value ? formatTime(totalDuration.value) : '00:00')

function togglePlay() {
  const el = audioEl.value
  if (!el || !loaded.value) return
  playing.value ? el.pause() : el.play()
}

function mute() {
  const el = audioEl.value
  if (!el) return
  isMuted.value = !isMuted.value
  el.muted = isMuted.value
}

function onVolumeChange(val: number | string) {
  val = Number(val)
  playerVolume.value = val
  if (val > 0 && isMuted.value) {
    isMuted.value = false
    if (audioEl.value) audioEl.value.muted = false
  }
}

function repeat() {
  if (audioEl.value) audioEl.value.currentTime = 0
}

function seekFromWave(e: MouseEvent) {
  const el = audioEl.value
  const wave = waveRef.value
  if (!el || !wave || !loaded.value) return
  const rect = wave.getBoundingClientRect()
  const pct = (e.clientX - rect.left) / rect.width * 100
  percentage.value = Math.max(0, Math.min(100, pct))
  el.currentTime = (el.duration / 100) * percentage.value
}

watch(playerVolume, (val) => {
  if (audioEl.value) audioEl.value.volume = val
})

function toggleLike() {
  if (!song.value) return
  liked.value = !liked.value
  song.value.likes += liked.value ? 1 : -1
}

async function goToNext() {
  if (!song.value) return
  const next = await getNext(song.value.id)
  if (next) navigateTo(`/track/${next.id}`)
}

async function goToPrevious() {
  if (!song.value) return
  const prev = await getPrevious(song.value.id)
  if (prev) navigateTo(`/track/${prev.id}`)
}

onMounted(() => {
  const el = audioEl.value
  if (!el) return

  el.volume = playerVolume.value

  const onCanPlay = () => {
    totalDuration.value = Math.floor(el.duration) || 0
    loaded.value = true
    el.play().catch(() => {})
  }

  el.addEventListener('canplay', onCanPlay, { once: true })
  el.addEventListener('timeupdate', () => {
    if (!el.duration) return
    percentage.value = (el.currentTime / el.duration) * 100
    currentTime.value = formatTime(el.currentTime)
  })
  el.addEventListener('play', () => { playing.value = true })
  el.addEventListener('pause', () => { playing.value = false })
  el.addEventListener('ended', () => { playing.value = false })

  if (el.readyState >= 3) onCanPlay()
})

onBeforeUnmount(() => {
  const el = audioEl.value
  if (!el) return
  el.pause()
  el.src = ''
  el.load()
})
</script>
