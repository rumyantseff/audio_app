<template>
  <div class="flex items-center gap-4">
    <SharedIconButton icon="mdi-repeat" @click="emit('repeat')" />
    <SharedIconButton icon="mdi-skip-previous-outline" size="lg" @click="emit('previous')" />
    <button
      type="button"
      :disabled="!loaded"
      class="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white shadow-app hover:opacity-90 transition-opacity disabled:opacity-40"
      @click="emit('toggle-play')"
    >
      <i :class="['mdi text-3xl', playing ? 'mdi-pause' : 'mdi-play']" />
    </button>
    <SharedIconButton icon="mdi-skip-next-outline" size="lg" @click="emit('next')" />
    <SharedIconButton icon="mdi-shuffle" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean; loaded?: boolean }>(), { playing: false, loaded: false })
const emit = defineEmits<{ 'toggle-play': []; repeat: []; next: []; previous: [] }>()
</script>
