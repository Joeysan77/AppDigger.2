import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // pick your port
    strictPort: true, // don’t auto-switch to another port
  },
})