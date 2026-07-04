<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-bg">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
