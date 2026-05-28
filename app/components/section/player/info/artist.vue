<template>
  <p class="text-font-primary text-sm font-bold">{{ name }}</p>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
