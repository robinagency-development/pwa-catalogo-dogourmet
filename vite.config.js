import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['pwa-icon.svg'],
      manifest: {
        name: 'Dogourmet - Catálogo',
        short_name: 'Dogourmet',
        description: 'Catálogo offline de productos Dogourmet para tu mascota.',
        theme_color: '#008dc1',
        background_color: '#008dc1',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        lang: 'es',
        icons: [
          {
            src: '/pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        navigateFallback: '/index.html',
        maximumFileSizeToCacheInBytes: 16 * 1024 * 1024,
      },
    }),
  ],
})
