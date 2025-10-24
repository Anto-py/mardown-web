import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/').pop()}/` : '/',
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts'
  }
})
