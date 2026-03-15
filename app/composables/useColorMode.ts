const isDark = ref(false)

export function useColorMode() {
  function init() {
    const saved = localStorage.getItem('color-mode')
    isDark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    applyClass()
  }

  function toggle() {
    isDark.value = !isDark.value
    localStorage.setItem('color-mode', isDark.value ? 'dark' : 'light')
    applyClass()
  }

  function applyClass() {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  return { isDark, init, toggle }
}
