<template>
  <button
    type="button"
    class="w-12 h-12 flex items-center justify-center text-orange-950 dark:text-orange-50 transition-colors shrink-0"
    @click="emit('click')"
  >
    <i class="mdi mdi-close text-2xl" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>
