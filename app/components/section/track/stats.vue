<template>
  <div class="flex items-center gap-4 mb-6">
    <SectionTrackStatsPlays :count="song.hears" />
    <SectionTrackStatsLikeButton :count="song.likes" :model-value="liked" @update:model-value="toggleLike" />
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const props = defineProps<{ song: Song }>()
const liked = ref(false)

function toggleLike(val: boolean) {
  liked.value = val
  props.song.likes += val ? 1 : -1
}
</script>
