<template>
  <i
    class="mdi mdi-chevron-down text-base transition-transform duration-300 opacity-60"
    :class="{ 'rotate-180': open }"
  />
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>()
</script>
