<template>
  <p class="text-font-secondary dark:text-gray-400 text-xs truncate">
    {{ artist }}<template v-if="album"> · <span class="text-font-secondary/50 dark:text-gray-500">{{ album }}</span></template>
  </p>
</template>

<script setup lang="ts">
defineProps<{ artist: string; album?: string }>()
</script>
