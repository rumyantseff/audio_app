<template>
  <button
    type="button"
    class="flex items-center gap-1.5 text-sm transition-colors"
    :class="modelValue ? 'text-quanterary' : 'text-font-secondary dark:text-gray-400 hover:text-quanterary'"
    @click="emit('update:modelValue', !modelValue)"
  >
    <i :class="['mdi text-base', modelValue ? 'mdi-heart' : 'mdi-heart-outline']" />
    <span>{{ formatNumber(displayCount) }}</span>
  </button>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'

const props = defineProps<{
  count: number
  modelValue: boolean
}>()

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

// Display count reflects the toggle optimistically (+1 when liked)
const displayCount = computed(() => props.count)
</script>
