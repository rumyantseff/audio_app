<template>
  <button type="button" class="relative focus:outline-none shrink-0" @click="emit('click')">
    <img :src="src" :alt="alt" class="w-12 h-12 rounded-lg object-cover shadow-app" />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ src?: string, alt?: string }>(), {
  src: '/avatar.jpg',
  alt: 'User avatar',
})
const emit = defineEmits<{ click: [] }>()
</script>
