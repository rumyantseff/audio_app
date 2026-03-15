<template>
  <footer class="mt-16 py-8 rounded-xl bg-pentanary">
    <FooterLinks />
    <FooterSocials />
    <hr class="border-t border-font-secondary/30 my-4 mx-auto max-w-sm" />
    <p class="text-center text-font-secondary text-sm">
      Copyright &copy; {{ year }} created by
      <strong><a href="" class="no-underline text-font-secondary hover:text-primary transition-colors">Vladislav Rumyantsev</a></strong>
    </p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
