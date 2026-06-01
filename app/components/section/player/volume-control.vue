<template>
  <div
    class="relative w-8 h-8"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <!-- Single pill: anchored at the bottom (where the trigger icon lives),
         grows upward on hover. The speaker icon stays put and becomes the
         pill's bottom. -->
    <div
      ref="trackRef"
      class="vol-pill absolute bottom-0 left-0 w-8 rounded-full overflow-hidden cursor-pointer touch-none select-none"
      :class="open
        ? 'h-44 bg-gray-800 dark:bg-gray-800 shadow-app'
        : 'h-8 bg-transparent'"
      @pointerdown="onPointerDown"
      @click="onClick"
    >
      <!-- Filled portion grows from the bottom; fades in with the pill -->
      <div
        class="vol-fill absolute inset-x-0 bottom-0 bg-primary dark:bg-white"
        :class="open ? 'opacity-100' : 'opacity-0'"
        :style="{ height: `${displayPct}%` }"
      />

      <!-- Percentage label, shown inside the pill above the icon when open -->
      <Transition name="vol-fade">
        <span
          v-if="open"
          class="absolute inset-x-0 bottom-9 text-center text-[10px] font-semibold tabular-nums pointer-events-none transition-colors"
          :class="displayPct > 22 ? 'text-white dark:text-font-primary' : 'text-font-primary dark:text-white'"
        >
          {{ Math.round(displayPct) }}
        </span>
      </Transition>

      <!-- Speaker icon — centered in the closed box (aligns with play/waveform);
           drops to the pill bottom when open. -->
      <i
        :class="[
          'mdi text-xl leading-none absolute left-1/2 -translate-x-1/2 pointer-events-none vol-icon',
          volumeIcon,
          open ? 'bottom-1.5' : 'bottom-1/2 translate-y-1/2',
          open
            ? (displayPct > 16 ? 'text-white dark:text-font-primary' : 'text-font-primary dark:text-white')
            : 'text-font-secondary dark:text-gray-300 group-hover:text-font-primary',
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { playerVolume, isMuted, volumeIcon, mute, setVolume } = useAudioPlayer()

const open = ref(false)
const trackRef = ref<HTMLDivElement | null>(null)
const dragging = ref(false)

const displayPct = computed(() => (isMuted.value ? 0 : playerVolume.value * 100))

function setFromClientY(clientY: number) {
  const el = trackRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const ratio = 1 - (clientY - rect.top) / rect.height
  setVolume(Math.max(0, Math.min(1, ratio)))
}

function onPointerMove(e: PointerEvent) {
  dragging.value = true
  setFromClientY(e.clientY)
}

function onPointerUp() {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

function onPointerDown(e: PointerEvent) {
  // Only seek by drag/click when the pill is open
  if (!open.value) return
  dragging.value = false
  setFromClientY(e.clientY)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

function onClick() {
  // When collapsed, clicking the icon toggles mute (no seek happened)
  if (!open.value) mute()
}

onBeforeUnmount(onPointerUp)
</script>

<style scoped>
/* Pill expand/collapse — height springs with a soft overshoot easing,
   background & shadow fade in slightly slower so the shape leads the color. */
.vol-pill {
  transition:
    height 0.28s cubic-bezier(0.34, 1.4, 0.5, 1),
    background-color 0.2s ease 0.04s,
    box-shadow 0.2s ease 0.04s;
  will-change: height;
}

/* Icon slides between centered (closed) and bottom (open) in step with the pill */
.vol-icon {
  transition: bottom 0.28s cubic-bezier(0.34, 1.4, 0.5, 1), color 0.15s ease;
}

/* Fill fades in/out in sync with the pill, height moves smoothly while dragging */
.vol-fill {
  transition:
    height 0.12s ease-out,
    opacity 0.18s ease 0.06s;
}

.vol-fade-enter-active,
.vol-fade-leave-active {
  transition: opacity 0.18s ease 0.06s;
}
.vol-fade-enter-from,
.vol-fade-leave-to {
  opacity: 0;
}
</style>
