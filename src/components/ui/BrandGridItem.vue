<script setup lang="ts">
defineProps<{
  name: string
  logoUrl?: string
}>()
</script>

<template>
  <div
    class="flex min-h-24 items-center justify-center border border-border px-6 py-8 transition-colors duration-300 hover:border-fg"
  >
    <img
      v-if="logoUrl"
      :src="logoUrl"
      :alt="name"
      class="max-h-10 max-w-full object-contain opacity-80 grayscale"
    />
    <span
      v-else
      class="font-serif text-xl font-medium tracking-wide text-fg md:text-2xl"
    >
      {{ name }}
    </span>
  </div>
</template>
