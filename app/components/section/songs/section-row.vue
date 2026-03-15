<template>
  <div class="mt-10">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-font-primary dark:text-gray-100 font-bold text-xl">{{ title }}</h2>
      <button type="button" class="text-secondary text-sm font-medium hover:text-primary transition-colors">
        See all <i class="mdi mdi-arrow-right" />
      </button>
    </div>
    <div class="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-hide">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
