<template>
  <div class="flex items-center gap-3 px-4 py-4">
    <SectionHeaderUserMenuProfileAvatar />
    <div class="min-w-0">
      <SectionHeaderUserMenuProfileName :name="name" />
      <p class="text-font-secondary dark:text-gray-400 text-xs truncate">{{ email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ name?: string, email?: string }>(), {
  name: 'Vladislav Rumyantsev',
  email: 'vladik.rumyantsev@gmail.com',
})
</script>
