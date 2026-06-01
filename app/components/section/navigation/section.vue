<template>
  <div :class="rootClass">
    <h6
      v-if="title"
      class="text-orange-950 dark:text-orange-50 font-medium text-xs tracking-widest uppercase mb-2"
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
