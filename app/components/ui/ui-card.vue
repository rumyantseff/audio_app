<template>
  <div
    :class="[
      'group relative overflow-hidden cursor-pointer transition-all duration-300 ease-out will-change-transform',
      rounded,
      shadow ? 'shadow-app' : '',
      ring ? 'ring-4 ring-white/90 dark:ring-white/80 ring-offset-0' : '',
      lift ? 'hover:-translate-y-2 hover:shadow-[rgba(70,123,136,0.25)_0px_20px_40px]' : '',
      aspectClass,
      bgClass,
    ]"
    @click="emit('click', $event)"
    @mouseup.middle.prevent="emit('middleClick', $event)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    aspect?: '16/10' | '10/16' | '1/1' | 'auto'
    ring?: boolean
    lift?: boolean
    shadow?: boolean
    rounded?: string
    bgClass?: string
  }>(),
  {
    aspect: 'auto',
    ring: true,
    lift: true,
    shadow: true,
    rounded: 'rounded-3xl',
    bgClass: 'bg-gray-200 dark:bg-gray-800',
  }
)

const emit = defineEmits<{ click: [Event]; middleClick: [Event] }>()

const aspectClass = computed(() => {
  switch (props.aspect) {
    case '16/10': return 'aspect-[16/10]'
    case '10/16': return 'aspect-[10/16]'
    case '1/1':   return 'aspect-square'
    default:      return ''
  }
})
</script>
