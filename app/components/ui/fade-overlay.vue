<template>
  <div
    :class="[
      'absolute top-0 bottom-0 z-10 pointer-events-none',
      side === 'left'
        ? 'left-0 bg-gradient-to-r from-pentanary dark:from-gray-950 to-transparent'
        : 'right-0 bg-gradient-to-l from-pentanary dark:from-gray-950 to-transparent',
      widthClass,
    ]"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    side: 'left' | 'right'
    widthClass?: string
  }>(),
  { widthClass: 'w-32' }
)
</script>
