<template>
  <Transition name="menu-slide">
    <div
      v-if="show"
      class="absolute right-0 top-14 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-app z-50 overflow-hidden"
    >
      <SectionHeaderUserMenuProfile />

      <SectionHeaderUserMenuDropdownMenuDivider />

      <SectionHeaderUserMenuDropdownMenuItem to="/profile" icon="mdi-account-outline" @click="emit('close')">
        Profile
      </SectionHeaderUserMenuDropdownMenuItem>
      <SectionHeaderUserMenuDropdownMenuItem to="/settings" icon="mdi-cog-outline" @click="emit('close')">
        Settings
      </SectionHeaderUserMenuDropdownMenuItem>

      <SectionHeaderUserMenuDropdownMenuDivider />

      <SectionHeaderUserMenuDropdownMenuItem to="/logout" icon="mdi-logout-variant" @click="emit('close')">
        Log Out
      </SectionHeaderUserMenuDropdownMenuItem>
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
