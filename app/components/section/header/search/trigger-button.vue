<template>
  <button
    type="button"
    class="mr-4 w-10 h-10 md:hidden flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
    @click="emit('click')"
  >
    <SectionHeaderSearchIcon />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>
