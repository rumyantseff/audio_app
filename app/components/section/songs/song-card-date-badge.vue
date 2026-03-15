<template>
  <div class="absolute top-2 left-2">
    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-font-tertiary" style="background:rgba(46,56,77,0.75)">
      <i class="mdi mdi-fire text-sm" />
      {{ song.date }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ song: Song }>()
</script>
