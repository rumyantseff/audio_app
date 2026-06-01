<template>
  <Transition name="pill-fade">
    <span
      v-if="show"
      class="absolute z-10 pointer-events-none"
      :style="positionStyle"
    >
      <!-- <SectionNavigationPillHalo /> -->
      <SectionNavigationPillBar />
    </span>
  </Transition>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean
    positionStyle?: string
  }>(),
  { positionStyle: 'right: -2.25rem; top: 50%; transform: translateY(-50%)' }
)
</script>

<style scoped>
.pill-fade-enter-active, .pill-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.pill-fade-enter-from, .pill-fade-leave-to {
  opacity: 0;
  transform: translateY(-50%) scaleY(0.3);
}
</style>
