export function useCarousel() {
  const track = ref<HTMLElement | null>(null)
  const canScrollLeft = ref(false)
  const canScrollRight = ref(false)
  let resizeObserver: ResizeObserver | null = null

  function onScroll() {
    if (!track.value) return
    canScrollLeft.value = track.value.scrollLeft > 10
    canScrollRight.value =
      track.value.scrollLeft + track.value.clientWidth < track.value.scrollWidth - 10
  }

  function scrollRight() {
    track.value?.scrollBy({ left: track.value.clientWidth * 0.8, behavior: 'smooth' })
  }

  function scrollLeft() {
    track.value?.scrollBy({ left: -track.value.clientWidth * 0.8, behavior: 'smooth' })
  }

  function initObserver() {
    onScroll()
    if (!track.value) return
    resizeObserver = new ResizeObserver(() => onScroll())
    resizeObserver.observe(track.value)
  }

  onUnmounted(() => resizeObserver?.disconnect())

  return { track, canScrollLeft, canScrollRight, onScroll, scrollLeft, scrollRight, initObserver }
}
