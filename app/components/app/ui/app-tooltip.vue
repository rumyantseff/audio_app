<template>
  <div class="relative inline-flex group/tooltip">
    <slot />
    <div class="pointer-events-none absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2
                bg-font-primary/80 text-font-tertiary text-xs font-medium px-3 py-1.5 rounded-xl
                whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>
