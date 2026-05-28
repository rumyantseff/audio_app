<template>
  <div class="flex justify-center">
    <div class="relative w-48 h-48">
      <SectionPlayerArtworkAvatar :src="song.artistAvatar" :alt="song.artistName" />
      <SectionPlayerArtworkAlbumCover :src="song.albumCover" :alt="song.albumName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
