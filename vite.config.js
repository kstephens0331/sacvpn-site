import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ Use this for production deployment at sacvpn.com
  plugins: [react()],
});