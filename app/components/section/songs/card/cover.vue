<template>
  <img
    :src="src"
    :alt="alt"
    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
  />
  <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>
