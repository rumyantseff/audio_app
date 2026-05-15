<template>
  <div>
    <button
      type="button"
      class="w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl cursor-pointer transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
      :class="[
        isActive
          ? 'navActive font-semibold'
          : 'text-font-secondary dark:text-gray-400 hover:text-font-primary dark:hover:text-gray-100'
      ]"
      @click="open = !open"
    >
      <i :class="['mdi', iconResolved, 'text-[22px] shrink-0 opacity-80']" />
      <span v-if="!mini" class="text-[13px] font-medium tracking-wide truncate flex-1 text-left">{{ label }}</span>
      <i
        v-if="!mini"
        class="mdi mdi-chevron-down text-base transition-transform duration-300 opacity-60"
        :class="{ 'rotate-180': open }"
      />
    </button>

    <Transition name="expand">
      <ul
        v-if="open && !mini"
        class="mt-1 ml-6 relative flex flex-col gap-0.5"
      >
        <span class="absolute left-0 top-0 bottom-3 w-px bg-font-secondary/30 dark:bg-white/15" />
        <NavSubItem
          v-for="sub in children"
          :key="sub.to"
          :to="sub.to"
          :label="sub.label"
          :hide-pill="hidePill"
        />
      </ul>
    </Transition>
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

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.25s ease;
  max-height: 500px;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
</style>
