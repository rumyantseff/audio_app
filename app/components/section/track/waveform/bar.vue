<template>
  <div
    class="w-[3px] shrink-0 rounded-full transition-colors duration-150"
    :style="{ height: `${height}%` }"
    :class="active
      ? 'bg-orange-950 dark:bg-orange-50'
      : 'bg-orange-950/25 dark:bg-orange-50/25'"
  />
</template>

<script setup lang="ts">
defineProps<{ height: number, active: boolean }>()
</script>
