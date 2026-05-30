<template>
  <div
    class="w-[3px] shrink-0 rounded-full transition-colors duration-150"
    :style="{ height: `${height}%` }"
    :class="active
      ? 'bg-primary dark:bg-tertiary'
      : 'bg-orange-950 dark:bg-gray-500/30'"
  />
</template>

<script setup lang="ts">
defineProps<{ height: number, active: boolean }>()
</script>
