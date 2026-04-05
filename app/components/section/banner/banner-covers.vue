<template>
  <div class="hidden lg:block relative shrink-0" style="width: 320px; height: 160px;">
    <BannerCoverItem
      v-for="(song, i) in [...songs].reverse()"
      :key="song.id"
      :src="song.album_cover"
      :index="songs.length - 1 - i"
      :total="songs.length"
      :song-id="song.id"
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
    .order('id', { ascending: false })
    .limit(10)
  songs.value = data ?? []
})
</script>
