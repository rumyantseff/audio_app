<template>
  <div
    class="flex items-center gap-3 cursor-pointer group/artist"
    @click.stop="navigateTo(`/artist/${artistId}`)"
  >
    <img
      v-if="avatar"
      :src="resolvedAvatar"
      :alt="name"
      :class="['rounded-full object-cover', avatarSize]"
    />
    <span class="text-font-primary dark:text-gray-400 text-sm font-medium group-hover/artist:text-secondary dark:group-hover/artist:text-tertiary transition-colors">
      {{ name }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    artistId: number
    name: string
    avatar?: string
    size?: 'sm' | 'md'
  }>(),
  { size: 'md' }
)

const avatarSize = computed(() => (props.size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'))
const resolvedAvatar = computed(() =>
  props.avatar?.startsWith('http') || props.avatar?.startsWith('/')
    ? props.avatar
    : `/${props.avatar}`
)
</script>
