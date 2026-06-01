<template>
  <button
    type="button"
    class="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
    :class="active
      ? 'text-primary dark:text-tertiary'
      : 'text-orange-950/40 dark:text-orange-50/40 hover:text-orange-950 dark:hover:text-orange-50'"
    @click="emit('click')"
  >
    <i :class="['mdi text-xl', icon]" />
  </button>
</template>

<script setup lang="ts">
defineProps<{ icon: string, active?: boolean }>()
const emit = defineEmits<{ click: [] }>()
</script>
