<template>
  <span class="text-font-secondary dark:text-gray-400 text-sm">{{ value }}</span>
</template>

<script setup lang="ts">
defineProps<{ value: string }>()
</script>
