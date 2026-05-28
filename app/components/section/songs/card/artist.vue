<template>
  <p
    class="text-white/80 text-sm truncate mt-1 hover:text-tertiary transition-colors"
    @click.stop="navigateTo(`/artist/${artistId}`)"
  >
    {{ name }}
  </p>
</template>

<script setup lang="ts">
defineProps<{ name: string, artistId: number }>()
</script>
