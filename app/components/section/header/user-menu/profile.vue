<template>
  <div class="flex items-center gap-3 px-4 py-4">
    <SectionHeaderUserMenuProfileAvatar />
    <SectionHeaderUserMenuProfileName :name="name" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ name?: string }>(), { name: 'Vladislav Rumyantsev' })
</script>
