<template>
  <button type="button" class="relative focus:outline-none" @click="emit('click')">
    <img :src="src" :alt="alt" class="w-10 h-12 object-cover" />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ src?: string, alt?: string }>(), {
  src: '/avatar.jpg',
  alt: 'User avatar',
})
const emit = defineEmits<{ click: [] }>()
</script>
