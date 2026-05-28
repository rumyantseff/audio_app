<template>
  <div class="flex-1 min-w-0">
    <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate leading-tight">{{ song.songName }}</p>
    <SectionPopularTrackItemMetadataRow :artist="song.artistName" :album="song.albumName" class="mt-0.5" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
