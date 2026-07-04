<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import { siteConfig } from '@/config/site.config'
</script>

<template>
  <section class="border-t border-border py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-6 md:px-8">
      <ScrollReveal>
        <div class="mx-auto max-w-3xl text-center">
          <h2
            class="font-serif text-4xl font-medium tracking-tight text-fg md:text-5xl lg:text-6xl"
          >
            {{ siteConfig.cta.headline }}
          </h2>
          <p class="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {{ siteConfig.cta.subtext }}
          </p>
          <div class="mt-10">
            <Button :href="siteConfig.cta.button.href" variant="primary">
              {{ siteConfig.cta.button.label }}
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
