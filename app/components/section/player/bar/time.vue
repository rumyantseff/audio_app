<template>
  <span class="shrink-0 text-xs tabular-nums whitespace-nowrap">
    <span class="text-orange-950 dark:text-orange-50 font-medium">{{ current }}</span>
    <span class="text-orange-950/40 dark:text-orange-50/40"> / {{ total }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{ current: string, total: string }>()
</script>
