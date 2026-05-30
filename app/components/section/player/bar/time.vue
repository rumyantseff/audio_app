<template>
  <span class="shrink-0 text-xs tabular-nums text-font-secondary dark:text-gray-400 whitespace-nowrap">
    {{ current }} / {{ total }}
  </span>
</template>

<script setup lang="ts">
defineProps<{ current: string, total: string }>()
</script>
