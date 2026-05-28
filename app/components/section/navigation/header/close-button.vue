<template>
  <button
    type="button"
    class="w-10 h-10 flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
    @click="emit('click')"
  >
    <i class="mdi mdi-close text-xl" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>
