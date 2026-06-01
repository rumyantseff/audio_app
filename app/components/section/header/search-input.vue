<template>
  <input
    ref="inputEl"
    :value="modelValue"
    type="text"
    :placeholder="placeholder"
    class="flex-1 min-w-0 h-10 pr-2 bg-transparent text-sm text-font-primary dark:text-gray-100 placeholder-font-secondary dark:placeholder-gray-500 outline-none"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @keydown.enter="emit('submit')"
    @keydown.escape="emit('close')"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    placeholder?: string
    autoFocus?: boolean
  }>(),
  { placeholder: 'Search...', autoFocus: false }
)

const emit = defineEmits<{
  'update:modelValue': [string]
  submit: []
  close: []
}>()

const inputEl = ref<HTMLInputElement | null>(null)

onMounted(async () => {
  if (props.autoFocus) {
    await nextTick()
    inputEl.value?.focus()
  }
})

defineExpose({ focus: () => inputEl.value?.focus() })
</script>
