<template>
  <div v-if="artist" class="w-full">
    <!-- Hero -->
    <div class="relative h-72 md:h-96 w-full overflow-hidden">
      <img :src="artist.cover" :alt="artist.name" class="w-full h-full object-cover object-top" />
      <div class="absolute inset-0 bg-gradient-to-t from-pentanary dark:from-gray-950 via-black/30 to-transparent" />
      <div class="absolute bottom-0 left-0 px-8 pb-8">
        <p class="text-font-secondary dark:text-gray-400 text-sm mb-1">{{ formatNumber(artist.listeners) }} monthly listeners</p>
        <h1 class="text-font-primary dark:text-white text-4xl md:text-6xl font-bold">{{ artist.name }}</h1>
      </div>
      <button
        type="button"
        class="absolute top-6 left-8 z-10 flex items-center gap-2 text-font-primary dark:text-gray-300 hover:text-secondary transition-colors"
        @click="navigateTo(-1 as any)"
      >
        <i class="mdi mdi-arrow-left text-xl" />
      </button>
    </div>

    <div class="px-8 py-6">
      <!-- Bio -->
      <p v-if="artist.bio" class="text-font-secondary dark:text-gray-400 text-sm max-w-2xl mb-8">{{ artist.bio }}</p>

      <!-- Top Tracks -->
      <h2 class="text-font-primary dark:text-white font-bold text-xl mb-4">Top Tracks</h2>
      <div class="flex flex-col gap-1 mb-10">
        <div
          v-for="(song, i) in topTracks"
          :key="song.id"
          class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 cursor-pointer transition-colors group"
          @click="navigateTo(`/track/${song.id}`)"
        >
          <span class="text-font-secondary dark:text-gray-500 text-sm w-5 text-right shrink-0">{{ i + 1 }}</span>
          <div class="w-10 h-10 rounded-lg overflow-hidden shrink-0">
            <img :src="song.albumCover" :alt="song.songName" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate">{{ song.songName }}</p>
            <p class="text-font-secondary dark:text-gray-400 text-xs truncate">{{ song.albumName }}</p>
          </div>
          <span class="text-font-secondary dark:text-gray-400 text-xs shrink-0">{{ formatNumber(song.hears) }}</span>
        </div>
      </div>

      <!-- Albums -->
      <h2 class="text-font-primary dark:text-white font-bold text-xl mb-4">Albums</h2>
      <div class="flex flex-wrap gap-4">
        <div
          v-for="album in artistAlbums"
          :key="album.id"
          class="flex flex-col gap-2 cursor-pointer group"
          @click="navigateTo(`/album/${album.id}`)"
        >
          <div class="w-36 h-36 rounded-2xl overflow-hidden shadow-app">
            <img :src="album.cover" :alt="album.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate w-36">{{ album.name }}</p>
          <p class="text-font-secondary dark:text-gray-400 text-xs">{{ album.year }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="w-full px-8 py-6">
    <p class="text-font-secondary">Artist not found.</p>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'

const route = useRoute()
const { getArtist, getSongsByArtist, getAlbumsByArtist } = useSongs()

const artist = computed(() => getArtist(Number(route.params.id)))
const topTracks = computed(() => getSongsByArtist(Number(route.params.id)).sort((a, b) => b.hears - a.hears))
const artistAlbums = computed(() => getAlbumsByArtist(Number(route.params.id)))
</script>
