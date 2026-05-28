<template>
  <div class="mb-2">
    <div
      ref="waveRef"
      class="relative w-full h-16 flex items-end gap-px overflow-hidden rounded-lg px-1 cursor-pointer select-none"
      style="background: rgba(13,74,86,0.08)"
      @click="onClick"
    >
      <SectionTrackWaveformBar
        v-for="(h, i) in bars"
        :key="i"
        :height="h"
        :active="(i / bars.length * 100) <= percentage"
      />
      <SectionTrackWaveformCursor :percentage="percentage" />
    </div>
    <SectionTrackWaveformTimeLabels :current-time="currentTime" :duration="duration" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bars: number[]
  percentage: number
  currentTime: string
  duration: string
}>()

const emit = defineEmits<{ seek: [pct: number] }>()

const waveRef = ref<HTMLDivElement | null>(null)

function onClick(e: MouseEvent) {
  const wave = waveRef.value
  if (!wave) return
  const rect = wave.getBoundingClientRect()
  emit('seek', ((e.clientX - rect.left) / rect.width) * 100)
}
</script>
