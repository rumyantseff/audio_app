<template>
  <UiCard aspect="10/16" @click="navigateTo(`/album/${album.id}`)">
    <img
      :src="album.cover"
      :alt="album.name"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />

    <UiBadge class="absolute top-4 right-4">
      <i class="mdi mdi-album text-tertiary text-sm" />
      <span>{{ album.year }}</span>
    </UiBadge>

    <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

    <div class="absolute inset-x-0 bottom-0 p-5">
      <h3 class="text-white text-xl font-bold truncate leading-tight">{{ album.name }}</h3>
      <p v-if="album.tracks" class="text-white/80 text-sm truncate mt-1">{{ album.tracks }} tracks</p>
    </div>

    <UiPlayButton />
  </UiCard>
</template>

<script setup lang="ts">
import type { Album } from '~/types/album'

defineProps<{ album: Album }>()
</script>
