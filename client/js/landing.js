const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  // direction: "horizontal",
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// t = $(this);
// t.addClass('swiepr-' + index);

const swiper2 = new Swiper(".swiper2", {
  // autoplay: {
  //   delay: 0, //add
  //   disableOnInteraction: false,
  // },
  // speed: 7000,
  // loop: true,
  // loopAdditionalSlides: 1,
  // // slidesPerView: ,
  // slidesPerView: "auto",
  // centeredSlides: true,
  // loop: true,
  // loopedSlides: true,
  // autoplay: true,
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
  // autoplay: {
  //   delay: 0, //add
  //   disableOnInteraction: false,
  // },
  // speed: 7000,
  // loop: true,
  // loopAdditionalSlides: 1,
  // // slidesPerView: ,
  // slidesPerView: "auto",
  // centeredSlides: true,
  // loop: true,
  // loopedSlides: true,
  // autoplay: true,
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
