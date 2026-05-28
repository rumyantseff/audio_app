<template>
  <button type="button" :disabled="!loaded" class="w-14 h-14 flex items-center justify-center rounded-2xl text-quanterary hover:opacity-80 transition-opacity disabled:opacity-40" @click="emit('toggle')">
    <i :class="['mdi text-4xl', playing && !paused ? 'mdi-pause' : 'mdi-play-outline']" />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean; paused?: boolean; loaded?: boolean }>(), { playing: false, paused: false, loaded: false })
const emit = defineEmits<{ toggle: [] }>()
</script>
