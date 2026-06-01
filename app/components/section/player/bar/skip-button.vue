<template>
  <button
    type="button"
    class="w-9 h-9 flex items-center justify-center rounded-full text-orange-950 dark:text-orange-50 hover:opacity-70 transition-opacity"
    @click="emit('click')"
  >
    <i :class="['mdi text-2xl', direction === 'next' ? 'mdi-skip-next' : 'mdi-skip-previous']" />
  </button>
</template>

<script setup lang="ts">
defineProps<{ direction: 'next' | 'previous' }>()
const emit = defineEmits<{ click: [] }>()
</script>
