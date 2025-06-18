import pugPlugin from 'vite-plugin-pug'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Указываем HTML файл
      }
    }
  },
  plugins: [pugPlugin({
    localImports: true
  })]
})
