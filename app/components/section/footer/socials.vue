<template>
  <div class="flex justify-center gap-2">
    <SectionFooterSocialsIconLink
      v-for="social in FOOTER_SOCIALS"
      :key="social.icon"
      :href="social.href"
      :label="social.label"
      :icon="social.icon"
    />
  </div>
</template>

<script setup lang="ts">
import { FOOTER_SOCIALS } from '~/constants/footer'
</script>
