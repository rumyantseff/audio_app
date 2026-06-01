<template>
  <!-- Mobile fullscreen open -->
  <SectionHeaderSearchMobile v-if="isOpen && isMobile" v-model="query" @close="close" />

  <template v-else>
    <SectionHeaderSearchDesktop v-model="query" :is-open="isOpen" @toggle="toggle" @close="close" @search="runSearch" />
    <SectionHeaderSearchTriggerButton @click="open" />
  </template>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const isMobile = ref(false)
const query = ref('')

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

function open() {
  isOpen.value = true
}

function toggle() {
  isOpen.value = !isOpen.value
  if (!isOpen.value) query.value = ''
}

function close() {
  isOpen.value = false
  query.value = ''
}

function runSearch(q: string) {
  // TODO: wire up to a real search results page/endpoint once it exists.
  // For now the button just triggers the search action with the current query.
  console.info('[search] query:', q)
}
</script>
