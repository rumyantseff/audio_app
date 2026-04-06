<template>
  <div class="mt-10">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-font-primary dark:text-gray-100 font-bold text-xl">Most Popular</h2>
    </div>

    <!-- Mobile: horizontal scroll, each "slide" is a column of 5 -->
    <div class="relative -mr-8 md:hidden">
      <!-- Left fade -->
      <div
        v-if="canScrollLeft"
        class="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-pentanary dark:from-gray-950 to-transparent"
      />
      <i
        v-if="canScrollLeft"
        class="mdi mdi-chevron-left absolute left-1 top-1/2 -translate-y-1/2 z-20 text-3xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform"
        @click="scrollLeft"
      />

      <!-- Right fade -->
      <div
        v-if="canScrollRight"
        class="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-pentanary dark:from-gray-950 to-transparent"
      />
      <i
        v-if="canScrollRight"
        class="mdi mdi-chevron-right absolute right-1 top-1/2 -translate-y-1/2 z-20 text-3xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform"
        @click="scrollRight"
      />

      <div ref="track" class="flex overflow-x-auto scroll-smooth pt-3 -mt-3 pb-6 gap-4 scrollbar-hide" @scroll="onScroll">
        <div
          v-for="(col, ci) in columns"
          :key="ci"
          class="flex-shrink-0 w-[calc(100vw-5rem)] flex flex-col gap-2"
        >
          <PopularTrackItem v-for="song in col" :key="song.id" :song="song" />
        </div>
      </div>
    </div>

    <!-- Desktop: 2-column grid -->
    <div class="hidden md:grid grid-cols-2 gap-y-2 gap-x-4 pt-3 -mt-3 pb-6">
      <PopularTrackItem
        v-for="song in songs"
        :key="song.id"
        :song="song"
      />
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

const track = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

function onScroll() {
  if (!track.value) return
  canScrollLeft.value = track.value.scrollLeft > 10
  canScrollRight.value = track.value.scrollLeft + track.value.clientWidth < track.value.scrollWidth - 10
}

function scrollRight() {
  track.value?.scrollBy({ left: track.value.clientWidth * 0.8, behavior: 'smooth' })
}

function scrollLeft() {
  track.value?.scrollBy({ left: -track.value.clientWidth * 0.8, behavior: 'smooth' })
}

let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  await nextTick()
  onScroll()
  if (track.value) {
    resizeObserver = new ResizeObserver(() => onScroll())
    resizeObserver.observe(track.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})
</script>

<style scoped>
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>
