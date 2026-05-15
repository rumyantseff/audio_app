<template>
  <div class="mb-4 flex items-center justify-between">
    <h2 class="text-font-primary dark:text-gray-100 font-bold text-xl">{{ title }}</h2>
    <UiButton v-if="seeAllTo" variant="see-all" @click="navigateTo(seeAllTo)">
      See all
    </UiButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; seeAllTo?: string }>()
</script>
