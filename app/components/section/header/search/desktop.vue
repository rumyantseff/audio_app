<template>
  <div class="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center">
    <div
      class="py-1 flex items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out"
      :class="[
        isOpen
          ? 'w-[80vh] bg-white dark:bg-gray-800 shadow-app pl-2 pr-4'
          : 'w-12 bg-transparent',
      ]"
    >
      <!-- Collapsed: gradient circle acts as trigger -->
      <button
        v-if="!isOpen"
        type="button"
        class="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gradient text-white hover:opacity-90 transition-opacity"
        @click="emit('toggle')"
      >
        <SectionHeaderSearchIcon />
      </button>

      <!-- Open: gradient action button (left) + input + clear inside the bar -->
      <template v-else>
        <button
          type="button"
          class="mr-3 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gradient text-white shadow hover:opacity-90 transition-opacity"
          @click="onAction"
        >
          <SectionHeaderSearchIcon />
        </button>

        <SectionHeaderSearchInput
          :model-value="modelValue"
          :auto-focus="true"
          @update:model-value="emit('update:modelValue', $event)"
          @submit="onAction"
          @close="emit('close')"
        />

        <button
          v-if="modelValue"
          type="button"
          class="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-white transition-colors"
          @click="emit('update:modelValue', '')"
        >
          <i class="mdi mdi-close text-lg" />
        </button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string, isOpen: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: string], toggle: [], close: [], search: [query: string] }>()

// Gradient button behaviour:
// - open + has text   → run the search
// - open + empty text  → collapse the bar
// - (collapsed state uses its own button → toggle/open)
function onAction() {
  if (props.modelValue.trim()) emit('search', props.modelValue.trim())
  else emit('toggle')
}
</script>
