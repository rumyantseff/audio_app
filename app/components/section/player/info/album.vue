<template>
  <SharedTooltip :text="name">
    <slot />
  </SharedTooltip>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
