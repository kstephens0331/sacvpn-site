import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
<<<<<<< HEAD
  base: '/', // ✅ This sets the correct root path
  plugins: [react()]
});
=======
  base: '/sacvpn-site/', // 👈 REQUIRED for GitHub Pages
  plugins: [react()],
})
>>>>>>> 90ad302 (large update to different things)
