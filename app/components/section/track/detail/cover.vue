<template>
  <div class="flex-shrink-0 mx-auto md:mx-0">
    <div
      class="relative w-60 h-60 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
      @click="navigateTo(`/album/${albumId}`)"
    >
      <img :src="src" :alt="alt" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-primary/10 dark:to-primary/30 pointer-events-none" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string, albumId: number }>()
</script>
