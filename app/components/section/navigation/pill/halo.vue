<template>
  <span class="nav-pill-halo absolute top-1/2 -translate-y-1/2 -translate-x-full w-40 h-12 rounded-full" />
</template>

<style scoped>
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
</style>
