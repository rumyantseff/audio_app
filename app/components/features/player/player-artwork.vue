<template>
  <div class="flex justify-center">
    <div class="relative w-48 h-48">
      <div class="w-full h-full rounded-2xl overflow-hidden bg-primary">
        <img :src="song.artistAvatar" :alt="song.artistName" class="w-full h-full object-cover" />
      </div>
      <div class="absolute -bottom-3 -right-3 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-app">
        <img :src="song.albumCover" :alt="song.albumName" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
