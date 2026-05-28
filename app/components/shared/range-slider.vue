<template>
  <input
    type="range"
    :value="modelValue"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :class="['range-slider', volume ? 'range-slider--volume' : '']"
    @input="emit('update:modelValue', parseFloat(($event.target as HTMLInputElement).value))"
    @change="emit('change', parseFloat(($event.target as HTMLInputElement).value))"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  volume?: boolean
}>(), { modelValue: 0, min: 0, max: 100, step: 1, disabled: false, volume: false })

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()
</script>
