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
    const bannerGet = (await tiger.get("./server/db/data.json")).data.banner;
    const recommendGet = (await tiger.get("./server/db/data.json")).data
      .recommend;
    const quickVODGet = (await tiger.get("./server/db/data.json")).data
      .quickVOD;
    const realtimeGet = (await tiger.get("./server/db/data.json")).data
      .realtime;
    const liveGet = (await tiger.get("./server/db/data.json")).data.live;
    const onlyTaingGet = (await tiger.get("./server/db/data.json")).data
      .onlyTaing;
    const eventGet = (await tiger.get("./server/db/data.json")).data.event;

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
      <figure id="movie0" class="movie recommendEach">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="pt-2.5 text-gray2">${item.name}</figcaption>
      </figure>
      `;
      insertLast(recommend, template);
    });

    quickVODGet.forEach((item) => {
      const template = /* html */ `
      <figure class="quickEach">
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
      <figure class="realtimeEach">
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
      <div class="liveEach">
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
      <figure class="onlyEach">
      <img src=${item.posterImg.src} alt=${item.posterImg.alt} />
      <figcaption class="sr-only">${item.name}</figcaption>
    </figure>
      `;
      insertLast(onlyTaing, template);
    });

    eventGet.forEach((item) => {
      const template = /* html */ `
      <figure class="eventEach">
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
    speed: 2000,
    pagination: {
      el: ".pagination",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return /* html */ `
        <span class="swiper-pagination-bullet bg-white mr-0"
        tabindex="${index}" role="button" aria-label="Go to slide ${index}"></span>
        `;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
