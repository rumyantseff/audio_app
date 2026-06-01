<template>
  <p
    class="text-xs font-semibold tracking-widest uppercase text-secondary dark:text-tertiary mb-2 cursor-pointer hover:text-primary dark:hover:text-white transition-colors w-fit"
    @click="navigateTo(`/album/${albumId}`)"
  >
    {{ name }}
  </p>
</template>

<script setup lang="ts">
defineProps<{ name: string, albumId: number }>()
</script>
