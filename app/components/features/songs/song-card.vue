<template>
  <UiCard aspect="16/10" @click="emit('play')" @middle-click="openInNewTab">
    <img
      :src="song.albumCover"
      :alt="song.songName"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />

    <UiBadge class="absolute top-4 right-4">
      <i class="mdi mdi-fire text-quanterary text-sm" />
      <span>{{ formattedDate }}</span>
    </UiBadge>

    <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

    <div class="absolute inset-x-0 bottom-0 p-5 flex items-end gap-4">
      <div class="flex-1 min-w-0">
        <h3 class="text-white text-xl font-bold truncate leading-tight">{{ song.songName }}</h3>
        <p
          class="text-white/80 text-sm truncate mt-1 hover:text-tertiary transition-colors"
          @click.stop="navigateTo(`/artist/${song.artistId}`)"
        >
          {{ song.artistName }}
        </p>

        <div class="flex items-center gap-4 mt-3 text-white/90 text-xs font-medium">
          <UiStats icon="mdi-headphones" :value="song.hears" />
          <UiStats icon="mdi-heart" :value="song.likes" clickable @click="emit('like')" />
        </div>
      </div>

      <div
        class="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-lg ring-2 ring-white/30 cursor-pointer hover:ring-tertiary transition-all"
        @click.stop="navigateTo(`/album/${song.albumId}`)"
      >
        <img :src="song.albumCover" :alt="song.albumName" class="w-full h-full object-cover" />
      </div>
    </div>

    <UiPlayButton @play="emit('play')" />
  </UiCard>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const props = defineProps<{ song: Song }>()
const emit = defineEmits<{ play: []; like: [] }>()

const formattedDate = computed(() => {
  const d = new Date(props.song.date)
  if (isNaN(d.getTime())) return props.song.date
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yy = String(d.getFullYear()).slice(-2)
  return `${dd}.${mm}.${yy}`
})

function openInNewTab() {
  window.open(`/track/${props.song.id}`, '_blank')
}
</script>
