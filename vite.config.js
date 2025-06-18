import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.pug'
    }
  },
  plugins: [pugPlugin()]
})
