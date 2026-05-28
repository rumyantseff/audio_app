<template>
  <template v-if="song">
    <div class="w-full px-8 py-6">
      <SectionTrackDetail :song="song" />
    </div>
    <div class="w-full px-8">
      <SectionTrackAlbums
        :artist-id="song.artistId"
        :artist-name="song.artistName"
        :current-album-id="song.albumId"
      />
    </div>
  </template>

  <SectionTrackNotFound v-else />
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const route = useRoute()
const { getSong } = useSupabaseSongs()
const song = ref<Song | null>(null)

onMounted(async () => {
  song.value = await getSong(Number(route.params.id))
  if (song.value) {
    useHead({ title: `${song.value.songName} – ${song.value.artistName}` })
  }
})
</script>
