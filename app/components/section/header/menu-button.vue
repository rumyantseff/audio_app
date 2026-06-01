<template>
  <button
    type="button"
    class="mr-4 flex items-center justify-center text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
    @click="sidebar.toggle()"
  >
    <i class="mdi mdi-menu text-2xl" />
  </button>
</template>

<script setup lang="ts">
const sidebar = useSidebar()
</script>
