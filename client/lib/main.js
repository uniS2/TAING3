import { tiger, getNode as $, insertLast } from "./index.js";

const recommend = $(".recommend");
const quickVOD = $("#quickVOD");
const realtime = $("#realtime");
const live = $("#live");
const onlyTaing = $("#onlyTaing");
const event = $("#event");
const banner = $(".swiper-wrapper");

async function renderProgram() {
  try {
    const bannerGet = (await tiger.get("http://localhost:3000/banner")).data;
    const recommendGet = (await tiger.get("http://localhost:3000/recommend"))
      .data;
    const quickVODGet = (await tiger.get("http://localhost:3000/quickVOD"))
      .data;
    const realtimeGet = (await tiger.get("http://localhost:3000/realtime"))
      .data;
    const liveGet = (await tiger.get("http://localhost:3000/live")).data;
    const onlyTaingGet = (await tiger.get("http://localhost:3000/onlyTaing"))
      .data;
    const eventGet = (await tiger.get("http://localhost:3000/event")).data;

    await bannerGet.forEach((item) => {
      const template = /* html */ `
      <div class="swiper-slide">
            <img src=${item.img.src} alt=${item.img.alt} />
            <div class="absolute top-[68%] left-[4%]">${item.name}</div>
        </div>
      `;
      insertLast(banner, template);
    });
    swiper();

    recommendGet.forEach((item) => {
      const template = /* html */ `
      <figure id="movie0" class="movie recommendEach inline-block pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="pt-2.5 text-gray2">${item.name}</figcaption>
      </figure>
      `;
      insertLast(recommend, template);
    });

    quickVODGet.forEach((item) => {
      const template = /* html */ `
      <figure class="quickEach pr-3 inline-block transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="mt-2.5">
        <h4>${item.name}</h4><span class="text-gray3">${item.episode}</span>
      </figcaption>
    </figure>
      `;
      insertLast(quickVOD, template);
    });

    realtimeGet.forEach((item) => {
      const template = /* html */ `
      <figure class="realtimeEach inline-block mb-[50px] relative pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="-mt-6">
      <span class="absolute top-[95%] italic text-7xl m:text-6xl font-bold">${item.rank}</span>
        <span class="text-gray2 absolute top-[110%] left-[35%] m:left-[30%]">${item.name}</span>
      </figcaption>
      </figure>
      `;
      insertLast(realtime, template);
    });

    liveGet.forEach((item) => {
      const template = /* html */ `
      <div class="liveEach inline-block mb-[50px] pr-3 relative transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <div class="absolute flex">
        <h4 class="italic text-7xl font-bold">${item.index}</h4>
        <div class="mt-2.5 pl-5">
          <h5 class="text-gray2">${item.air}</h5>
          <h6 class="text-gray3 text-sm">${item.name}</h6>
          <span class="text-gray4 text-sm">${item.rating}</span>
        </div>
      </div>
    </div>
      `;
      insertLast(live, template);
    });

    onlyTaingGet.forEach((item) => {
      const template = /* html */ `
      <figure class="onlyEach inline-block pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.posterImg.src} alt=${item.posterImg.alt} />
      <figcaption class="sr-only">${item.name}</figcaption>
    </figure>
      `;
      insertLast(onlyTaing, template);
    });

    eventGet.forEach((item) => {
      const template = /* html */ `
      <figure class="eventEach inline-block pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="sr-only">${item.name}</figcaption>
    </figure>
      `;
      insertLast(event, template);
    });
  } catch (err) {
    console.log(err);
    // renderEmptyCard(userCardInner);
    // location.href = '404.html'
  }
}

renderProgram();

function swiper() {
  new Swiper(".swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
    // parallax: true,
    speed: 2000,
    pagination: {
      el: ".pagination",
      type: "bullets",
      clickable: true,
      // bulletClass: "bullet",
      // bulletActiveClass: "is-active",
      renderBullet: function (index, className) {
        return /* html */ `
        <span class="swiper-pagination-bullet bg-white mr-0"
        tabindex="${index}" role="button" aria-label="Go to slide ${index}"></span>
        `;
      },
    },
    navigation: {
      // 네비게이션 설정
      nextEl: ".swiper-button-next", // 다음 버튼 클래스명
      prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
    },
    a11y: {
      prevSlideMessage: "이전 슬라이드",
      nextSlideMessage: "다음 슬라이드",
      slideLabelMessage:
        "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
    },
    on: {
      init: function () {
        let thisSlide = this;
        let autoPlayBtn = document.querySelector(
          ".wrap-autoplay-control > button",
        );
        let autoPlayBtnIcon = document.querySelector(
          ".wrap-autoplay-control > button > i",
        );
        autoPlayBtn.addEventListener("click", (e) => {
          let autoPlayState = autoPlayBtn.getAttribute("aria-pressed");
          if (autoPlayState === "false") {
            autoPlayBtn.setAttribute("aria-pressed", "true");
            autoPlayBtnIcon.classList.toggle("fa-pause");
            autoPlayBtnIcon.classList.toggle("fa-play");
            thisSlide.autoplay.stop();
          } else if (autoPlayState === "true") {
            autoPlayBtn.setAttribute("aria-pressed", "false");
            autoPlayBtnIcon.classList.toggle("fa-pause");
            autoPlayBtnIcon.classList.toggle("fa-play");
            thisSlide.autoplay.start();
          }
        });
      },
    },
  });
}
