<template>
  <button
    type="button"
    class="w-full flex items-center gap-4 px-2 py-1 rounded-xl cursor-pointer transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
    :class="[
      isActive
        ? 'navActivee font-semibold'
        : 'text-orange-950 dark:text-orange-50'
    ]"
    @click="emit('toggle')"
  >
    <i :class="['mdi', icon, 'text-[20px] shrink-0 opacity-80']" />
    <span v-if="!mini" class="text-[14px] font-medium tracking-wide truncate flex-1 text-left">{{ label }}</span>
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
