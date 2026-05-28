<template>
  <div class="flex items-center justify-end gap-2">
    <button
      type="button"
      class="w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0"
      :class="muted || volume === 0
        ? 'text-font-secondary/40 dark:text-gray-600'
        : 'text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100'"
      @click="emit('toggle-mute')"
    >
      <i :class="['mdi text-xl', icon]" />
    </button>
    <div class="relative group flex-1">
      <div
        class="pointer-events-none absolute -top-8 -translate-x-1/2 bg-font-primary/80 text-font-tertiary text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        :style="{ left: `${(muted ? 0 : volume) * 100}%` }"
      >
        {{ muted ? 0 : Math.ceil(volume * 100) }}%
      </div>
      <UiRangeSlider
        :model-value="muted ? 0 : volume"
        :min="0"
        :max="1"
        :step="0.01"
        :volume="true"
        @update:model-value="emit('change', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ volume?: number; muted?: boolean; icon?: string }>(),
  { volume: 0.35, muted: false, icon: 'mdi-volume-high' }
)
const emit = defineEmits<{ 'toggle-mute': []; change: [value: number | string] }>()
</script>
