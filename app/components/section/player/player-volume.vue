<template>
  <div class="flex items-center gap-2 px-4 mt-8">
    <button type="button" :disabled="!loaded" class="w-8 h-8 flex items-center justify-center text-font-primary disabled:opacity-40" @click="emit('toggle-mute')">
      <i :class="['mdi text-xl', isMuted ? 'mdi-volume-mute' : 'mdi-volume-high']" />
    </button>
    <RangeSlider :model-value="playerVolume" :min="0" :max="1" :step="0.01" :volume="true" @update:model-value="emit('volume-change', $event)" />
    <span class="text-font-primary text-xs font-medium w-7 text-right">{{ Math.ceil(playerVolume * 100) }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playerVolume?: number; isMuted?: boolean; loaded?: boolean }>(), { playerVolume: 0.35, isMuted: false, loaded: false })
const emit = defineEmits<{ 'toggle-mute': []; 'volume-change': [value: number] }>()
</script>
