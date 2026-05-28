<template>
  <div class="absolute inset-x-0 bottom-0 p-5 flex items-end gap-4">
    <div class="flex-1 min-w-0">
      <SharedOverlayHeading :text="song.songName" />
      <SectionSongsCardArtist :name="song.artistName" :artist-id="song.artistId" />
      <SectionSongsCardStatsRow :hears="song.hears" :likes="song.likes" @like="emit('like')" />
    </div>

    <SectionSongsCardThumbnail :src="song.albumCover" :alt="song.albumName" :album-id="song.albumId" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
const emit = defineEmits<{ like: [] }>()
</script>
