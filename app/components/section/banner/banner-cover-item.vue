<template>
  <div
    class="banner-cover-item"
    :style="itemStyle"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="navigateTo(`/track/${songId}`)"
  >
    <!-- Vinyl record (behind cover) -->
    <div class="vinyl" :class="{ 'vinyl--out': hovered }">
      <div class="vinyl-label" :style="`background-image: url('${src}')`" />
    </div>
    <!-- Album cover -->
    <div class="cover" :class="{ 'cover--hovered': hovered }">
      <img :src="src" :alt="`cover-${index}`" class="w-full h-full object-cover" />
      <div class="cover-shine" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  index: number
  total: number
  songId: number
}>()

const hovered = ref(false)

const itemStyle = computed(() => ({
  zIndex: hovered.value ? props.total + 1 : props.index,
  transform: `translateX(${props.index * 22}px)`,
}))
</script>

<style scoped>
.banner-cover-item {
  position: absolute;
  width: 130px;
  height: 130px;
  cursor: pointer;
  perspective: 600px;
}

/* Vinyl platňa */
.vinyl {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(-28deg) rotateX(4deg);
  width: 118px;
  height: 118px;
  border-radius: 50%;
  background: repeating-radial-gradient(
    circle at center,
    #1a1a1a 0px,
    #111 2px,
    #222 4px,
    #111 6px
  );
  box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  transition: transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
  z-index: 0;
}

.vinyl--out {
  transform: translate(-130%, -50%) rotateY(-28deg) rotateX(4deg);
}

.vinyl-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 0 2px rgba(192,250,255,0.3), 0 0 0 5px rgba(0,0,0,0.4);
}

/* Album cover */
.cover {
  position: absolute;
  inset: 0;
  border-radius: 0;
  overflow: hidden;
  border: none;
  box-shadow: -6px 8px 24px rgba(0,0,0,0.6);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
  z-index: 1;
  transform: rotateY(-28deg) rotateX(4deg);
  transform-style: preserve-3d;
}

.cover--hovered {
  box-shadow: -12px 16px 36px rgba(0,0,0,0.7);
}

.cover-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%);
  pointer-events: none;
}
</style>
