import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@headers': fileURLToPath(new URL('./src/components/headers', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@dummyServices': fileURLToPath(new URL('./src/dummyServices', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/components/UI', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/components/icons', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url))
    },

    extensions: ['.mjs', '.js', '.mts', '.ts', '.vue', '.json']
  }
})
