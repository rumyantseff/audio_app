<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      'flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed',
      sizes[size].box,
      active
        ? 'text-primary dark:text-tertiary'
        : 'text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100',
    ]"
    @click="emit('click', $event)"
  >
    <i :class="['mdi', icon, sizes[size].icon]" />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    size?: 'sm' | 'md' | 'lg'
    active?: boolean
    disabled?: boolean
  }>(),
  { size: 'md', active: false, disabled: false }
)

const emit = defineEmits<{ click: [Event] }>()

const sizes = {
  sm: { box: 'w-8 h-8',   icon: 'text-lg' },
  md: { box: 'w-9 h-9',   icon: 'text-xl' },
  lg: { box: 'w-12 h-12', icon: 'text-2xl' },
}
</script>
