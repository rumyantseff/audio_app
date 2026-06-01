<template>
  <div class="flex items-center gap-2 shrink-0">
    <SectionPlayerBarToggleButton icon="mdi-shuffle-variant" :active="shuffle" @click="emit('toggle-shuffle')" />
    <SectionPlayerBarSkipButton direction="previous" @click="emit('previous')" />
    <SectionPlayerBarPlayButton :playing="playing" :loaded="loaded" @toggle="emit('toggle-play')" />
    <SectionPlayerBarSkipButton direction="next" @click="emit('next')" />
    <SectionPlayerBarToggleButton icon="mdi-repeat" :active="repeat" @click="emit('toggle-repeat')" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean, loaded?: boolean, shuffle?: boolean, repeat?: boolean }>(), {
  playing: false, loaded: false, shuffle: false, repeat: false,
})
const emit = defineEmits<{ 'toggle-play': [], next: [], previous: [], 'toggle-shuffle': [], 'toggle-repeat': [] }>()
</script>
