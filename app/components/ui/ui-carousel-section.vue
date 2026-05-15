<template>
  <div :class="rootClass">
    <UiSectionHeader :title="title" :see-all-to="seeAllTo" />

    <div class="relative -mr-8">
      <UiFadeOverlay v-if="canScrollLeft" side="left" />
      <i
        v-if="canScrollLeft"
        class="mdi mdi-chevron-left absolute left-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform drop-shadow-lg"
        @click="scrollLeft"
      />

      <UiFadeOverlay v-if="canScrollRight" side="right" />
      <i
        v-if="canScrollRight"
        class="mdi mdi-chevron-right absolute right-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-primary dark:text-tertiary cursor-pointer hover:scale-125 transition-transform drop-shadow-lg"
        @click="scrollRight"
      />

      <div
        ref="track"
        :class="[
          'flex overflow-x-auto scroll-smooth scrollbar-hide pt-4 -mt-4 pl-1 -ml-1',
          gapClass,
          paddingBottomClass,
        ]"
        @scroll="onScroll"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    seeAllTo?: string
    rootClass?: string
    gapClass?: string
    paddingBottomClass?: string
  }>(),
  {
    rootClass: 'mt-10',
    gapClass: 'gap-6',
    paddingBottomClass: 'pb-10',
  }
)

const { track, canScrollLeft, canScrollRight, onScroll, scrollLeft, scrollRight, initObserver } =
  useCarousel()

onMounted(async () => {
  await nextTick()
  initObserver()
})
</script>

<style scoped>
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>
