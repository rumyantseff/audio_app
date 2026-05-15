<template>
  <div class="relative">
    <!-- Pill on parent row, only when parent itself is the active leaf route -->
    <NavPill
      v-if="!children && to"
      :show="isOwnActive && !hidePill"
      position-style="right: -2.25rem; top: 1.4rem; transform: translateY(-50%)"
    />

    <NavItemLink
      v-if="!children && to"
      :to="to"
      :icon="icon"
      :label="label"
      :mini="mini"
    />

    <NavItemExpandable
      v-else-if="children"
      :icon="icon"
      :label="label"
      :children="children"
      :mini="mini"
      :default-open="defaultOpen"
      :hide-pill="hidePill"
    />
  </div>
</template>

<script setup lang="ts">
import type { NavSubItem } from '~/types/nav'

const props = defineProps<{
  to?: string
  icon: string
  label: string
  children?: NavSubItem[]
  mini?: boolean
  defaultOpen?: boolean
  hidePill?: boolean
}>()

const route = useRoute()
const isOwnActive = computed(() => !!props.to && route.path === props.to)
</script>
