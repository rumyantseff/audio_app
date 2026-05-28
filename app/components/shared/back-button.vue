<template>
  <button
    type="button"
    class="flex items-center gap-2 text-font-secondary hover:text-font-primary dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-sm font-medium"
    @click="onClick"
  >
    <i class="mdi mdi-arrow-left text-lg" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  to?: string
  label?: string
}
const props = withDefaults(defineProps<Props>(), { label: 'Back' })

const emit = defineEmits<{ click: [] }>()
const router = useRouter()

function onClick() {
  emit('click')
  if (props.to) navigateTo(props.to)
  else router.back()
}
</script>
