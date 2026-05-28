<template>
  <div class="absolute -bottom-3 -right-3 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-app">
    <img :src="src" :alt="alt" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>
