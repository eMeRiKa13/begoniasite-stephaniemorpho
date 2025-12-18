import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    allowedHosts: [
      'stephanie-48.localcan.dev'
    ]
  }
})
