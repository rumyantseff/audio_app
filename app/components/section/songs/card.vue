<template>
  <SharedCard aspect="16/10" @click="emit('play')" @middle-click="openInNewTab">
    <SectionSongsCardCover :src="song.albumCover" :alt="song.songName" />
    <SectionSongsCardFireBadge :date="formattedDate" />
    <SectionSongsCardInfo :song="song" @like="emit('like')" />
    <SharedPlayButton @play="emit('play')" />
  </SharedCard>
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
