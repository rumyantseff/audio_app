<template>
  <div
    v-if="currentSong"
    class="fixed bottom-2 inset-x-4 md:inset-x-8 z-50 rounded-2xl shadow-app backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-black/5 dark:border-white/10 px-2 py-2"
  >
    <div class="flex items-center gap-4">
      <!-- Left: cover + info -->
      <SectionPlayerBarTrackInfo :song="currentSong" />

      <!-- Center: controls + time + waveform -->
      <div class="flex-1 min-w-0 flex items-center gap-4">
        <SectionPlayerBarControls
          :playing="playing"
          :loaded="loaded"
          @toggle-play="togglePlay"
          @previous="previous"
          @next="next"
        />

        <SectionPlayerBarTime :current="currentTime" :total="duration" />

        <div class="flex-1 min-w-0">
          <SectionTrackWaveform
            :bars="bars"
            :percentage="percentage"
            @seek="seekToPercent"
          />
        </div>
      </div>

      <!-- Right: volume -->
      <div class="hidden lg:flex items-center justify-end shrink-0 pr-2">
        <SectionPlayerVolumeControl />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  currentSong, loaded, playing, percentage, currentTime, duration,
  bars, togglePlay, seekToPercent, next, previous,
} = useAudioPlayer()
</script>
