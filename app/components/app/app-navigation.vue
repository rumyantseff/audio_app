<template>
  <nav
    :class="['fixed left-0 top-0 h-full z-50 flex flex-col bg-pentanary dark:bg-gray-900 transition-transform duration-300', isOpen ? 'translate-x-0' : '-translate-x-full']"
    :style="{ width: sidebarWidth + 'px' }"
  >
    <!-- Top: matches header height and alignment -->
    <div class="h-24 flex items-center px-8 gap-4 shrink-0">
      <button
        type="button"
        class="w-10 h-10 flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
        @click="close()"
      >
        <i class="mdi mdi-close text-xl" />
      </button>
      <img src="/musix_logo.svg" alt="Mbrosia logo" class="w-10 h-10 shrink-0 object-contain" />
      <span class="text-font-primary dark:text-font-tertiary font-semibold text-xl truncate">Mbrosia</span>
    </div>

    <div class="flex flex-col gap-1 px-8">
      <NavItem to="/" icon="mdi-home" label="Home" @click="close()" />
    </div>

    <div class="mt-6 flex flex-col gap-1 px-8">
      <h6 class="text-font-secondary dark:text-gray-500 font-medium text-xs tracking-widest uppercase mb-2">Genres</h6>
      <NavItem to="/shops" icon="mdi-store" label="Styles" @click="close()" />
    </div>

    <!-- Resize handle -->
    <div
      class="absolute top-0 right-0 w-1.5 h-full cursor-col-resize hover:bg-secondary/40 transition-colors"
      @mousedown="startResize"
    />
  </nav>

  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-black/50"
      @click="close()"
    />
  </Transition>
</template>

<script setup lang="ts">
const { isOpen, close } = useSidebar()

const MIN_WIDTH = 240
const sidebarWidth = ref(MIN_WIDTH)

function startResize(e: MouseEvent) {
  e.preventDefault()
  const maxWidth = window.innerWidth / 4

  function onMouseMove(e: MouseEvent) {
    const newWidth = Math.min(Math.max(e.clientX, MIN_WIDTH), maxWidth)
    sidebarWidth.value = newWidth
  }

  function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
