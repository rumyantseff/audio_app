<template>
  <div
    class="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer transition-colors"
    :class="active
      ? 'text-font-primary dark:text-white font-semibold'
      : 'text-font-secondary dark:text-gray-400 hover:bg-primary/5 dark:hover:bg-white/5'"
    @click="emit('click')"
  >
    <span class="w-5 text-right shrink-0 text-sm">{{ index }}</span>
    <p class="flex-1 min-w-0 truncate text-sm">{{ name }}</p>
    <template v-if="active">
      <i class="mdi mdi-heart-outline text-base shrink-0" />
      <i class="mdi mdi-repeat text-base shrink-0" />
    </template>
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
