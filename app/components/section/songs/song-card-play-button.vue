<template>
  <button
    type="button"
    class="absolute inset-0 m-auto w-10 h-10 flex items-center justify-center rounded-xl text-font-primary transition-all duration-300 opacity-0 scale-75 
    group-hover:opacity-100 group-hover:scale-100 group-hover:hover:scale-125 z-10"
    style="background:rgba(192,250,255,0.5);border:1px solid rgba(192,250,255,0.5);box-shadow:0 4px 30px rgba(0,0,0,0.1);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)"
    @click="emit('play')"
  >
    <i class="mdi mdi-play text-xl" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ play: [] }>()
</script>
