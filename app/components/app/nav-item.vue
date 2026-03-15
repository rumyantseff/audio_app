<template>
  <NuxtLink
    :to="to"
    class="navItem flex items-center gap-4 px-3 py-2.5 rounded-xl cursor-pointer transition-colors text-font-primary dark:text-gray-300 font-bold hover:bg-primary/10 dark:hover:bg-white/5"
    active-class="navItem--active"
  >
    <i :class="['mdi', icon, 'text-xl shrink-0']" />
    <span v-if="!mini" class="text-sm truncate">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to: string; icon: string; label: string; mini?: boolean }>()
</script>

<style scoped>
.navItem--active { background-color: #0D4A56 !important; color: #f8fafa !important; }
.navItem--active i { color: #c0faff !important; }
</style>
