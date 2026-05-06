import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/scheduler/') ||
            id.includes('/@mui/') ||
            id.includes('/@emotion/')
          ) {
            return 'ui-vendor'
          }

          if (id.includes('/react-router') || id.includes('/@remix-run/')) {
            return 'router-vendor'
          }
        },
      },
    },
  },
})
