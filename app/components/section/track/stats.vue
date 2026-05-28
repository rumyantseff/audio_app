<template>
  <div class="flex items-center gap-4 mb-6">
    <div class="flex items-center gap-1.5 text-font-secondary dark:text-gray-400 text-sm">
      <i class="mdi mdi-headphones text-base" />
      <span>{{ formatNumber(song.hears) }}</span>
    </div>
    <SharedLikeButton :count="song.likes" :model-value="liked" @update:model-value="toggleLike" />
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '~/composables/useFormatNumber'
import type { Song } from '~/types/song'

const props = defineProps<{ song: Song }>()
const liked = ref(false)

function toggleLike(val: boolean) {
  liked.value = val
  props.song.likes += val ? 1 : -1
}
</script>
