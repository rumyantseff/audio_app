<template>
  <img :src="song.albumCover" :alt="song.songName" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
