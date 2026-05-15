<template>
  <div class="flex items-center gap-3 px-4 py-4">
    <div class="relative shrink-0">
      <img src="/avatar.jpg" alt="User avatar" class="w-11 h-11 rounded-lg object-cover bg-primary" />
    </div>
    <span class="text-font-primary dark:text-gray-100 text-sm font-semibold">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ name?: string }>(), { name: 'Vladislav Rumyantsev' })
</script>
