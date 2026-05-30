<template>
  <div class="flex items-center w-full rounded-full bg-white dark:bg-gray-800 shadow-app pl-2 pr-1.5">
    <button
      type="button"
      class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-font-primary dark:text-gray-300 hover:text-secondary transition-colors"
      @click="emit('close')"
    >
      <i class="mdi mdi-arrow-left text-xl" />
    </button>

    <SectionHeaderSearchInput :model-value="modelValue" auto-focus @update:model-value="emit('update:modelValue', $event)" @close="emit('close')" />

    <button
      v-if="modelValue"
      type="button"
      class="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-white transition-colors"
      @click="emit('update:modelValue', '')"
    >
      <i class="mdi mdi-close text-lg" />
    </button>

    <div class="ml-1.5 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gradient text-white shadow">
      <SectionHeaderSearchIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string], close: [] }>()
</script>
