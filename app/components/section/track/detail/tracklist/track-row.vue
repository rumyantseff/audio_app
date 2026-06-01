<template>
  <div
    class="flex items-center gap-4 px-6 py-4 rounded-lg cursor-pointer transition-colors"
    :class="active
      ? 'text-font-primary dark:text-white font-semibold'
      : 'text-font-secondary dark:text-gray-400 hover:bg-primary/5 dark:hover:bg-white/5'"
    @click="emit('click')"
  >
    <span class="w-5 text-right shrink-0 text-sm">{{ index }}</span>
    <p class="flex-1 min-w-0 truncate text-sm">{{ name }}</p>
    <div v-if="active" class="flex items-center gap-3 shrink-0 text-font-secondary dark:text-gray-400">
      <i class="mdi mdi-heart-outline text-base" />
      <i class="mdi mdi-repeat text-base" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: number
  name: string
  active?: boolean
}>()
const emit = defineEmits<{ click: [] }>()
</script>
