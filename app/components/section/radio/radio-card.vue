<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-app py-2 cursor-pointer group transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[rgba(70,123,136,0.25)_0px_20px_40px] will-change-transform">
    <div class="px-4 pt-2">
      <div class="relative overflow-hidden rounded-xl aspect-square">
        <img :src="station.cover" :alt="station.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 rounded-xl" />
        <SongCardPlayButton />
      </div>
    </div>
    <div class="px-4 mt-3 mb-2">
      <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate">{{ station.name }}</p>
      <p class="text-font-secondary dark:text-gray-400 text-xs truncate mt-0.5">{{ station.genre }} · {{ formatNumber(station.listeners) }} listeners</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'
import type { RadioStation } from '~/composables/useSupabaseSongs'

defineProps<{ station: RadioStation }>()
</script>
