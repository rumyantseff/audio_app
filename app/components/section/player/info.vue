<template>
  <div class="text-center mt-6 px-4">
    <SectionPlayerInfoArtist :name="song.artistName" />
    <SectionPlayerInfoAlbum :name="song.albumName">
      <SectionPlayerInfoTitle :name="song.songName" />
    </SectionPlayerInfoAlbum>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
