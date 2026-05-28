<template>
  <div v-if="songs.length" class="md:columns-2 gap-x-12">
    <SectionTrackDetailTracklistTrackRow
      v-for="(s, i) in songs"
      :key="s.id"
      :index="i + 1"
      :name="s.songName"
      :active="s.id === currentSongId"
      class="break-inside-avoid"
      @click="navigateTo(`/track/${s.id}`)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

defineProps<{
  songs: Song[]
  currentSongId: number
}>()
</script>
