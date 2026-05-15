<template>
  <div
    class="absolute top-0 right-0 w-1.5 h-full cursor-col-resize hover:bg-secondary/40 transition-colors"
    @mousedown="emit('startResize', $event)"
  />
</template>

<script setup lang="ts">
const emit = defineEmits<{ startResize: [MouseEvent] }>()
</script>
