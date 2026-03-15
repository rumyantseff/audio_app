<template>
  <div class="flex items-center gap-2 px-4 py-2">
    <div class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer group/artist" @click.stop="navigateTo(`/artist/${song.artistId}`)">
      <SongCardArtistAvatar :song="song" />
      <p class="text-font-primary dark:text-gray-100 text-sm font-bold truncate group-hover/artist:text-secondary transition-colors">{{ song.artistName }}</p>
    </div>
    <SongCardStats :song="song" @like="emit('like')" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
const emit = defineEmits<{ like: [] }>()
</script>
