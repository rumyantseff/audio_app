<template>
  <button
    type="button"
    class="flex items-center justify-center text-font-primary hover:opacity-70 dark:text-gray-300 dark:hover:text-white transition-all"
    @click="onClick"
  >
    <i class="mdi mdi-chevron-left text-4xl" />
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
