<template>
  <p class="text-font-secondary dark:text-gray-400 text-xs font-medium truncate">{{ song.artistName }}</p>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
