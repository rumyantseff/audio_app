<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-3.5 px-3 py-2.5 rounded-xl cursor-pointer transition-colors text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100 hover:bg-primary/5 dark:hover:bg-white/5"
    active-class="navActive"
  >
    <i :class="['mdi', iconResolved, 'text-[22px] shrink-0 opacity-80']" />
    <span v-if="!mini" class="text-[13px] font-medium tracking-wide truncate">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string
  icon: string
  label: string
  mini?: boolean
}>()

const iconResolved = computed(() =>
  props.icon.endsWith('-outline') ? props.icon : `${props.icon}-outline`
)
</script>
