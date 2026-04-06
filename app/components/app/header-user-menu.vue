<template>
  <div class="relative" ref="menuRoot">

    <!-- Toggle + Avatar joined block -->
    <div class="flex items-stretch rounded-lg overflow-hidden shadow-app">
      <!-- Theme toggle (left, square-ish) -->
      <ThemeToggle class="rounded-none" />

      <!-- Avatar button (right) -->
      <button type="button" class="relative focus:outline-none" @click="open = !open">
        <img src="/avatar.jpg" alt="User avatar" class="w-10 h-12 object-cover" />
      </button>
    </div>

    <!-- Dropdown -->
    <Transition name="menu-slide">
      <div v-if="open" class="absolute right-0 top-16 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-app z-50 overflow-hidden">
        <div class="flex items-center gap-3 px-4 py-4">
          <div class="relative shrink-0">
            <img src="/avatar.jpg" alt="User avatar" class="w-11 h-11 rounded-lg object-cover bg-primary" />
          </div>
          <span class="text-font-primary dark:text-gray-100 text-sm font-semibold">Vladislav Rumyantsev</span>
        </div>

        <hr class="border-t border-font-secondary/20 dark:border-white/10" />

        <NuxtLink to="/profile" class="flex items-center gap-3 px-4 py-3 text-font-primary dark:text-gray-300 text-sm font-medium hover:bg-pentanary dark:hover:bg-white/5 transition-colors" @click="open = false">
          <i class="mdi mdi-account-cog-outline text-lg" />
          Profile
        </NuxtLink>
        <NuxtLink to="/logout" class="flex items-center gap-3 px-4 py-3 text-font-primary dark:text-gray-300 text-sm font-medium hover:bg-pentanary dark:hover:bg-white/5 transition-colors" @click="open = false">
          <i class="mdi mdi-logout-variant text-lg" />
          Logout
        </NuxtLink>
      </div>
    </Transition>
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

<style scoped>
.menu-slide-enter-active, .menu-slide-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.menu-slide-enter-from, .menu-slide-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
