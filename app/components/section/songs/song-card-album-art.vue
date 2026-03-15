<template>
  <AppTooltip :text="song.albumName">
    <div
      class="w-10 h-10 rounded-lg overflow-hidden bg-secondary shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      @click.stop="navigateTo(`/album/${song.albumId}`)"
    >
      <img :src="song.albumCover" :alt="song.albumName" class="w-full h-full object-cover" />
    </div>
  </AppTooltip>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
