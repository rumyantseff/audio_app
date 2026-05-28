<template>
  <div>
    <SectionNavigationItemExpandableHeader
      :icon="iconResolved"
      :label="label"
      :mini="mini"
      :open="open"
      :is-active="isActive"
      @toggle="open = !open"
    />

    <SectionNavigationItemExpandableSubList :show="open && !mini">
      <SectionNavigationSubItem
        v-for="sub in children"
        :key="sub.to"
        :to="sub.to"
        :label="sub.label"
        :hide-pill="hidePill"
      />
    </SectionNavigationItemExpandableSubList>
  </div>
</template>

<script setup lang="ts">
import type { NavSubItem } from '~/types/nav'

const props = defineProps<{
  icon: string
  label: string
  children: NavSubItem[]
  mini?: boolean
  defaultOpen?: boolean
  hidePill?: boolean
}>()

const route = useRoute()
const open = ref(false)

const isActive = computed(() =>
  props.children.some((c: NavSubItem) => route.path === c.to)
)

const iconResolved = computed(() =>
  props.icon.endsWith('-outline') ? props.icon : `${props.icon}-outline`
)

watchEffect(() => {
  if (isActive.value || props.defaultOpen) open.value = true
})
</script>
