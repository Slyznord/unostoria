import Swiper from 'swiper'
import 'swiper/css'

document.addEventListener('DOMContentLoaded', () => {
  const thumb_products_swiper = new Swiper('.product-slider', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
  })
  const product_swiper = new Swiper('.thumb-product-slider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: thumb_products_swiper
    }
  })

  // Ручная синхронизация через события
  product_swiper.on('slideChange', function () {
    // При изменении основного слайдера обновляем миниатюры
    if (thumb_products_swiper && !thumb_products_swiper.destroyed) {
      thumb_products_swiper.slideTo(product_swiper.activeIndex)
    }
  })

  thumb_products_swiper.on('click', function () {
    // При клике на миниатюру переключаем основной слайдер
    if (product_swiper && !product_swiper.destroyed) {
      product_swiper.slideTo(thumb_products_swiper.clickedIndex)
    }
  })
})
