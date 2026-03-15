<template>
  <div class="flex flex-wrap justify-center gap-2 mb-2">
    <button v-for="link in links" :key="link" type="button" class="text-font-primary text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/10 transition-colors">
      {{ link }}
    </button>
  </div>
</template>

<script setup lang="ts">
const links = ['Home', 'About Us', 'Contact Us']
</script>
