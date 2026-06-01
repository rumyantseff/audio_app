<template>
  <div class="flex items-center gap-3 min-w-0 w-56 shrink-0">
    <div class="w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow">
      <img :src="song.albumCover" :alt="song.albumName" class="w-full h-full object-cover" />
    </div>
    <div class="min-w-0">
      <p class="text-sm font-semibold text-font-primary dark:text-white truncate">{{ song.songName }}</p>
      <p class="text-xs text-font-secondary dark:text-gray-400 truncate">{{ song.artistName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
