<template>
  <div class="flex items-center w-full border rounded-full border-pentanary bg-white dark:bg-gray-800 shadow-app overflow-hidden">
    <button
      type="button"
      class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-font-primary dark:text-gray-300 hover:text-secondary transition-colors"
      @click="emit('close')"
    >
      <i class="mdi mdi-arrow-left text-xl" />
    </button>
    <SectionHeaderSearchInput :model-value="modelValue" auto-focus @update:model-value="emit('update:modelValue', $event)" @close="emit('close')" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string], close: [] }>()
</script>
