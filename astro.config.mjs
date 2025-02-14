import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [
    react({
      strictMode: false
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})
