<template>
  <li class="relative">
    <!-- L-shaped horizontal connector -->
    <span class="absolute left-0 top-1/2 w-3 h-px bg-font-secondary/30 dark:bg-white/15" />

    <!-- Pill -->
    <NavPill :show="isActive && !hidePill" />

    <NuxtLink
      :to="to"
      class="block ml-4 px-4 py-2 rounded-lg text-sm text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100 hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
      active-class="navActive"
    >
      <span class="truncate">{{ label }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
  hidePill?: boolean
}>()

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>
