<template>
  <div class="hidden lg:flex items-end relative shrink-0" style="width: 380px; height: 220px; perspective: 1000px;">
    <BannerCoverItem
      v-for="(song, i) in songs"
      :key="song.id"
      :src="song.album_cover"
      :index="i"
      :total="songs.length"
      :song-id="song.id"
      :delay="i * 280"
    />
  </div>
</template>

<script setup lang="ts">
const songs = ref<{ id: number, album_cover: string }[]>([])

onMounted(async () => {
  const client = useSupabaseClient()
  const { data } = await client
    .from('songs')
    .select('id, album_cover')
    .order('date', { ascending: false })
    .limit(5)
  songs.value = (data ?? []).reverse()
})
</script>
