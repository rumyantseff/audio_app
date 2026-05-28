<template>
  <NuxtLink
    :to="to"
    class="text-font-primary text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to: string }>()
</script>
