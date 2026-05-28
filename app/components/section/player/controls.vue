<template>
  <div class="flex items-center justify-center gap-4 mt-8 px-4">
    <SectionPlayerControlsRepeat @click="emit('repeat')" />
    <SectionPlayerControlsSkipPrev @click="emit('previous')" />
    <SectionPlayerControlsPlayPause :playing="playing" :paused="paused" :loaded="loaded" @toggle="emit('toggle-play')" />
    <SectionPlayerControlsSkipNext @click="emit('next')" />
    <SectionPlayerControlsShuffle />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean; paused?: boolean; loaded?: boolean }>(), { playing: false, paused: false, loaded: false })
const emit = defineEmits<{ 'toggle-play': []; repeat: []; next: []; previous: [] }>()
</script>
