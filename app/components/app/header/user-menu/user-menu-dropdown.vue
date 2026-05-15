<template>
  <Transition name="menu-slide">
    <div
      v-if="show"
      class="absolute right-0 top-16 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-app z-50 overflow-hidden"
    >
      <UserMenuProfile />

      <hr class="border-t border-font-secondary/20 dark:border-white/10" />

      <NuxtLink
        to="/profile"
        class="flex items-center gap-3 px-4 py-3 text-font-primary dark:text-gray-300 text-sm font-medium hover:bg-pentanary dark:hover:bg-white/5 transition-colors"
        @click="emit('close')"
      >
        <i class="mdi mdi-account-cog-outline text-lg" />
        Profile
      </NuxtLink>
      <NuxtLink
        to="/logout"
        class="flex items-center gap-3 px-4 py-3 text-font-primary dark:text-gray-300 text-sm font-medium hover:bg-pentanary dark:hover:bg-white/5 transition-colors"
        @click="emit('close')"
      >
        <i class="mdi mdi-logout-variant text-lg" />
        Logout
      </NuxtLink>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>()
const emit = defineEmits<{ close: [] }>()
</script>

<style scoped>
.menu-slide-enter-active, .menu-slide-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.menu-slide-enter-from, .menu-slide-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
