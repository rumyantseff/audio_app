<template>
  <div class="mt-8">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-font-primary dark:text-gray-100 font-bold text-xl">New Releases</h2>
      <button type="button" class="text-secondary text-sm font-medium hover:text-primary transition-colors">
        See all <i class="mdi mdi-arrow-right" />
      </button>
    </div>

    <div class="relative -mr-8">
      <!-- Left fade (no pointer events) -->
      <div
        v-if="canScrollLeft"
        class="absolute left-0 top-0 bottom-10 w-48 z-10 pointer-events-none bg-gradient-to-r from-pentanary dark:from-gray-900 via-pentanary/80 dark:via-gray-900/80 to-transparent [mask-image:linear-gradient(to_right,black_60%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)] [mask-composite:intersect]"
      />
      <!-- Left arrow -->
      <i
        v-if="canScrollLeft"
        class="mdi mdi-chevron-left absolute left-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform drop-shadow-lg"
        style="margin-bottom: 2.5rem"
        @click="scrollLeft"
      />

      <!-- Right fade (no pointer events) -->
      <div
        v-if="canScrollRight"
        class="absolute right-0 top-0 bottom-10 w-48 z-10 pointer-events-none bg-gradient-to-l from-pentanary dark:from-gray-900 via-pentanary/80 dark:via-gray-900/80 to-transparent [mask-image:linear-gradient(to_left,black_60%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)] [mask-composite:intersect]"
      />
      <!-- Right arrow -->
      <i
        v-if="canScrollRight"
        class="mdi mdi-chevron-right absolute right-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform drop-shadow-lg"
        style="margin-bottom: 2.5rem"
        @click="scrollRight"
      />

      <!-- Carousel track -->
      <div
        ref="track"
        class="flex overflow-x-auto scroll-smooth pb-10 gap-6 scrollbar-hide"
        @scroll="onScroll"
      >
        <div
          v-for="song in list"
          :key="song.id"
          class="flex-shrink-0 w-[calc((100vw-4rem)/1.5-1.5rem)] sm:w-[calc((100vw-4rem)/2.5-1.5rem)] md:w-[calc((100vw-72px-2rem)/5.5-1.5rem)]"
        >
          <SongCard :song="song" @play="playSong(song)" @like="song.likes++" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const { getAll } = useSupabaseSongs()
const list = ref<Song[]>([])
onMounted(async () => {
  list.value = await getAll()
})

const track = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

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

function playSong(song: Song) {
  song.hears++
  navigateTo(`/track/${song.id}`)
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
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
