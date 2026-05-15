<template>
  <nav
    :class="['fixed left-0 top-0 h-full z-50 flex flex-col bg-pentanary dark:bg-gray-900 transition-transform duration-300', isOpen ? 'translate-x-0' : '-translate-x-full']"
    :style="{ width: width + 'px' }"
  >
    <NavHeader @close="close" />

    <NavSection>
      <NavItem to="/" icon="mdi-home" label="Home" @click="close()" />
    </NavSection>

    <NavSection title="Genres" root-class="mt-6 px-8">
      <NavItem to="/shops" icon="mdi-store" label="Styles" @click="close()" />
    </NavSection>

    <NavResizeHandle @start-resize="startResize" />
  </nav>

  <NavOverlay :show="isOpen" @close="close" />
</template>

<script setup lang="ts">
const { isOpen, close } = useSidebar()
const { width, startResize } = useResizable(240, 4)
</script>
