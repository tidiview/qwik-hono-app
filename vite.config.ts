import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'

export default defineConfig({
  build: {
    outDir: "dist"
  },
  plugins: [cloudflare(), ssrPlugin()]
})
