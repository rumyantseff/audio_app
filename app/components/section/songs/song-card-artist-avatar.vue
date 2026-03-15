<template>
  <div class="w-10 h-10 rounded-full overflow-hidden bg-primary shrink-0">
    <img :src="song.artistAvatar" :alt="song.artistName" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
