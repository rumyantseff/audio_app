<template>
  <span
    :class="[
      'flex items-center gap-1',
      clickable ? 'cursor-pointer hover:text-quanterary transition-colors' : '',
    ]"
    @click="clickable && emit('click', $event)"
  >
    <i :class="['mdi', icon, iconSize]" />
    <span>{{ formatNumber(value) }}</span>
  </span>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'

withDefaults(
  defineProps<{
    icon: string
    value: number
    clickable?: boolean
    iconSize?: string
  }>(),
  {
    clickable: false,
    iconSize: 'text-sm',
  }
)

const emit = defineEmits<{ click: [Event] }>()
</script>
