import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  server: {
    port: 5173,
    allowedHosts: ['dev.m2developer.com', 'coolify.pve01.prod.uficon.com', 'dapp.coolify.pve01.prod.uficon.com', 'filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com', 'localhost', '127.0.0.1'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor-react';
          if (id.includes('node_modules/react-slick') || id.includes('node_modules/slick-carousel')) return 'vendor-slick';
          if (id.includes('node_modules/@fortawesome')) return 'vendor-fa';
        },
      },
    },
  },
})
