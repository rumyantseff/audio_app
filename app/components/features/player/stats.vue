<template>
  <div class="flex items-center gap-1 px-4 mt-4">
    <button type="button" class="flex items-center gap-1.5 text-font-primary text-sm font-medium px-3 py-1">
      <i class="mdi mdi-headphones text-base" />
      {{ formatNumber(song.hears) }}
    </button>
    <button type="button" class="flex items-center gap-1.5 text-font-primary text-sm font-medium px-3 py-1" @click="emit('like')">
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
