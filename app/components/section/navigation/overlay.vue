<template>
  <Transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-40 bg-black/50"
      @click="emit('close')"
    />
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>()
const emit = defineEmits<{ close: [] }>()
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
