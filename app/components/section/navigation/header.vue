<template>
  <div class="h-24 flex items-center px-8 gap-4 shrink-0">
    <button
      type="button"
      class="w-10 h-10 flex items-center justify-center rounded-full border border-font-secondary/30 text-font-primary dark:text-font-tertiary hover:border-secondary transition-colors shrink-0"
      @click="emit('close')"
    >
      <i class="mdi mdi-close text-xl" />
    </button>
    <img src="/musix_logo.svg" alt="Mbrosia logo" class="w-10 h-10 shrink-0 object-contain" />
    <span class="text-font-primary dark:text-font-tertiary font-semibold text-xl truncate">Mbrosia</span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
</script>
