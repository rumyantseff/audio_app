<template>
  <div class="flex items-center gap-2 px-4 mt-2 mb-8">
    <div class="flex-1 min-w-0 cursor-pointer" @click="emit('play')" @mouseup.middle.prevent="openInNewTab">
      <SongCardTitle :song="song" />
      <SongCardArtistName :song="song" />
    </div>
    <SongCardAlbumArt :song="song" />
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
