<template>
  <div class="flex items-stretch rounded-lg overflow-hidden shadow-app">
    <ThemeToggle class="rounded-none" />
    <button type="button" class="relative focus:outline-none" @click="emit('toggle')">
      <img src="/avatar.jpg" alt="User avatar" class="w-10 h-12 object-cover" />
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ toggle: [] }>()
</script>
