<template>
  <div class="card-gloss" :class="{ 'card-gloss--hovered': hovered }" />
</template>

<script setup lang="ts">
defineProps<{ hovered: boolean }>()
</script>

<style scoped>
.card-gloss {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    125deg,
    rgba(255,255,255,0.18) 0%,
    rgba(255,255,255,0.04) 35%,
    transparent 60%
  );
  pointer-events: none;
  transition: opacity 0.45s ease;
}

.card-gloss--hovered {
  opacity: 0.3;
}
</style>
