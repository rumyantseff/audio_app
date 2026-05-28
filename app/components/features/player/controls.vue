<template>
  <div class="flex items-center justify-center gap-4 mt-8 px-4">
    <UiIconButton icon="mdi-repeat" size="sm" @click="emit('repeat')" />
    <UiIconButton icon="mdi-skip-previous-outline" size="sm" @click="emit('previous')" />
    <button type="button" :disabled="!loaded" class="w-14 h-14 flex items-center justify-center rounded-2xl text-quanterary hover:opacity-80 transition-opacity disabled:opacity-40" @click="emit('toggle-play')">
      <i :class="['mdi text-4xl', playing && !paused ? 'mdi-pause' : 'mdi-play-outline']" />
    </button>
    <UiIconButton icon="mdi-skip-next-outline" size="sm" @click="emit('next')" />
    <UiIconButton icon="mdi-shuffle" size="sm" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean; paused?: boolean; loaded?: boolean }>(), { playing: false, paused: false, loaded: false })
const emit = defineEmits<{ 'toggle-play': []; repeat: []; next: []; previous: [] }>()
</script>
