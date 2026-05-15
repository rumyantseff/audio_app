<template>
  <div class="w-full px-8 py-12">
    <h1 class="text-font-primary dark:text-gray-100 text-3xl font-bold capitalize">
      {{ prettyName }}
    </h1>
    <p class="text-font-secondary dark:text-gray-400 mt-2">
      Tracks in this genre will be listed here.
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const slug = computed(() => String(route.params.slug ?? ''))
const prettyName = computed(() =>
  slug.value.replace(/-/g, ' ')
)
</script>
