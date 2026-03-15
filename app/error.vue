<template>
  <div class="min-h-screen bg-pentanary flex flex-col items-center justify-center px-8">
    <!-- Background decorative circles -->
    <div class="fixed top-[-120px] right-[-120px] w-96 h-96 rounded-full opacity-10 pointer-events-none" style="background: #c0faff" />
    <div class="fixed bottom-[-80px] left-[-80px] w-64 h-64 rounded-full opacity-10 pointer-events-none" style="background: #467b88" />

    <div class="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

      <!-- Error code -->
      <div class="error-code font-bold leading-none select-none mb-2" :style="errorStyle">
        {{ error?.statusCode ?? 500 }}
      </div>

      <!-- Icon -->
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6" :style="iconBgStyle">
        <i class="mdi text-3xl text-white" :class="errorIcon" />
      </div>

      <!-- Title -->
      <h1 class="text-font-primary font-bold text-2xl md:text-3xl mb-3">
        {{ errorTitle }}
      </h1>

      <!-- Message -->
      <p class="text-font-secondary text-sm md:text-base mb-10 leading-relaxed">
        {{ errorMessage }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          class="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-app"
          @click="handleError"
        >
          <i class="mdi mdi-home mr-2" />
          Back to Home
        </button>
        <button
          type="button"
          class="px-6 py-2.5 rounded-full border border-font-secondary/30 text-font-primary text-sm font-semibold hover:border-secondary transition-colors"
          @click="() => history.back()"
        >
          <i class="mdi mdi-arrow-left mr-2" />
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const code = computed(() => props.error?.statusCode ?? 500)

const errorIcon = computed(() => {
  if (code.value === 404) return 'mdi-music-off'
  if (code.value === 403) return 'mdi-lock-outline'
  if (code.value === 401) return 'mdi-account-lock-outline'
  return 'mdi-alert-circle-outline'
})

const errorTitle = computed(() => {
  if (code.value === 404) return 'Track not found'
  if (code.value === 403) return 'Access denied'
  if (code.value === 401) return 'Login required'
  return 'Something went wrong'
})

const errorMessage = computed(() => {
  if (code.value === 404) return 'The page or track you\'re looking for doesn\'t exist or has been removed.'
  if (code.value === 403) return 'You don\'t have permission to access this content.'
  if (code.value === 401) return 'Please log in to continue listening.'
  return 'An unexpected error occurred. Our team has been notified. Please try again later.'
})

const errorStyle = computed(() => {
  const colors: Record<number, string> = {
    404: 'rgba(70,123,136,0.12)',
    403: 'rgba(251,144,57,0.12)',
    401: 'rgba(251,144,57,0.12)',
  }
  return {
    fontSize: 'clamp(100px, 20vw, 180px)',
    color: colors[code.value] ?? 'rgba(13,74,86,0.1)',
    letterSpacing: '-0.05em',
  }
})

const iconBgStyle = computed(() => {
  if (code.value === 404) return 'background: #467b88'
  if (code.value === 403 || code.value === 401) return 'background: #fb9039'
  return 'background: #0D4A56'
})

const handleError = () => clearError({ redirect: '/' })
</script>
