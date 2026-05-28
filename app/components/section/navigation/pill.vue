<template>
  <Transition name="pill-fade">
    <span
      v-if="show"
      class="absolute z-10 pointer-events-none"
      :style="positionStyle"
    >
      <span class="nav-pill-halo absolute top-1/2 -translate-y-1/2 -translate-x-full w-40 h-12 rounded-full" />
      <span class="nav-pill relative block w-1.5 h-7 bg-quanterary rounded-r-full" />
    </span>
  </Transition>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean
    positionStyle?: string
  }>(),
  { positionStyle: 'right: -2.25rem; top: 50%; transform: translateY(-50%)' }
)
</script>

<style scoped>
/* Warm amber glow (quanterary #fb9039) — same in light & dark */
.nav-pill {
  box-shadow:
    0 0 12px rgba(251, 144, 57, 1),
    0 0 28px rgba(251, 144, 57, 0.75),
    0 0 50px rgba(251, 144, 57, 0.5),
    0 0 80px rgba(251, 144, 57, 0.3);
}

.nav-pill-halo {
  background: radial-gradient(
    ellipse at right center,
    rgba(251, 144, 57, 0.65) 0%,
    rgba(251, 144, 57, 0.35) 25%,
    rgba(251, 144, 57, 0.15) 50%,
    transparent 80%
  );
  filter: blur(16px);
  width: 18rem !important;
  height: 6rem !important;
}

.pill-fade-enter-active, .pill-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.pill-fade-enter-from, .pill-fade-leave-to {
  opacity: 0;
  transform: translateY(-50%) scaleY(0.3);
}
</style>
