<template>
  <header class="fixed top-0 left-0 right-0 z-40 h-24 flex items-center bg-pentanary dark:bg-gray-900 px-8 rounded-b-xl transition-colors duration-300">
    <button
      type="button"
      class="w-10 h-10 flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
      @click="sidebar.toggle()"
    >
      <i class="mdi mdi-menu text-xl" />
    </button>
    <img src="/musix_logo.svg" alt="Mbrosia logo" class="w-10 h-10 ml-4 shrink-0 object-contain" />
    <div class="flex-1" />

    <div class="absolute left-1/2 -translate-x-1/2 flex items-center">
      <div
        class="flex items-center overflow-hidden border rounded-full transition-all duration-300 ease-in-out"
        :class="[
          isOpen
            ? 'w-72 border-secondary bg-white dark:bg-gray-800 shadow-app'
            : 'w-10 border-font-secondary/30 bg-transparent',
        ]"
      >
        <button
          type="button"
          class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-font-primary dark:text-gray-300 hover:text-secondary transition-colors"
          @click="toggleSearch"
        >
          <i class="mdi mdi-magnify text-xl" />
        </button>
        <input
          v-if="isOpen"
          ref="inputEl"
          v-model="query"
          type="text"
          placeholder="Search..."
          class="flex-1 h-10 pr-4 bg-transparent text-sm text-font-primary dark:text-gray-100 placeholder-font-secondary dark:placeholder-gray-500 outline-none"
          @keydown.escape="closeSearch"
        />
      </div>
    </div>

    <div class="flex-1" />

    <!-- Dark mode toggle -->
    <button
      type="button"
      class="mr-4 w-10 h-10 flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors"
      @click="toggle"
    >
      <i :class="['mdi text-xl', isDark ? 'mdi-weather-sunny' : 'mdi-weather-night']" />
    </button>

    <HeaderUserMenu />
  </header>
</template>

<script setup lang="ts">
const { isDark, toggle } = useColorMode()
const sidebar = useSidebar()

const isOpen = ref(false)
const query = ref('')
const inputEl = ref<HTMLInputElement | null>(null)

function toggleSearch() {
  if (isOpen.value) {
    closeSearch()
  } else {
    isOpen.value = true
    nextTick(() => inputEl.value?.focus())
  }
}

function closeSearch() {
  isOpen.value = false
  query.value = ''
}
</script>
