import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        v1: fileURLToPath(new URL('./index-v1.html', import.meta.url)),
        v2: fileURLToPath(new URL('./index-v2.html', import.meta.url)),
        v3: fileURLToPath(new URL('./index-v3.html', import.meta.url)),
        v4: fileURLToPath(new URL('./index-v4.html', import.meta.url)),
      },
    },
  },
})
