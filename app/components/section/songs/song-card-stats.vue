<template>
  <div class="flex items-center gap-2">
    <button type="button" class="flex items-center gap-1 text-quanterary text-xs font-medium">
      <i class="mdi mdi-headphones text-base" />
      {{ formatNumber(song.hears) }}
    </button>
    <button type="button" class="flex items-center gap-1 text-quanterary text-xs font-medium" @click="emit('like')">
      <i class="mdi mdi-heart text-base" />
      {{ formatNumber(song.likes) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
const emit = defineEmits<{ like: [] }>()
</script>
