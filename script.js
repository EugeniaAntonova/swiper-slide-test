const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiperTopElement = document.querySelector('.swiper.top');

const swiperTop = new Swiper(".swiper.top", {
  spaceBetween: 32,
  loop: true,
  centeredSlides: true,
  autoplay: {
  delay: 5000,
  disableOnInteraction: false
  },
  speed: 650,
  pagination: {
  el: ".swiper-pagination",
  clickable: true
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
  },
  mousewheel: true,
  keyboard: {
  enabled: true,
  onlyInViewport: true,
  },   
  longSwipesRatio: 0.1,
  grabCursor: true,
  on: {
    autoplayTimeLeft(s, time, progress) {
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// попробовала сделать остановку авто-перемотки, если пользователь наводит на слайдер - чтобы если он хочет сам перемотать или что-то рассмотреть/прочитать, то слайдер бы его подождал
swiperTopElement.addEventListener('pointerenter', (evt) => {
  swiperTop.autoplay.stop();
});
swiperTopElement.addEventListener('pointerleave', (evt) => {
  swiperTop.autoplay.start();
});


// swiper-bottom

const swiperBottom = new Swiper('.swiper.bottom', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 650,
  spaceBetween: 32,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    991: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1280: {
      slidesPerView: 6,
    },
  },
    watchOverflow: true,
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //     hide: false,
  //     draggable: true,
  //     snapOnRelease: true,
  // },
    mousewheel: true,
  keyboard: {
  enabled: true,
  onlyInViewport: true,
  },   
  longSwipesRatio: 0.25,
  grabCursor: true,
})

