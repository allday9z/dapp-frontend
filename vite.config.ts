import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts: ['dev.m2developer.com'],
    proxy: {
      '/img-proxy': {
        target: 'https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/img-proxy/, ''),
      },
    },
  },
})
