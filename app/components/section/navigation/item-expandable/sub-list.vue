<template>
  <Transition name="expand">
    <ul
      v-if="show"
      class="mt-1 ml-6 relative flex flex-col gap-0.5"
    >
      <span class="absolute left-0 top-0 bottom-3 w-px bg-font-secondary/30 dark:bg-white/15" />
      <slot />
    </ul>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>()
</script>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.25s ease;
  max-height: 500px;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
</style>
