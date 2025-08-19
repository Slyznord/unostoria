import { defineConfig } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Указываем HTML файл
      }
    }
  },
  plugins: [
    handlebars({
      context: {
        products: Array.from({ length: 10 }, () => ({
          name: 'Костюм voishe из мерсеризованного хлопка',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
          price: '5 600р',
          preview: '/assets/img/catalogue-default.webp',
          url: '/detail'
        }))
      },
      partialDirectory: [
        resolve(__dirname, 'src/components'),
        resolve(__dirname, 'src/modules'),
        resolve(__dirname, 'src/modules/menu'),
        resolve(__dirname, 'src/sections'),
        resolve(__dirname, 'src/sections/home'),
        resolve(__dirname, 'src/icons')
      ]
    })
  ]
})
