<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <i class="mdi mdi-music-off text-6xl text-font-secondary/30 mb-4 block" />
      <p class="text-font-secondary text-lg">Track not found</p>
      <button
        type="button"
        class="mt-4 text-secondary hover:text-primary text-sm transition-colors"
        @click="navigateTo('/')"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>
