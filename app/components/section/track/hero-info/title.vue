<template>
  <h1 class="text-font-primary dark:text-gray-100 font-bold text-3xl md:text-4xl leading-tight mb-2">
    {{ name }}
  </h1>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
