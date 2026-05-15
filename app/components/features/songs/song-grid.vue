<template>
  <UiCarouselSection title="New Releases" root-class="mt-8">
    <div
      v-for="song in list"
      :key="song.id"
      class="flex-shrink-0 w-[calc((100vw-4rem)/1.5-1.5rem)] sm:w-[calc((100vw-4rem)/2.5-1.5rem)] md:w-[calc((100vw-72px-2rem)/5.5-1.5rem)]"
    >
      <SongCard :song="song" @play="playSong(song)" @like="song.likes++" />
    </div>
  </UiCarouselSection>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const { getAll } = useSupabaseSongs()
const list = ref<Song[]>([])

onMounted(async () => {
  list.value = await getAll()
})

function playSong(song: Song) {
  song.hears++
  navigateTo(`/track/${song.id}`)
}
</script>
