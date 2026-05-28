<template>
  <button type="button" class="w-9 h-9 flex items-center justify-center text-font-primary hover:text-primary transition-colors" @click="emit('click')">
    <i class="mdi mdi-close text-xl" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>
