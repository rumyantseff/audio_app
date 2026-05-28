<template>
  <p class="text-font-secondary text-sm font-medium mt-1 cursor-default">{{ name }}</p>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
