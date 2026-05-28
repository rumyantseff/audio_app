<template>
  <div :class="['relative rounded-xl overflow-hidden flex-shrink-0 shadow-sm', sizeClass]">
    <img :src="src" :alt="alt" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    <template v-if="withPlay">
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 rounded-xl" />
      <SharedPlayButton size="sm" @play="emit('play')" />
    </template>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    size?: 'sm' | 'md' | 'lg'
    withPlay?: boolean
  }>(),
  { alt: '', size: 'md', withPlay: false }
)

const emit = defineEmits<{ play: [] }>()

const sizeClass = computed(() => ({
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
}[props.size]))
</script>
