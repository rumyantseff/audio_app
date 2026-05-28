<template>
  <button
    type="button"
    class="w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl cursor-pointer transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
    :class="[
      isActive
        ? 'navActive font-semibold'
        : 'text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100'
    ]"
    @click="emit('toggle')"
  >
    <i :class="['mdi', icon, 'text-[22px] shrink-0 opacity-80']" />
    <span v-if="!mini" class="text-[13px] font-medium tracking-wide truncate flex-1 text-left">{{ label }}</span>
    <SectionNavigationItemExpandableChevron v-if="!mini" :open="open" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  mini?: boolean
  open: boolean
  isActive: boolean
}>()
const emit = defineEmits<{ toggle: [] }>()
</script>
