<template>
  <div class="mb-5">
    <p class="text-xs font-semibold tracking-widest uppercase text-secondary dark:text-tertiary mb-2">
      {{ song.albumName }}
    </p>
    <h1 class="text-font-primary dark:text-gray-100 font-bold text-3xl md:text-4xl leading-tight mb-2">
      {{ song.songName }}
    </h1>
    <div class="flex items-center gap-3 mt-3">
      <SharedArtistMeta :artist-id="song.artistId" :name="song.artistName" :avatar="song.artistAvatar" />
      <span class="text-font-secondary/40 dark:text-gray-600">·</span>
      <span class="text-font-secondary dark:text-gray-400 text-sm">{{ song.date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
