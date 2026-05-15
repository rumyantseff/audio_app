<template>
  <div class="text-center mt-6 px-4">
    <p class="text-font-primary text-sm font-bold">{{ song.artistName }}</p>
    <AppTooltip :text="song.albumName">
      <p class="text-font-secondary text-sm font-medium mt-1 cursor-default">{{ song.songName }}</p>
    </AppTooltip>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
