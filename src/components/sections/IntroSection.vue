<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import { siteConfig } from '@/config/site.config'
</script>

<template>
  <section id="intro" class="py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-6 md:px-8">
      <ScrollReveal>
        <p class="max-w-3xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
          {{ siteConfig.intro.text }}
        </p>
      </ScrollReveal>
    </div>
  </section>
</template>
