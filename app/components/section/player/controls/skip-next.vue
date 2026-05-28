<template>
  <SharedIconButton icon="mdi-skip-next-outline" size="sm" @click="emit('click')" />
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>
