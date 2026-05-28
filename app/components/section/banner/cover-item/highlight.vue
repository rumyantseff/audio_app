<template>
  <div class="card-edge-top" />
</template>

<style scoped>
.card-edge-top {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.25),
    transparent
  );
  pointer-events: none;
}
</style>
