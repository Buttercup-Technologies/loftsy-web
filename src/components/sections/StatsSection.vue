<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import StatItem from '@/components/ui/StatItem.vue'
import { siteConfig } from '@/config/site.config'
</script>

<template>
  <section id="stats" class="border-t border-border py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-6 md:px-8">
      <ScrollReveal>
        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <StatItem
            v-for="stat in siteConfig.stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
