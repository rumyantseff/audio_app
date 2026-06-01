<template>
  <div class="relative rounded-2xl overflow-hidden px-8 pt-24 pb-8 min-h-[calc(100vh-9rem)]">
    <SectionTrackDetailHeroBg :image="song.artistAvatar" />

    <SharedBackButton to="/" class="absolute top-6 left-6 z-10" />

    <!-- Upper row: left (cover + info) / right (tracklist) -->
    <div class="relative z-10 flex flex-col md:flex-row gap-10 items-start mb-8">
      <div class="flex flex-col md:flex-row gap-10 items-start flex-1 min-w-0">
        <SectionTrackDetailCover :src="song.albumCover" :alt="song.albumName" :album-id="song.albumId" />

        <SectionTrackDetailInfoPanel>
          <SectionTrackHeroInfo :song="song" />
          <SectionTrackStats :song="song" />
        </SectionTrackDetailInfoPanel>
      </div>

      <div class="w-full md:w-[28rem] lg:w-[48rem] shrink-0">
        <SectionTrackDetailTracklist
          :songs="albumTracks"
          :current-song-id="song.id"
          :album-id="song.albumId"
          @select="onSelectTrack"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

const props = defineProps<{ song: Song }>()

const { getSongsByAlbum } = useSupabaseSongs()
const { playSong } = useAudioPlayer()

const albumTracks = ref<Song[]>([])

function onSelectTrack(s: Song) {
  navigateTo(`/track/${s.id}`)
}

async function loadAlbumTracks() {
  albumTracks.value = await getSongsByAlbum(props.song.albumId)
  // Autoplay the opened track within its album queue (preserves prior behavior)
  playSong(props.song, albumTracks.value)
}

watch(() => props.song.id, loadAlbumTracks, { immediate: true })
</script>
