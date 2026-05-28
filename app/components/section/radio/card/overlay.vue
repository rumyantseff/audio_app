<template>
  <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

  <div class="absolute inset-x-0 bottom-0 p-5">
    <SharedOverlayHeading :text="name" />
    <p class="text-white/80 text-sm truncate mt-1">{{ genre }}</p>
    <div class="mt-3 text-white/90 text-xs font-medium flex items-center gap-1.5">
      <SharedStats icon="mdi-account-multiple" :value="listeners" />
      <span>listeners</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string, genre: string, listeners: number }>()
</script>
