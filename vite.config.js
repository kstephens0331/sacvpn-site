import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sacvpn-site/', // 👈 REQUIRED for GitHub Pages
  plugins: [react()],
})