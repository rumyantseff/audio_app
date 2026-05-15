<template>
  <UiCarouselSection title="Popular Radio Stations" padding-bottom-class="pb-6">
    <div v-for="station in stations" :key="station.id" class="flex-shrink-0" style="width: 160px">
      <RadioCard :station="station" />
    </div>
  </UiCarouselSection>
</template>

<script setup lang="ts">
import type { RadioStation } from '~/types/radio'

const { getRadioStations } = useSupabaseSongs()
const stations = ref<RadioStation[]>([])

onMounted(async () => {
  stations.value = await getRadioStations()
})
</script>
