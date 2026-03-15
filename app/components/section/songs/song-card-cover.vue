<template>
  <div class="px-4">
    <div class="relative rounded-xl overflow-hidden h-36 cursor-pointer" @click="emit('play')" @mouseup.middle.prevent="openInNewTab">
      <SongCardImage :song="song" />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 rounded-xl" />
      <SongCardDateBadge :song="song" />
      <SongCardPlayButton @play="emit('play')" />
    </div>
    <SongCardShadow :song="song" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
const props = defineProps<{ song: Song }>()
const emit = defineEmits<{ play: [] }>()
function openInNewTab() {
  window.open(`/track/${props.song.id}`, '_blank')
}
</script>
