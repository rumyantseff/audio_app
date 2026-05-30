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

  <SectionTrackNotFound v-else-if="!pending" />
</template>

<script setup lang="ts">
const route = useRoute()
const { getSong } = useSupabaseSongs()

const { data: song, pending } = useAsyncData(
  () => `track-${route.params.id}`,
  () => getSong(Number(route.params.id)),
  { watch: [() => route.params.id] },
)

watchEffect(() => {
  if (song.value) {
    useHead({ title: `${song.value.songName} – ${song.value.artistName}` })
  }
})
</script>
