import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts: ['dev.m2developer.com', 'coolify.pve01.prod.uficon.com', 'filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com', 'localhost', '127.0.0.1'],
  },
})
