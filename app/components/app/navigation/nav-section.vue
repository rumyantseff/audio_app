<template>
  <div :class="rootClass">
    <h6
      v-if="title"
      class="text-font-secondary dark:text-gray-500 font-medium text-xs tracking-widest uppercase mb-2"
    >
      {{ title }}
    </h6>
    <div class="flex flex-col gap-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    rootClass?: string
  }>(),
  { rootClass: 'px-8' }
)
</script>
