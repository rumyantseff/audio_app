<template>
  <div v-if="albums.length" class="mt-10">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-font-primary dark:text-gray-100 font-bold text-xl">More by {{ artistName }}</h2>
      <button type="button" class="text-secondary dark:text-tertiary text-xs font-medium border border-secondary/40 dark:border-tertiary/30 rounded px-3 py-1 hover:border-secondary dark:hover:border-tertiary transition-colors" @click="navigateTo(`/artist/${artistId}`)">
        See all
      </button>
    </div>

    <div class="relative -mr-8">
      <!-- Left fade -->
      <div
        v-if="canScrollLeft"
        class="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-pentanary dark:from-gray-950 to-transparent"
      />
      <i
        v-if="canScrollLeft"
        class="mdi mdi-chevron-left absolute left-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform"
        @click="scrollLeft"
      />

      <!-- Right fade -->
      <div
        v-if="canScrollRight"
        class="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-pentanary dark:from-gray-950 to-transparent"
      />
      <i
        v-if="canScrollRight"
        class="mdi mdi-chevron-right absolute right-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform"
        @click="scrollRight"
      />

      <div ref="track" class="flex overflow-x-scroll scroll-smooth gap-6 pb-4 scrollbar-hide" @scroll="onScroll">
        <div
          v-for="album in albums"
          :key="album.id"
          class="flex-shrink-0 flex flex-col cursor-pointer group bg-white dark:bg-gray-800 rounded-2xl shadow-app py-2 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[rgba(70,123,136,0.25)_0px_20px_40px] will-change-transform"
          style="width: 172px"
          @click="navigateTo(`/album/${album.id}`)"
        >
          <div class="px-3">
            <div class="overflow-hidden rounded-xl aspect-square">
              <img :src="album.cover" :alt="album.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <div class="px-3 mt-3 mb-1">
            <p class="text-font-primary dark:text-gray-100 text-sm font-semibold truncate">{{ album.name }}</p>
            <p class="text-font-secondary dark:text-gray-400 text-xs mt-0.5">{{ album.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  artistId: number
  artistName: string
  currentAlbumId: number
}>()

const { getAlbumsByArtist } = useSupabaseSongs()
const albums = ref<any[]>([])

const track = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

onMounted(async () => {
  const all = await getAlbumsByArtist(props.artistId)
  albums.value = all.filter(a => a.id !== props.currentAlbumId)
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
