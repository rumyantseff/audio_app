<template>
  <h3 :class="['text-white font-bold truncate leading-tight', sizeClass]">{{ text }}</h3>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ text: string; size?: 'md' | 'lg' }>(),
  { size: 'lg' }
)

const sizeClass = computed(() => (props.size === 'lg' ? 'text-xl' : 'text-base'))
</script>
