<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const rootRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!rootRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )

  observer.observe(rootRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="rootRef"
    class="transition-all duration-[600ms] ease-out"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'"
  >
    <slot />
  </div>
</template>
