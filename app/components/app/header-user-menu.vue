<template>
  <div ref="menuRoot" class="relative">
    <UserMenuTrigger @toggle="open = !open" />
    <UserMenuDropdown :show="open" @close="open = false" />
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
const menuRoot = ref<HTMLElement | null>(null)

function handleOutsideClick(e: MouseEvent) {
  if (menuRoot.value && !menuRoot.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick))
</script>
