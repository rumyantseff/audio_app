<template>
  <div class="card" :class="{ 'card--hovered': hovered }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ hovered: boolean }>()
</script>

<style scoped>
.card {
  position: absolute;
  inset: 0;
  border-radius: 4px;
  overflow: hidden;
  background: #1a1a1a;

  transform: rotateY(42deg) rotateX(6deg);
  transform-origin: left center;
  transform-style: preserve-3d;

  box-shadow:
    -3px 3px 0px rgba(0,0,0,0.4),
    -8px 10px 16px rgba(0,0,0,0.45),
    -16px 20px 40px rgba(0,0,0,0.3),
    -2px 2px 6px rgba(0,0,0,0.6);

  transition:
    transform  0.5s cubic-bezier(0.34, 1.15, 0.64, 1),
    box-shadow 0.5s ease;
  will-change: transform, box-shadow;
}

.card--hovered {
  transform: rotateY(0deg) rotateX(0deg) scale(1.1) translateY(-6px);
  box-shadow:
    0 2px 4px  rgba(0,0,0,0.2),
    0 8px 20px rgba(0,0,0,0.35),
    0 20px 50px rgba(0,0,0,0.3),
    0 40px 80px rgba(0,0,0,0.15);
}
</style>
