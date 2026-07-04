<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import logo from '@/assets/logo.svg'
import { siteConfig } from '@/config/site.config'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'border-b border-border bg-bg/90 backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
      <a href="#" class="block w-28 text-fg md:w-32" aria-label="Loftsy home">
        <img :src="logo" alt="Loftsy" class="h-auto w-full" />
      </a>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        <a
          v-for="item in siteConfig.nav"
          :key="item.href"
          :href="item.href"
          class="text-sm tracking-wide text-muted transition-colors duration-300 hover:text-fg"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center md:hidden"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <span class="relative block h-3.5 w-5">
          <span
            class="absolute left-0 top-0 block h-px w-full bg-fg transition-transform duration-300"
            :class="isMenuOpen ? 'translate-y-1.5 rotate-45' : ''"
          />
          <span
            class="absolute left-0 top-1.5 block h-px w-full bg-fg transition-opacity duration-300"
            :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute left-0 top-3 block h-px w-full bg-fg transition-transform duration-300"
            :class="isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''"
          />
        </span>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav
        v-if="isMenuOpen"
        class="border-t border-border bg-bg px-6 py-6 md:hidden"
        aria-label="Mobile navigation"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="item in siteConfig.nav"
            :key="item.href"
            :href="item.href"
            class="text-base tracking-wide text-fg"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
