const swiper1 = new Swiper(".swiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  speed: 7000,
  loop: true,
  slidesPerView: "auto",
  loopedSlides: 5, //noSwiping : true,
  observer: true,
  observeParents: true,
  spaceBetween: 10,
});

const swiper3 = new Swiper(".swiper3", {
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  speed: 6000,
  loop: true,
  slidesPerView: "auto",
  loopedSlides: 5, //noSwiping : true,
  observer: true,
  observeParents: true,
  spaceBetween: 10,
});
