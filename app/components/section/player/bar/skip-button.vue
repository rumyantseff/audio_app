<template>
  <button
    type="button"
    class="w-9 h-9 flex items-center justify-center rounded-full text-font-secondary dark:text-gray-300 hover:text-font-primary dark:hover:text-white transition-colors"
    @click="emit('click')"
  >
    <i :class="['mdi text-2xl', direction === 'next' ? 'mdi-skip-next' : 'mdi-skip-previous']" />
  </button>
</template>

<script setup lang="ts">
defineProps<{ direction: 'next' | 'previous' }>()
const emit = defineEmits<{ click: [] }>()
</script>
