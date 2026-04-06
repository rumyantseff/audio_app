<template>
  <div
    class="item"
    :style="wrapperStyle"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="navigateTo(`/track/${songId}`)"
  >
    <!-- Drop shadow on the "ground" -->
    <div class="ground-shadow" :class="{ 'ground-shadow--hovered': hovered }" />

    <div class="card" :class="{ 'card--hovered': hovered }">
      <!-- Album art -->
      <img :src="src" class="card-img" />

      <!-- Edge thickness (left side — gives depth illusion) -->
      <div class="card-edge" />

      <!-- Top edge highlight -->
      <div class="card-edge-top" />

      <!-- Gloss layer -->
      <div class="card-gloss" />

      <!-- Ambient occlusion at bottom -->
      <div class="card-ao" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  index: number
  total: number
  songId: number
  delay: number
}>()

const hovered = ref(false)

const wrapperStyle = computed(() => ({
  zIndex: hovered.value ? 100 : props.index + 1,
  left: `${props.index * 38}px`,
  animationDelay: `${props.delay}ms`,
}))
</script>

<style scoped>
/* ── Wrapper + levitate ── */
.item {
  position: absolute;
  width: 160px;
  height: 160px;
  cursor: pointer;
  animation: levitate 3.5s ease-in-out infinite;
  transform-style: preserve-3d;
  perspective: 900px;
}

@keyframes levitate {
  0%,100% { transform: translateY(0px);   }
  50%      { transform: translateY(-12px); }
}

/* ── Ground shadow ── */
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

/* ── Card ── */
.card {
  position: absolute;
  inset: 0;
  border-radius: 4px;
  overflow: hidden;
  background: #1a1a1a;

  /* 3D tilt — like stacked panels in example */
  transform: rotateY(42deg) rotateX(6deg);
  transform-origin: left center;
  transform-style: preserve-3d;

  /* Realistic multi-layer shadow */
  box-shadow:
    /* Hard close shadow */
    -3px 3px 0px rgba(0,0,0,0.4),
    /* Soft medium shadow */
    -8px 10px 16px rgba(0,0,0,0.45),
    /* Wide ambient shadow */
    -16px 20px 40px rgba(0,0,0,0.3),
    /* Subtle color bleed */
    -2px 2px 6px rgba(0,0,0,0.6);

  transition:
    transform  0.5s cubic-bezier(0.34, 1.15, 0.64, 1),
    box-shadow 0.5s ease;
  will-change: transform, box-shadow;
}

/* Hovered — frontal, lifted */
.card--hovered {
  transform: rotateY(0deg) rotateX(0deg) scale(1.1) translateY(-6px);
  box-shadow:
    0 2px 4px  rgba(0,0,0,0.2),
    0 8px 20px rgba(0,0,0,0.35),
    0 20px 50px rgba(0,0,0,0.3),
    0 40px 80px rgba(0,0,0,0.15);
}

/* ── Album art ── */
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

/* ── Left edge — gives physical thickness illusion ── */
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

.card--hovered .card-edge {
  opacity: 0;
}

/* ── Top edge highlight ── */
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

/* ── Gloss reflection ── */
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

.card--hovered .card-gloss {
  opacity: 0.3;
}

/* ── Ambient occlusion at bottom ── */
.card-ao {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 30%;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.25),
    transparent
  );
  pointer-events: none;
}
</style>
