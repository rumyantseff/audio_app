<template>
  <div class="ground-shadow" :class="{ 'ground-shadow--hovered': hovered }" />
</template>

<script setup lang="ts">
defineProps<{ hovered: boolean }>()
</script>

<style scoped>
.ground-shadow {
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%) scaleY(0.35);
  width: 80%;
  height: 60%;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%);
  filter: blur(6px);
  transition: transform 0.45s ease, opacity 0.45s ease;
  pointer-events: none;
}

.ground-shadow--hovered {
  transform: translateX(-50%) scaleY(0.25) scaleX(1.15);
  opacity: 0.6;
}
</style>
