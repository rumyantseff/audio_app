<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-4 px-2">
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
    </div>

    <SectionTrackWaveform
      :bars="bars"
      :percentage="percentage"
      :current-time="currentTime"
      :duration="duration"
      @seek="emit('seek', $event)"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  playing?: boolean
  loaded?: boolean
  bars: number[]
  percentage: number
  currentTime: string
  duration: string
}>(), { playing: false, loaded: false })

const emit = defineEmits<{
  'toggle-play': []
  next: []
  previous: []
  seek: [pct: number]
}>()
</script>
