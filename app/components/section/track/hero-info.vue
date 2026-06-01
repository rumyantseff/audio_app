<template>
  <div class="mb-5">
    <SectionTrackHeroInfoAlbum :name="song.albumName" :album-id="song.albumId" />
    <SectionTrackHeroInfoTitle :name="song.songName" />
    <div class="flex items-center gap-3 mt-3">
      <SectionTrackHeroInfoArtistMeta :artist-id="song.artistId" :name="song.artistName" :avatar="song.artistAvatar" />
      <span class="text-font-primary/60 dark:text-gray-600">·</span>
      <SectionTrackHeroInfoDate :value="song.date" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
