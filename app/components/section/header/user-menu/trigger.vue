<template>
  <div class="flex items-stretch rounded-lg overflow-hidden shadow-app">
    <SharedThemeToggle class="rounded-none" />
    <SectionHeaderUserMenuTriggerAvatarButton @click="emit('toggle')" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ toggle: [] }>()
</script>
