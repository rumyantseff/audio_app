<template>
  <div
    class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl shadow-app px-4 py-2.5 cursor-pointer group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[rgba(70,123,136,0.25)_0px_20px_40px] will-change-transform"
    @click="navigateTo(`/track/${song.id}`)"
  >
    <!-- Thumbnail -->
    <div class="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
      <img :src="song.albumCover" :alt="song.songName" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 rounded-xl" />
      <SongCardPlayButton size="sm" @play="navigateTo(`/track/${song.id}`)" />
    </div>

    <!-- Info -->
    <div class="flex-1 min-w-0">
      <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate leading-tight">{{ song.songName }}</p>
      <p class="text-font-secondary dark:text-gray-400 text-xs truncate mt-0.5">
        {{ song.artistName }} · <span class="text-font-secondary/50 dark:text-gray-500">{{ song.albumName }}</span>
      </p>
    </div>

    <!-- Play count -->
    <div class="flex items-center gap-1 flex-shrink-0 text-font-secondary dark:text-gray-500 text-xs">
      <i class="mdi mdi-headphones text-sm" />
      <span>{{ formatNumber(song.hears) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'
import type { Song } from '~/types/song'

defineProps<{ song: Song; }>()
</script>
