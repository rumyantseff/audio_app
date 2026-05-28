<template>
  <div class="flex-shrink-0 mx-auto md:mx-0">
    <div class="w-60 h-60 rounded-3xl overflow-hidden shadow-2xl">
      <img :src="src" :alt="alt" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>
