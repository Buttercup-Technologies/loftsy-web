<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import { siteConfig } from '@/config/site.config'
</script>

<template>
  <section id="services" class="border-t border-border py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-6 md:px-8">
      <ScrollReveal>
        <SectionHeading :title="siteConfig.services.title" />

        <div class="mt-12 grid gap-4 md:grid-cols-2">
          <ServiceCard
            v-for="service in siteConfig.services.items"
            :key="service.title"
            :title="service.title"
            :description="service.description"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
