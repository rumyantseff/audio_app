<template>
  <div class="flex justify-between mt-1.5 px-1">
    <span class="text-font-secondary dark:text-gray-400 text-xs">{{ currentTime }}</span>
    <span class="text-font-secondary dark:text-gray-400 text-xs">{{ duration }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ currentTime: string, duration: string }>()
</script>
