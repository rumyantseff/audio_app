<template>
  <div class="h-24 flex items-center px-6 gap-2 shrink-0">
    <SectionNavigationHeaderCloseButton @click="emit('close')" />
    <SectionNavigationHeaderBrand />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
</script>
