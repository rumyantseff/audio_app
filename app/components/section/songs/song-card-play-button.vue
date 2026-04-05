<template>
  <button
    type="button"
    :class="[
      'absolute inset-0 m-auto flex items-center justify-center text-font-primary transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:hover:scale-125 z-10',
      sizes[size].button,
    ]"
    style="background:rgba(249,249,244,0.25);border:1px solid rgba(249,249,244,0.4);box-shadow:0 4px 30px rgba(0,0,0,0.15);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)"
    @click.stop="emit('play')"
  >
    <i
      :class="['mdi mdi-play', sizes[size].icon]"
      style="color:#F9F9F4;"
    />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'md' | 'lg' }>(), { size: 'md' })
const emit = defineEmits<{ play: [] }>()

const sizes = {
  sm: { button: 'w-6 h-6 rounded-md',               icon: 'text-sm' },
  md: { button: 'w-8 lg:w-10 h-8 lg:h-10 rounded-lg', icon: 'text-xl lg:text-2xl' },
  lg: { button: 'w-12 h-12 rounded-xl',              icon: 'text-3xl' },
}
</script>
