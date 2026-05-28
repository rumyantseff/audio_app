<template>
  <SharedCard aspect="10/16">
    <img
      :src="station.cover"
      :alt="station.name"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />

    <SectionRadioCardLiveBadge />

    <SectionRadioCardOverlay :name="station.name" :genre="station.genre" :listeners="station.listeners" />

    <SharedPlayButton />
  </SharedCard>
</template>

<script setup lang="ts">
import type { RadioStation } from '~/types/radio'

defineProps<{ station: RadioStation }>()
</script>
