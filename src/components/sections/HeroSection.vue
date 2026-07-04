<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import logo from '@/assets/logo.svg'
import { siteConfig } from '@/config/site.config'
</script>

<template>
  <section class="flex min-h-screen items-center pt-24">
    <div class="mx-auto w-full max-w-6xl px-6 md:px-8">
      <ScrollReveal>
        <div class="mb-12 w-36 md:w-44">
          <img :src="logo" alt="Loftsy" class="h-auto w-full opacity-90" />
        </div>

        <h1
          class="max-w-4xl font-serif text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-tight text-fg"
        >
          {{ siteConfig.hero.headline }}
        </h1>

        <p class="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {{ siteConfig.hero.subtext }}
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button :href="siteConfig.hero.primaryCta.href" variant="primary">
            {{ siteConfig.hero.primaryCta.label }}
          </Button>
          <Button :href="siteConfig.hero.secondaryCta.href" variant="secondary">
            {{ siteConfig.hero.secondaryCta.label }}
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
