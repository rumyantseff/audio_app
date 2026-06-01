<template>
  <div class="flex items-center gap-2">
    <SharedThemeToggle />
    <SectionHeaderUserMenuTriggerAvatarButton @click="emit('toggle')" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ toggle: [] }>()
</script>
