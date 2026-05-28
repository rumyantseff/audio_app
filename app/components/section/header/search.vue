<template>
  <!-- Mobile fullscreen open -->
  <SectionHeaderSearchMobile v-if="isOpen && isMobile" v-model="query" @close="close" />

  <template v-else>
    <SectionHeaderSearchDesktop v-model="query" :is-open="isOpen" @toggle="toggle" @close="close" />
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
</script>
