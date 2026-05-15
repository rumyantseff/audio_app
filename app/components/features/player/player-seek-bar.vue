<template>
  <div class="px-4 mt-2">
    <RangeSlider :model-value="percentage" :disabled="!loaded" @change="emit('seek', $event)" />
    <div class="flex items-center mt-1">
      <span class="text-font-primary text-xs font-medium px-1">{{ currentTime }}</span>
      <div class="flex-1" />
      <span class="text-font-primary text-xs font-medium px-1">{{ duration }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  percentage?: number
  currentTime?: string
  duration?: string
  loaded?: boolean
}>(), { percentage: 0, currentTime: '00:00', duration: '00:00', loaded: false })

const emit = defineEmits<{ seek: [value: number] }>()
</script>
