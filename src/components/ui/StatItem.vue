<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <div class="border-t border-border pt-8">
    <p class="font-serif text-4xl font-medium tracking-tight text-fg md:text-5xl lg:text-6xl">
      {{ value }}
    </p>
    <p class="mt-3 max-w-xs text-sm leading-relaxed text-muted md:text-base">
      {{ label }}
    </p>
  </div>
</template>
