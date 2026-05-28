<template>
  <div class="card-edge" :class="{ 'card-edge--hidden': hovered }" />
</template>

<script setup lang="ts">
defineProps<{ hovered: boolean }>()
</script>

<style scoped>
.card-edge {
  position: absolute;
  top: 0; left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.1)
  );
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.card-edge--hidden {
  opacity: 0;
}
</style>
