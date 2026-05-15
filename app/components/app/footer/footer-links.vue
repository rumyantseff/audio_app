<template>
  <div class="flex flex-wrap justify-center gap-2 mb-2">
    <NuxtLink
      v-for="link in FOOTER_LINKS"
      :key="link.to"
      :to="link.to"
      class="text-font-primary text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
    >
      {{ link.label }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { FOOTER_LINKS } from '~/constants/footer'
</script>
