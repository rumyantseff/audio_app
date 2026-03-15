<template>
  <div class="flex justify-center gap-2">
    <button v-for="icon in icons" :key="icon" type="button" class="w-9 h-9 flex items-center justify-center text-font-primary hover:text-primary transition-colors">
      <i :class="['mdi', icon, 'text-xl']" />
    </button>
  </div>
</template>

<script setup lang="ts">
const icons = ['mdi-application-outline', 'mdi-github', 'mdi-linkedin']
</script>
