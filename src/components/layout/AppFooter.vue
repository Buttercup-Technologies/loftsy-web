<script setup lang="ts">
import { siteConfig } from '@/config/site.config'
</script>

<template>
  <footer class="border-t border-border py-10">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-8">
      <p class="text-sm text-muted">{{ siteConfig.footer.copyright }}</p>
      <p class="font-serif text-lg text-fg">{{ siteConfig.name }}</p>
    </div>
  </footer>
</template>
