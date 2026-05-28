<template>
  <div>
    <div v-if="title" class="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-font-secondary dark:text-gray-500">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>()
</script>
