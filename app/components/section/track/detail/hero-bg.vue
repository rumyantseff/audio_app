<template>
  <div
    class="absolute inset-0 z-0 opacity-40 dark:opacity-25 pointer-events-none"
    :style="`background: url('${image}') center/cover no-repeat; filter: blur(60px) saturate(2);`"
  />
</template>

<script setup lang="ts">
defineProps<{ image: string }>()
</script>
