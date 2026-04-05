<template>
  <div class="mt-10">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-font-primary dark:text-gray-100 font-bold text-xl">Popular Radio Stations</h2>
      <button type="button" class="text-secondary text-sm font-medium hover:text-primary transition-colors">
        See all <i class="mdi mdi-arrow-right" />
      </button>
    </div>

    <div class="relative -mr-8">
      <!-- Left fade -->
      <div
        v-if="canScrollLeft"
        class="absolute left-0 top-0 bottom-4 w-32 z-10 pointer-events-none bg-gradient-to-r from-pentanary dark:from-gray-950 to-transparent"
      />
      <i
        v-if="canScrollLeft"
        class="mdi mdi-chevron-left absolute left-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform"
        @click="scrollLeft"
      />

      <!-- Right fade -->
      <div
        v-if="canScrollRight"
        class="absolute right-0 top-0 bottom-4 w-32 z-10 pointer-events-none bg-gradient-to-l from-pentanary dark:from-gray-950 to-transparent"
      />
      <i
        v-if="canScrollRight"
        class="mdi mdi-chevron-right absolute right-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform"
        @click="scrollRight"
      />

      <div ref="track" class="flex overflow-x-scroll scroll-smooth gap-6 pb-4 scrollbar-hide" @scroll="onScroll">
        <div v-for="station in stations" :key="station.id" class="flex-shrink-0" style="width: 160px">
          <RadioCard :station="station" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RadioStation } from '~/composables/useSongs'

const { getRadioStations } = useSupabaseSongs()
const stations = ref<RadioStation[]>([])

const track = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

onMounted(async () => {
  stations.value = await getRadioStations()
  await nextTick()
  onScroll()
  if (track.value) {
    new ResizeObserver(() => onScroll()).observe(track.value)
  }
})

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
</script>

<style scoped>
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>
