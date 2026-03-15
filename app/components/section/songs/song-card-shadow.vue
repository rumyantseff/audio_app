<template>
  <div class="shadow-layer pointer-events-none">
    <img :src="song.albumCover" :alt="song.songName" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>

<style scoped>
.shadow-layer {
  height: 25px;
  margin: 0 13px;
  overflow: hidden;
  filter: blur(13px) brightness(0.9) saturate(1.5);
  transform: scaleY(-1) translateY(5px);
  border-radius: 50%;
  opacity: 0.5;
}
</style>
