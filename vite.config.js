import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://<erihedDev>.github.io/<portfolio>/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
