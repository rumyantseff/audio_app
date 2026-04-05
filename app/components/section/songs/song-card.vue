<template>
  <div 
  class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-app py-2 mt-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[rgba(70,123,136,0.25)_0px_20px_40px] will-change-transform">
    <SongCardHeader 
    :song="song" 
    @like="emit('like')" />
    <SongCardCover 
    :song="song" 
    @play="emit('play')" />
    <SongCardInfo 
    :song="song" 
    @play="emit('play')" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
const emit = defineEmits<{ play: []; like: [] }>()
</script>
