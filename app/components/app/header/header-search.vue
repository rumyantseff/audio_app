<template>
  <!-- Mobile fullscreen open -->
  <div
    v-if="isOpen && isMobile"
    class="flex items-center w-full border rounded-full border-pentanary bg-white dark:bg-gray-800 shadow-app overflow-hidden"
  >
    <button
      type="button"
      class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-font-primary dark:text-gray-300 hover:text-secondary transition-colors"
      @click="close"
    >
      <i class="mdi mdi-arrow-left text-xl" />
    </button>
    <HeaderSearchInput v-model="query" auto-focus @close="close" />
  </div>

  <template v-else>
    <!-- Desktop: expandable in center -->
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
          @click="toggle"
        >
          <i class="mdi mdi-magnify text-xl" />
        </button>
        <HeaderSearchInput v-if="isOpen" v-model="query" :auto-focus="true" @close="close" />
      </div>
    </div>

    <!-- Mobile: trigger button -->
    <button
      type="button"
      class="mr-4 w-10 h-10 md:hidden flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
      @click="open"
    >
      <i class="mdi mdi-magnify text-xl" />
    </button>
  </template>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const isMobile = ref(false)
const query = ref('')

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

function open() {
  isOpen.value = true
}

function toggle() {
  isOpen.value = !isOpen.value
  if (!isOpen.value) query.value = ''
}

function close() {
  isOpen.value = false
  query.value = ''
}
</script>
