<template>
  <div class="flex flex-wrap justify-center gap-2 mb-2">
    <SectionFooterLinksLink
      v-for="link in FOOTER_LINKS"
      :key="link.to"
      :to="link.to"
    >
      {{ link.label }}
    </SectionFooterLinksLink>
  </div>
</template>

<script setup lang="ts">
import { FOOTER_LINKS } from '~/constants/footer'
</script>
