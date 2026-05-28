<template>
  <SharedBadge class="absolute top-4 right-4">
    <i class="mdi mdi-fire text-quanterary text-sm" />
    <span>{{ date }}</span>
  </SharedBadge>
</template>

<script setup lang="ts">
defineProps<{ date: string }>()
</script>
