import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    
    resolve: {
      alias: {
        "@": path.join(import.meta.dirname, "./src")
      }
    }

  }
})
