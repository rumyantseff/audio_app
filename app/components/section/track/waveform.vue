<template>
  <div class="mb-2">
    <div
      ref="waveRef"
      class="relative w-full h-16 flex items-end gap-px overflow-hidden rounded-lg px-1 cursor-pointer select-none"
      style="background: rgba(13,74,86,0.08)"
      @click="onClick"
    >
      <div
        v-for="(h, i) in bars"
        :key="i"
        class="flex-1 rounded-sm"
        :style="{ height: `${h}%`, minWidth: '2px' }"
        :class="(i / bars.length * 100) <= percentage
          ? 'bg-primary dark:bg-tertiary opacity-90'
          : 'bg-font-secondary/25 dark:bg-gray-500/30'"
      />
      <div
        class="absolute top-0 bottom-0 w-0.5 bg-primary dark:bg-tertiary pointer-events-none"
        :style="{ left: `${percentage}%` }"
      />
    </div>
    <div class="flex justify-between mt-1.5 px-1">
      <span class="text-font-secondary dark:text-gray-400 text-xs">{{ currentTime }}</span>
      <span class="text-font-secondary dark:text-gray-400 text-xs">{{ duration }}</span>
    </div>
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
