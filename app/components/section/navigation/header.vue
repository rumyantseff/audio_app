<template>
  <div class="h-24 flex items-center px-8 gap-4 shrink-0">
    <SectionNavigationHeaderCloseButton @click="emit('close')" />
    <SectionNavigationHeaderBrand />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
</script>
