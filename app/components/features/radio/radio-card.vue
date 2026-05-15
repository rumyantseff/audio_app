<template>
  <UiCard aspect="10/16">
    <img
      :src="station.cover"
      :alt="station.name"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />

    <UiBadge class="absolute top-4 right-4">
      <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      <span>LIVE</span>
    </UiBadge>

    <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

    <div class="absolute inset-x-0 bottom-0 p-5">
      <h3 class="text-white text-xl font-bold truncate leading-tight">{{ station.name }}</h3>
      <p class="text-white/80 text-sm truncate mt-1">{{ station.genre }}</p>
      <div class="mt-3 text-white/90 text-xs font-medium flex items-center gap-1.5">
        <UiStats icon="mdi-account-multiple" :value="station.listeners" />
        <span>listeners</span>
      </div>
    </div>

    <UiPlayButton />
  </UiCard>
</template>

<script setup lang="ts">
import type { RadioStation } from '~/types/radio'

defineProps<{ station: RadioStation }>()
</script>
