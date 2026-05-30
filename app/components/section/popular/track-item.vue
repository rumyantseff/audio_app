<template>
  <div
    class="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-app pl-1 pr-4 py-1 cursor-pointer group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[rgba(70,123,136,0.25)_0px_20px_40px] will-change-transform"
    @click="navigateTo(`/track/${song.id}`)"
  >
    <SharedTrackThumbnail :src="song.albumCover" :alt="song.songName" with-play @play="navigateTo(`/track/${song.id}`)" />

    <SectionPopularTrackItemInfo :song="song" />

    <SharedStats icon="mdi-headphones" :value="song.hears" class="flex-shrink-0 text-font-secondary dark:text-gray-500 text-xs" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

defineProps<{ song: Song }>()
</script>
