<template>
  <div v-if="songs.length" class="flex flex-col">
    <template v-for="item in displayItems" :key="item.kind === 'track' ? `t-${item.song.id}` : 'more'">
      <SectionTrackDetailTracklistTrackRow
        v-if="item.kind === 'track'"
        :index="item.index"
        :name="item.song.songName"
        :active="item.song.id === currentSongId"
        @click="emit('select', item.song)"
      />
      <SectionTrackDetailTracklistMoreRow
        v-else
        @click="navigateTo(`/album/${albumId}`)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const props = defineProps<{
  songs: Song[]
  currentSongId: number
  albumId: number
  hideMore?: boolean
}>()

const emit = defineEmits<{ select: [song: Song] }>()

type DisplayItem =
  | { kind: 'track', song: Song, index: number }
  | { kind: 'more' }

const displayItems = computed<DisplayItem[]>(() => {
  const all = props.songs.map((song: Song, i: number) => ({ kind: 'track' as const, song, index: i + 1 }))
  if (props.hideMore !== true && props.songs.length >= 8) {
    const items: DisplayItem[] = all.slice(0, 7)
    items.push({ kind: 'more' })
    return items
  }
  return all
})
</script>
