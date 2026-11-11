import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // flowbite-vue is symlinked from ../sqrcz-flowbite-vue; without this its
    // `import 'vue'` would resolve to that repo's own copy of Vue.
    dedupe: ['vue'],
  },
})
