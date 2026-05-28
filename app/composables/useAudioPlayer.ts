/**
 * Audio playback state + controls for a single track.
 * Bind the returned `audioEl` ref to an <audio> element.
 */
export function useAudioPlayer() {
  const audioEl = ref<HTMLAudioElement | null>(null)
  const loaded = ref(false)
  const playing = ref(false)
  const isMuted = ref(false)
  const percentage = ref(0)
  const currentTimeSec = ref(0)
  const totalDuration = ref(0)
  const playerVolume = ref(0.35)

  const formatTime = (s: number) =>
    Number.isFinite(s) ? new Date(s * 1000).toISOString().substring(15, 19) : '00:00'

  const currentTime = computed(() => formatTime(currentTimeSec.value))
  const duration = computed(() => (totalDuration.value ? formatTime(totalDuration.value) : '00:00'))

  const volumeIcon = computed(() => {
    if (isMuted.value || playerVolume.value === 0) return 'mdi-volume-variant-off'
    if (playerVolume.value <= 0.33) return 'mdi-volume-low'
    if (playerVolume.value <= 0.75) return 'mdi-volume-medium'
    return 'mdi-volume-high'
  })

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

  watch(playerVolume, (val) => {
    if (audioEl.value) audioEl.value.volume = val
  })

  function attach() {
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
      currentTimeSec.value = el.currentTime
    })
    el.addEventListener('play', () => { playing.value = true })
    el.addEventListener('pause', () => { playing.value = false })
    el.addEventListener('ended', () => { playing.value = false })

    if (el.readyState >= 3) onCanPlay()
  }

  function detach() {
    const el = audioEl.value
    if (!el) return
    el.pause()
    el.src = ''
    el.load()
  }

  return {
    audioEl,
    loaded,
    playing,
    isMuted,
    percentage,
    currentTime,
    duration,
    playerVolume,
    volumeIcon,
    togglePlay,
    mute,
    setVolume,
    restart,
    seekToPercent,
    attach,
    detach,
  }
}
