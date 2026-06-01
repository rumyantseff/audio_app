<template>
  <div class="flex items-center gap-1.5 text-font-primary dark:text-gray-400 text-sm">
    <i class="mdi mdi-headphones text-base" />
    <span>{{ formatNumber(count) }}</span>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'
defineProps<{ count: number }>()
</script>
