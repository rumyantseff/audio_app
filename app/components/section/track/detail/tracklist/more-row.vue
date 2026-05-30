<template>
  <div
    class="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer transition-colors text-font-secondary dark:text-gray-400 hover:bg-primary/5 dark:hover:bg-white/5"
    @click="emit('click')"
  >
    <span class="w-5 text-right shrink-0 text-sm">—</span>
    <p class="flex-1 min-w-0 truncate text-sm font-semibold">More</p>
    <i class="mdi mdi-chevron-right text-base shrink-0" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>
