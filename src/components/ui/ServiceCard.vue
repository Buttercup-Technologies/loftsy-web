<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article
    class="group border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-fg"
  >
    <h3 class="font-serif text-2xl font-medium text-fg md:text-3xl">
      {{ title }}
    </h3>
    <p class="mt-4 text-sm leading-relaxed text-muted md:text-base">
      {{ description }}
    </p>
  </article>
</template>
