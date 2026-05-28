<template>
  <div
    class="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-lg ring-2 ring-white/30 cursor-pointer hover:ring-tertiary transition-all"
    @click.stop="navigateTo(`/album/${albumId}`)"
  >
    <img :src="src" :alt="alt" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string, albumId: number }>()
</script>
