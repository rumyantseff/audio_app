<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center justify-center font-medium transition-colors',
      variants[variant],
    ]"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'see-all' | 'primary' | 'secondary'
  }>(),
  { variant: 'see-all' }
)

const emit = defineEmits<{ click: [Event] }>()

const variants = {
  'see-all':
    'text-secondary dark:text-tertiary text-xs border border-secondary/40 dark:border-tertiary/30 rounded px-3 py-1 hover:border-secondary dark:hover:border-tertiary',
  primary:
    'text-white bg-quanterary hover:bg-quanterary/90 rounded-full px-6 py-3 text-sm font-bold',
  secondary:
    'text-font-primary dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-pentanary dark:hover:bg-gray-700 rounded-full px-6 py-3 text-sm font-bold border border-font-secondary/20',
}
</script>
