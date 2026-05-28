<template>
  <p class="text-center text-font-secondary text-sm">
    Copyright &copy; {{ year }} created by
    <strong><a href="" class="no-underline text-font-secondary hover:text-primary transition-colors">{{ author }}</a></strong>
  </p>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ author?: string }>(), { author: 'Vladislav Rumyantsev' })
const year = new Date().getFullYear()
</script>
