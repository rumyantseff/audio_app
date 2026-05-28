<template>
  <span class="text-font-primary dark:text-gray-100 text-sm font-semibold">{{ name }}</span>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
