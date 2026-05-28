<template>
  <SharedIconButton icon="mdi-repeat" size="sm" @click="emit('click')" />
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>
