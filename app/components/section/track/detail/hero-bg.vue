<template>
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div
      class="absolute inset-0"
      :style="`background: url('${image}') center/cover no-repeat;`"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-pentanary via-pentanary/70 to-pentanary/30 dark:from-gray-900 dark:via-gray-900/70 dark:to-gray-900/30" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string }>()
</script>
