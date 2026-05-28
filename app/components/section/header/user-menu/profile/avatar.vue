<template>
  <div class="relative shrink-0">
    <img :src="src" :alt="alt" class="w-11 h-11 rounded-lg object-cover bg-primary" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ src?: string, alt?: string }>(), {
  src: '/avatar.jpg',
  alt: 'User avatar',
})
</script>
