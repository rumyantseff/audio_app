<template>
  <div class="flex items-center justify-center gap-4 mt-8 px-4">
    <button type="button" class="w-8 h-8 flex items-center justify-center text-font-secondary hover:text-font-primary transition-colors" @click="emit('repeat')">
      <i class="mdi mdi-repeat text-xl" />
    </button>
    <button type="button" class="w-8 h-8 flex items-center justify-center text-font-secondary hover:text-font-primary transition-colors" @click="emit('previous')">
      <i class="mdi mdi-skip-previous-outline text-xl" />
    </button>
    <button type="button" :disabled="!loaded" class="w-14 h-14 flex items-center justify-center rounded-2xl text-quanterary hover:opacity-80 transition-opacity disabled:opacity-40" @click="emit('toggle-play')">
      <i :class="['mdi text-4xl', playing && !paused ? 'mdi-pause' : 'mdi-play-outline']" />
    </button>
    <button type="button" class="w-8 h-8 flex items-center justify-center text-font-secondary hover:text-font-primary transition-colors" @click="emit('next')">
      <i class="mdi mdi-skip-next-outline text-xl" />
    </button>
    <button type="button" class="w-8 h-8 flex items-center justify-center text-font-secondary hover:text-font-primary transition-colors">
      <i class="mdi mdi-shuffle text-xl" />
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean; paused?: boolean; loaded?: boolean }>(), { playing: false, paused: false, loaded: false })
const emit = defineEmits<{ 'toggle-play': []; repeat: []; next: []; previous: [] }>()
</script>
