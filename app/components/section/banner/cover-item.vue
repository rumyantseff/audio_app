<template>
  <div
    class="item"
    :style="wrapperStyle"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="navigateTo(`/track/${songId}`)"
  >
    <SectionBannerCoverItemShadow :hovered="hovered" />

    <SectionBannerCoverItemCard :hovered="hovered">
      <SectionBannerCoverItemImage :src="src" />
      <SectionBannerCoverItemEdge :hovered="hovered" />
      <SectionBannerCoverItemHighlight />
      <SectionBannerCoverItemGloss :hovered="hovered" />
      <SectionBannerCoverItemAo />
    </SectionBannerCoverItemCard>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  index: number
  total: number
  songId: number
  delay: number
}>()

const hovered = ref(false)

const wrapperStyle = computed(() => ({
  zIndex: hovered.value ? 100 : props.index + 1,
  left: `${props.index * 38}px`,
  animationDelay: `${props.delay}ms`,
}))
</script>

<style scoped>
.item {
  position: absolute;
  width: 160px;
  height: 160px;
  cursor: pointer;
  animation: levitate 3.5s ease-in-out infinite;
  transform-style: preserve-3d;
  perspective: 900px;
}

@keyframes levitate {
  0%,100% { transform: translateY(0px);   }
  50%      { transform: translateY(-12px); }
}
</style>
