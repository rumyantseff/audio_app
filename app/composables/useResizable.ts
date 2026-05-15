export function useResizable(min = 240, maxFraction = 4) {
  const width = ref(min)

  function startResize(e: MouseEvent) {
    e.preventDefault()
    const maxWidth = window.innerWidth / maxFraction

    function onMouseMove(ev: MouseEvent) {
      width.value = Math.min(Math.max(ev.clientX, min), maxWidth)
    }

    function onMouseUp() {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return { width, startResize }
}
