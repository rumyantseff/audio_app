<template>
  <div v-if="album" class="w-full px-8 py-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row gap-8 items-end mb-10">
      <button
        type="button"
        class="self-start flex items-center gap-2 text-font-primary dark:text-gray-300 hover:text-secondary transition-colors mb-2"
        @click="navigateTo(-1 as any)"
      >
        <i class="mdi mdi-arrow-left text-xl" />
      </button>
      <div class="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl shrink-0">
        <img :src="album.cover" :alt="album.name" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-font-secondary dark:text-gray-400 text-xs uppercase tracking-widest font-semibold">Album</p>
        <h1 class="text-font-primary dark:text-white text-3xl md:text-5xl font-bold">{{ album.name }}</h1>
        <div
          class="flex items-center gap-2 cursor-pointer group w-fit"
          @click="navigateTo(`/artist/${album.artistId}`)"
        >
          <div v-if="artist" class="w-7 h-7 rounded-full overflow-hidden">
            <img :src="artist.avatar" :alt="artist.name" class="w-full h-full object-cover" />
          </div>
          <p class="text-font-primary dark:text-gray-200 text-sm font-semibold group-hover:text-secondary transition-colors">{{ artist?.name }}</p>
        </div>
        <p class="text-font-secondary dark:text-gray-400 text-sm">{{ album.year }} · {{ album.tracks }} tracks · {{ album.duration }}</p>
      </div>
    </div>

    <!-- Tracklist -->
    <div class="flex flex-col gap-1">
      <div
        v-for="(song, i) in tracks"
        :key="song.id"
        class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 cursor-pointer transition-colors"
        @click="navigateTo(`/track/${song.id}`)"
      >
        <span class="text-font-secondary dark:text-gray-500 text-sm w-5 text-right shrink-0">{{ i + 1 }}</span>
        <div class="flex-1 min-w-0">
          <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate">{{ song.songName }}</p>
          <p class="text-font-secondary dark:text-gray-400 text-xs">{{ formatNumber(song.hears) }} plays</p>
        </div>
        <span class="flex items-center gap-1 text-font-secondary dark:text-gray-400 text-xs shrink-0">
          <i class="mdi mdi-heart-outline text-sm" />
          {{ formatNumber(song.likes) }}
        </span>
      </div>
    </div>
  </div>

  <div v-else class="w-full px-8 py-6">
    <p class="text-font-secondary">Album not found.</p>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'

const route = useRoute()
const { getAlbum, getSongsByAlbum, getArtist } = useSongs()

const album = computed(() => getAlbum(Number(route.params.id)))
const tracks = computed(() => getSongsByAlbum(Number(route.params.id)))
const artist = computed(() => album.value ? getArtist(album.value.artistId) : null)
</script>
