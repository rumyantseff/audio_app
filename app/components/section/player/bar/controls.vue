<template>
  <div class="flex items-center gap-2 shrink-0">
    <SectionPlayerBarSkipButton direction="previous" @click="emit('previous')" />
    <SectionPlayerBarPlayButton :playing="playing" :loaded="loaded" @toggle="emit('toggle-play')" />
    <SectionPlayerBarSkipButton direction="next" @click="emit('next')" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean, loaded?: boolean }>(), { playing: false, loaded: false })
const emit = defineEmits<{ 'toggle-play': [], next: [], previous: [] }>()
</script>
