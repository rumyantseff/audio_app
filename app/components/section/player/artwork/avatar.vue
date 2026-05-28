<template>
  <div class="w-full h-full rounded-2xl overflow-hidden bg-primary">
    <img :src="src" :alt="alt" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>
