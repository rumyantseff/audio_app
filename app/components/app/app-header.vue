<template>
  <header class="fixed top-0 left-0 right-0 z-40 h-24 flex items-center bg-pentanary dark:bg-gray-900 px-8 rounded-b-xl transition-colors duration-300">

    <!-- Mobile/tablet search open: full width -->
    <template v-if="isOpen && isMobile">
      <div class="flex items-center w-full border rounded-full border-pentanary bg-white dark:bg-gray-800 shadow-app overflow-hidden">
        <button
          type="button"
          class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-font-primary dark:text-gray-300 hover:text-secondary transition-colors"
          @click="closeSearch"
        >
          <i class="mdi mdi-arrow-left text-xl" />
        </button>
        <input
          ref="inputEl"
          v-model="query"
          type="text"
          placeholder="Search..."
          class="flex-1 h-10 pr-4 bg-transparent text-sm text-font-primary dark:text-gray-100 placeholder-font-secondary dark:placeholder-gray-500 outline-none"
          @keydown.escape="closeSearch"
        />
      </div>
    </template>

    <!-- Normal state -->
    <template v-else>
      <button
        type="button"
        class="w-10 h-10 flex items-center justify-center rounded-full text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
        @click="sidebar.toggle()"
      >
        <i class="mdi mdi-menu text-xl" />
      </button>
      <img src="/musix_logo.svg" alt="Mbrosia logo" class="w-10 h-10 ml-4 shrink-0 object-contain" />
      <div class="flex-1" />

      <!-- Desktop: expandable search in center -->
      <div class="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center">
        <div
          class="flex items-center overflow-hidden border rounded-full transition-all duration-300 ease-in-out"
          :class="[
            isOpen
              ? 'w-[80vh] border-pentanary bg-white dark:bg-gray-800 shadow-app'
              : 'w-10 border-font-pentanary/30 bg-transparent',
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

      <!-- Mobile: just the search icon -->
      <button
        type="button"
        class="mr-4 w-10 h-10 md:hidden flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
        @click="openSearch"
      >
        <i class="mdi mdi-magnify text-xl" />
      </button>

      <div class="flex-1 hidden md:block" />
      <HeaderUserMenu />
    </template>

  </header>
</template>

<script setup lang="ts">
const sidebar = useSidebar()

const isOpen = ref(false)
const isMobile = ref(false)
const query = ref('')
const inputEl = ref<HTMLInputElement | null>(null)

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

function openSearch() {
  isOpen.value = true
  nextTick(() => inputEl.value?.focus())
}

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
