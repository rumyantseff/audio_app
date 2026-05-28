<template>
  <div class="flex items-center gap-4 mt-3 text-white/90 text-xs font-medium">
    <SharedStats icon="mdi-headphones" :value="hears" />
    <SharedStats icon="mdi-heart" :value="likes" clickable @click="emit('like')" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ hears: number, likes: number }>()
const emit = defineEmits<{ like: [] }>()
</script>
