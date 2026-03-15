<template>
  <p class="text-font-primary dark:text-gray-100 text-sm font-bold truncate">{{ song.songName }}</p>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
