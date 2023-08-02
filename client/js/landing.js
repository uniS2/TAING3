import { getNode as $ } from "../lib/index.js";

//! 헤더 메뉴, 프로필 지우기
async function ready() {
  const header = await $(".header");
  const nav = await $("nav");
  const form = await $("form");
  const userInfo = await $(".userInfo");

  // header.style.position = "relative";
  nav.style.display = "none";
  form.style.display = "none";
  userInfo.style.display = "none";
}
ready();

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
