<template>
  <div class="relative flex items-center justify-center">
    <!-- Telegram-style soft halo that breathes in place, only while playing -->
    <span v-if="playing" class="player-halo" />
    <button
      type="button"
      :disabled="!loaded"
      class="relative z-10 w-11 h-11 flex items-center justify-center rounded-full bg-primary text-white shadow hover:opacity-90 transition-opacity disabled:opacity-40"
      @click="emit('toggle')"
    >
      <i :class="['mdi text-2xl', playing ? 'mdi-pause' : 'mdi-play']" />
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ playing?: boolean, loaded?: boolean }>(), { playing: false, loaded: false })
const emit = defineEmits<{ toggle: [] }>()
</script>

<style scoped>
.player-halo {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: theme('colors.primary');
  pointer-events: none;
  z-index: 0;
  /* soft blurred glow that fills around the button */
  filter: blur(6px);
  transform-origin: center;
}

@media (prefers-reduced-motion: no-preference) {
  .player-halo {
    animation: player-halo 1.8s ease-in-out infinite;
  }
}

@keyframes player-halo {
  0%, 100% {
    transform: scale(1.05);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.7);
    opacity: 0.55;
  }
}
</style>
