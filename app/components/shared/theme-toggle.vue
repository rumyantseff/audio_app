<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isDark"
    :class="[
      'relative w-5 h-12 rounded-full transition-colors duration-500 shrink-0',
      isDark ? 'bg-orange-800' : 'bg-quanterary',
    ]"
    @click="toggle"
  >
    <!-- Icon sits on the track, at the END OPPOSITE the knob; flips like a coin on toggle -->
    <span
      class="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out"
      :class="isDark ? 'top-1.5' : 'bottom-1.5'"
    >
      <i :key="isDark ? 'moon' : 'sun'" :class="['mdi text-xs text-white/90 block coin-flip', isDark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny']" />
    </span>

    <!-- Plain white sliding knob -->
    <span
      class="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-md bg-white transition-all duration-500 ease-out"
      :style="{ top: isDark ? 'calc(100% - 1.25rem)' : '0.25rem' }"
    />
  </button>
</template>

<script setup lang="ts">
const { isDark, toggle } = useColorMode()
</script>

<style scoped>
/* Coin-flip: icon rolls in — starts edge-on (flat) + rotated, settles to full face */
.coin-flip {
  animation: coin-flip 0.5s ease-in-out;
}

@keyframes coin-flip {
  0% {
    transform: rotate(-180deg) scaleY(0.1);
    opacity: 0;
  }
  50% {
    transform: rotate(-90deg) scaleY(0.6);
    opacity: 0.6;
  }
  100% {
    transform: rotate(0deg) scaleY(1);
    opacity: 1;
  }
}
</style>
