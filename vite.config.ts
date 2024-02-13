import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
  '/contact',
  '/portfolio',
  '/portfolio/vc-chatbot',
  '/about'
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Sitemap({ dynamicRoutes, hostname: 'https://mcarter.consulting/' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
