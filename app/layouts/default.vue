<template>
  <div class="min-h-screen bg-pentanary dark:bg-gray-950 font-sans transition-colors duration-300">
    <AppHeader />
    <AppNavigation />
    <main class="pt-24">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { init } = useColorMode()
onMounted(() => init())
</script>
