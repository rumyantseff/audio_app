<template>
  <a
    :href="href"
    :aria-label="label"
    target="_blank"
    rel="noopener noreferrer"
    class="w-9 h-9 flex items-center justify-center text-font-primary hover:text-primary transition-colors"
  >
    <i :class="['mdi', icon, 'text-xl']" />
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string, label: string, icon: string }>()
</script>
