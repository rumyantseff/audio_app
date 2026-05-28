<template>
  <img :src="src" class="card-img" />
</template>

<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<style scoped>
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}
</style>
