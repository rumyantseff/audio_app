<template>
  <div class="min-h-screen bg-pentanary dark:bg-gray-950 font-sans transition-colors duration-300">
    <SectionHeader />
    <SectionNavigation />
    <main class="pt-28 pb-32">
      <slot />
    </main>

    <SectionPlayerBar />
    <audio ref="audioEl" preload="auto" class="hidden" />
  </div>
</template>

<script setup lang="ts">
const { init } = useColorMode()
const { audioEl, attach } = useAudioPlayer()

onMounted(() => {
  init()
  attach()
})
</script>
