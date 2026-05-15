<template>
  <button
    type="button"
    class="w-10 h-10 flex items-center justify-center rounded-full text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
    @click="sidebar.toggle()"
  >
    <i class="mdi mdi-menu text-xl" />
  </button>
</template>

<script setup lang="ts">
const sidebar = useSidebar()
</script>
