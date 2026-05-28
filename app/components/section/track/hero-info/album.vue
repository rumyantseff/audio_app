<template>
  <p class="text-xs font-semibold tracking-widest uppercase text-secondary dark:text-tertiary mb-2">
    {{ name }}
  </p>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
