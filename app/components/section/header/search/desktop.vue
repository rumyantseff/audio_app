<template>
  <div class="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center">
    <div
      class="flex items-center overflow-hidden border rounded-full transition-all duration-300 ease-in-out"
      :class="[
        isOpen
          ? 'w-[80vh] border-pentanary bg-white dark:bg-gray-800 shadow-app'
          : 'w-10 border-font-pentanary/30 bg-transparent',
      ]"
    >
      <button
        type="button"
        class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-font-primary dark:text-gray-300 hover:text-secondary transition-colors"
        @click="emit('toggle')"
      >
        <SectionHeaderSearchIcon />
      </button>
      <SectionHeaderSearchInput v-if="isOpen" :model-value="modelValue" :auto-focus="true" @update:model-value="emit('update:modelValue', $event)" @close="emit('close')" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string, isOpen: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: string], toggle: [], close: [] }>()
</script>
