<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-3 px-4 py-3 text-font-primary dark:text-gray-300 text-sm font-medium hover:bg-pentanary dark:hover:bg-white/5 transition-colors"
    @click="emit('click')"
  >
    <i :class="['mdi', icon, 'text-lg']" />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to: string, icon: string }>()
const emit = defineEmits<{ click: [] }>()
</script>
