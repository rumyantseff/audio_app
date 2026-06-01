<template>
  <div class="absolute inset-x-0 bottom-0 p-5">
    <!-- Thumbnail on the right, heading + artist on the left -->
    <div class="flex items-center gap-4">
      <div class="flex-1 min-w-0">
        <SharedOverlayHeading :text="song.songName" />
        <SectionSongsCardArtist :name="song.artistName" :artist-id="song.artistId" />
      </div>

      <SectionSongsCardThumbnail :src="song.albumCover" :alt="song.albumName" :album-id="song.albumId" />
    </div>

    <SectionSongsCardStatsRow :hears="song.hears" :likes="song.likes" @like="emit('like')" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
const emit = defineEmits<{ like: [] }>()
</script>
