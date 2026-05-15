<template>
  <div class="mt-10">
    <!-- Mobile: column-based carousel -->
    <div class="md:hidden">
      <UiCarouselSection title="Most Popular" root-class="" gap-class="gap-4" padding-bottom-class="pb-6">
        <div
          v-for="(col, ci) in columns"
          :key="ci"
          class="flex-shrink-0 w-[calc(100vw-5rem)] flex flex-col gap-2"
        >
          <PopularTrackItem v-for="song in col" :key="song.id" :song="song" />
        </div>
      </UiCarouselSection>
    </div>

    <!-- Desktop: 2-column grid -->
    <div class="hidden md:block">
      <UiSectionHeader title="Most Popular" />
      <div class="grid grid-cols-2 gap-y-2 gap-x-4 pt-3 -mt-3 pb-6">
        <PopularTrackItem v-for="song in songs" :key="song.id" :song="song" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const COLUMN_SIZE = 5

const { getPopular } = useSupabaseSongs()
const songs = ref<Song[]>([])

const columns = computed(() => {
  const result: Song[][] = []
  for (let i = 0; i < songs.value.length; i += COLUMN_SIZE) {
    result.push(songs.value.slice(i, i + COLUMN_SIZE))
  }
  return result
})

onMounted(async () => {
  songs.value = await getPopular()
})
</script>
