<script setup lang="ts">
import BrandGridItem from '@/components/ui/BrandGridItem.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { siteConfig } from '@/config/site.config'
</script>

<template>
  <section id="brands" class="border-t border-border py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-6 md:px-8">
      <ScrollReveal>
        <SectionHeading :title="siteConfig.brands.title" />

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BrandGridItem
            v-for="brand in siteConfig.brands.items"
            :key="brand.name"
            :name="brand.name"
            :logo-url="brand.logoUrl"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
