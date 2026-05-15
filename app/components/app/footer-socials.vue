<template>
  <div class="flex justify-center gap-2">
    <a
      v-for="social in FOOTER_SOCIALS"
      :key="social.icon"
      :href="social.href"
      :aria-label="social.label"
      target="_blank"
      rel="noopener noreferrer"
      class="w-9 h-9 flex items-center justify-center text-font-primary hover:text-primary transition-colors"
    >
      <i :class="['mdi', social.icon, 'text-xl']" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { FOOTER_SOCIALS } from '~/constants/footer'
</script>
