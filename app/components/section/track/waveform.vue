<template>
  <div
    ref="waveRef"
    class="relative w-full h-12 cursor-pointer select-none touch-none"
    @pointerdown="onPointerDown"
  >
    <!-- Base layer: all bars inactive -->
    <div class="absolute inset-0 flex items-center justify-between px-1">
      <SectionTrackWaveformBar
        v-for="(h, i) in bars"
        :key="`b-${i}`"
        :height="h"
        :active="false"
      />
    </div>
    <!-- Played layer: all bars active, clipped to exact percentage -->
    <div
      class="absolute inset-0 flex items-center justify-between px-1 overflow-hidden"
      :style="{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }"
    >
      <SectionTrackWaveformBar
        v-for="(h, i) in bars"
        :key="`a-${i}`"
        :height="h"
        :active="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bars: number[]
  percentage: number
}>()

const emit = defineEmits<{ seek: [pct: number] }>()

const waveRef = ref<HTMLDivElement | null>(null)

function seekAt(clientX: number) {
  const wave = waveRef.value
  if (!wave) return
  const rect = wave.getBoundingClientRect()
  const pct = ((clientX - rect.left) / rect.width) * 100
  emit('seek', Math.max(0, Math.min(100, pct)))
}

function onPointerMove(e: PointerEvent) {
  seekAt(e.clientX)
}

function onPointerUp() {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

function onPointerDown(e: PointerEvent) {
  seekAt(e.clientX)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

onBeforeUnmount(onPointerUp)
</script>
