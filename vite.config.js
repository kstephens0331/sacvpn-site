import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ This sets the correct root path
  plugins: [react()]
});
  base: '/sacvpn-site/', // 👈 REQUIRED for GitHub Pages
  plugins: [react()],
})
