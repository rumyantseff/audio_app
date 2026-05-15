<template>
  <UiCarouselSection
    v-if="albums.length"
    :title="`More by ${artistName}`"
    :see-all-to="`/artist/${artistId}`"
    padding-bottom-class="pb-4"
  >
    <div v-for="album in albums" :key="album.id" class="flex-shrink-0" style="width: 160px">
      <TrackAlbumCard :album="album" />
    </div>
  </UiCarouselSection>
</template>

<script setup lang="ts">
import type { Album } from '~/types/album'

const props = defineProps<{
  artistId: number
  artistName: string
  currentAlbumId: number
}>()

const { getAlbumsByArtist } = useSupabaseSongs()
const albums = ref<Album[]>([])

onMounted(async () => {
  const all = await getAlbumsByArtist(props.artistId)
  albums.value = all.filter(a => a.id !== props.currentAlbumId)
})
</script>
