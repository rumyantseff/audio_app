<template>
  <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate">{{ name }}</p>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
