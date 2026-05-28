<template>
  <div
    class="absolute top-0 bottom-0 w-0.5 bg-primary dark:bg-tertiary pointer-events-none"
    :style="{ left: `${percentage}%` }"
  />
</template>

<script setup lang="ts">
defineProps<{ percentage: number }>()
</script>
