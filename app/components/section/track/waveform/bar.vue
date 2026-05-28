<template>
  <div
    class="flex-1 rounded-sm"
    :style="{ height: `${height}%`, minWidth: '2px' }"
    :class="active
      ? 'bg-primary dark:bg-tertiary opacity-90'
      : 'bg-font-secondary/25 dark:bg-gray-500/30'"
  />
</template>

<script setup lang="ts">
defineProps<{ height: number, active: boolean }>()
</script>
