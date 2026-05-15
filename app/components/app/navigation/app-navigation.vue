<template>
  <nav
    :class="['fixed left-0 top-0 h-full z-50 flex flex-col bg-pentanary/70 dark:bg-gray-900/70 backdrop-blur-xl backdrop-saturate-150 transition-transform duration-300', isOpen ? 'translate-x-0 overflow-visible' : '-translate-x-full overflow-hidden']"
    :style="{ width: width + 'px' }"
  >
    <NavHeader @close="close" />

    <NavSection>
      <NavItem to="/" icon="mdi-home" label="Home" :hide-pill="!isOpen" @click="close()" />
    </NavSection>

    <NavSection title="Genres" root-class="mt-6 px-8">
      <NavItem icon="mdi-music-circle" label="Styles" :children="genreItems" :hide-pill="!isOpen" />
    </NavSection>

    <NavResizeHandle @start-resize="startResize" />
  </nav>

  <NavOverlay :show="isOpen" @close="close" />
</template>

<script setup lang="ts">
import type { Genre } from '~/types/genre'
import { useGenres } from '~/composables/useGenres'

const { isOpen, close } = useSidebar()
const { width, startResize } = useResizable(240, 4)
const { getAll } = useGenres()

const genres = ref<Genre[]>([])

const genreItems = computed(() =>
  genres.value.map((g: Genre) => ({
    to: `/genres/${g.slug || g.name.toLowerCase().replace(/\s+/g, '-')}`,
    label: g.name,
  }))
)

onMounted(async () => {
  genres.value = await getAll()
})
</script>
