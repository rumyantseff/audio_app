<template>
  <button
    type="button"
    :class="[
      'relative w-6 h-12 border transition-all duration-500 overflow-hidden shrink-0',
      isDark ? 'bg-primary border-primary' : 'bg-quanterary border-quanterary',
    ]"
    @click="toggle"
  >
    <!-- Sliding circle with icon -->
    <span
      :class="[
        'absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded shadow-md transition-all duration-500 flex items-center justify-center',
        isDark ? 'top-[calc(100%-2rem)] bg-white' : 'top-1 bg-white',
      ]"
    >
      <i
        :class="[
          'mdi text-xs transition-all duration-500',
          isDark ? 'mdi-moon-waning-crescent text-primary' : 'mdi-white-balance-sunny text-quanterary',
        ]"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
const { isDark, toggle } = useColorMode()
</script>
