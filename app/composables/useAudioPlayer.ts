import type { Song } from '~/types/song'

/**
 * Global audio player — single shared <audio> element + playback state.
 * The <audio> element lives in the default layout and is bound via `audioEl`.
 * All pages/components read & control the SAME playback through this composable.
 */

// Client-only element ref (module scope — never serialized to server)
const audioEl = ref<HTMLAudioElement | null>(null)
let attached = false

const BAR_COUNT = 120

export function useAudioPlayer() {
  // Serializable, per-request-safe state
  const currentSong = useState<Song | null>('player-current', () => null)
  const queue = useState<Song[]>('player-queue', () => [])
  const loaded = useState('player-loaded', () => false)
  const playing = useState('player-playing', () => false)
  const isMuted = useState('player-muted', () => false)
  const percentage = useState('player-percentage', () => 0)
  const currentTimeSec = useState('player-current-time', () => 0)
  const totalDuration = useState('player-duration', () => 0)
  const playerVolume = useState('player-volume', () => 0.35)

  const formatTime = (s: number) => {
    if (!Number.isFinite(s) || s < 0) return '0:00'
    const total = Math.floor(s)
    const m = Math.floor(total / 60)
    const sec = total % 60
    return `${m}:${String(sec).padStart(2, '0')}`
  }

  const currentTime = computed(() => formatTime(currentTimeSec.value))
  const duration = computed(() => (totalDuration.value ? formatTime(totalDuration.value) : '0:00'))

  const volumeIcon = computed(() => {
    if (isMuted.value || playerVolume.value === 0) return 'mdi-volume-variant-off'
    if (playerVolume.value <= 0.33) return 'mdi-volume-low'
    if (playerVolume.value <= 0.75) return 'mdi-volume-medium'
    return 'mdi-volume-high'
  })

  // Seeded pseudo-random waveform bars, consistent per current track
  const bars = computed(() => {
    const seed = (currentSong.value?.id ?? 1) * 9301 + 49297
    return Array.from({ length: BAR_COUNT }, (_, i) => {
      const r = Math.abs(Math.sin(seed + i * 127.1 + i * i * 0.3))
      return Math.round(20 + r * 70)
    })
  })

  function isCurrent(songId: number) {
    return currentSong.value?.id === songId
  }

  /** Set the current song (and optionally its queue context) and start playback. */
  function playSong(song: Song, queueList?: Song[]) {
    if (queueList) queue.value = queueList
    currentSong.value = song
    loaded.value = false
    percentage.value = 0
    currentTimeSec.value = 0

    const el = audioEl.value
    if (!el) return
    el.src = `/${song.songSrc}`
    el.load()
    // canplay handler (registered in attach) will auto-play
  }

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

  function setVolume(val: number | string) {
    const v = Number(val)
    playerVolume.value = v
    if (v > 0 && isMuted.value) {
      isMuted.value = false
      if (audioEl.value) audioEl.value.muted = false
    }
  }

  function restart() {
    if (audioEl.value) audioEl.value.currentTime = 0
  }

  function seekToPercent(pct: number) {
    const el = audioEl.value
    if (!el || !loaded.value) return
    percentage.value = Math.max(0, Math.min(100, pct))
    el.currentTime = (el.duration / 100) * percentage.value
  }

  function next() {
    const list = queue.value
    if (!list.length || !currentSong.value) return
    const idx = list.findIndex(s => s.id === currentSong.value!.id)
    const nextSong = list[idx + 1]
    if (nextSong) playSong(nextSong)
  }

  function previous() {
    const list = queue.value
    if (!list.length || !currentSong.value) return
    const idx = list.findIndex(s => s.id === currentSong.value!.id)
    const prevSong = list[idx - 1]
    if (prevSong) playSong(prevSong)
  }

  /** Wire up the shared <audio> element. Call once (from the layout). */
  function attach() {
    const el = audioEl.value
    if (!el || attached) return
    attached = true

    el.volume = playerVolume.value
    el.muted = isMuted.value

    const onCanPlay = () => {
      totalDuration.value = Math.floor(el.duration) || 0
      loaded.value = true
      el.play().catch(() => {})
    }

    el.addEventListener('canplay', onCanPlay)
    el.addEventListener('timeupdate', () => {
      if (!el.duration) return
      percentage.value = (el.currentTime / el.duration) * 100
      currentTimeSec.value = el.currentTime
    })
    el.addEventListener('play', () => { playing.value = true })
    el.addEventListener('pause', () => { playing.value = false })
    el.addEventListener('ended', () => { playing.value = false; next() })

    watch(playerVolume, (val) => { if (audioEl.value) audioEl.value.volume = val })

    // If a src was already set before attach, kick playback
    if (el.readyState >= 3) onCanPlay()
  }

  return {
    audioEl,
    currentSong,
    queue,
    loaded,
    playing,
    isMuted,
    percentage,
    currentTime,
    duration,
    playerVolume,
    volumeIcon,
    bars,
    isCurrent,
    playSong,
    togglePlay,
    mute,
    setVolume,
    restart,
    seekToPercent,
    next,
    previous,
    attach,
  }
}
