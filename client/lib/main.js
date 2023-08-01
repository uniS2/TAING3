import { tiger, getNode as $, insertLast } from "./index.js";

const recommend = $(".recommend");
const quickVOD = $("#quickVOD");
const realtime = $("#realtime");
const live = $("#live");
const onlyTaing = $("#onlyTaing");
const event = $("#event");

async function renderProgram() {
  try {
    const response = await tiger.get("./server/db/program.json");
    const recommendData = response.data.recommend;
    const quickVODData = response.data.quickVOD;
    const realtimeData = response.data.realtime;
    const liveData = response.data.live;
    const onlyTaingData = response.data.onlyTaing;
    const eventData = response.data.event;

    if (!recommendData.length) {
      return;
    }

    recommendData.forEach((item) => {
      const template = /* html */ `
      <figure id="movie0" class="movie recommendEach pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="pt-2.5 text-gray2">${item.name}</figcaption>
      </figure>
      `;
      insertLast(recommend, template);
    });

    quickVODData.forEach((item) => {
      const template = /* html */ `
      <figure class="quickEach pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="mt-2.5">
        <h4>${item.name}</h4><span class="text-gray3">${item.episode}</span>
      </figcaption>
    </figure>
      `;
      insertLast(quickVOD, template);
    });

    realtimeData.forEach((item) => {
      const template = /* html */ `
      <figure class="realtimeEach mb-[50px] relative pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.img.src} alt=${item.img.alt} />
      <figcaption class="-mt-6">
        <span class="absolute top-[95%] italic text-7xl m:text-6xl font-bold">${item.rank}</span>
        <span class="text-gray2 absolute top-[110%] left-[30%] m:left-[29%]">${item.name}</span>
      </figcaption>
      </figure>
      `;
      insertLast(realtime, template);
    });

    liveData.forEach((item) => {
      const template = /* html */ `
      <div class="liveEach mb-[50px] pr-3 relative transition-transform ease-in-out duration-500 hover:-translate-y-4">
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

    onlyTaingData.forEach((item) => {
      const template = /* html */ `
      <figure class="onlyEach pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
      <img src=${item.posterImg.src} alt=${item.posterImg.alt} />
      <figcaption class="sr-only">${item.name}</figcaption>
    </figure>
      `;
      insertLast(onlyTaing, template);
    });

    eventData.forEach((item) => {
      const template = /* html */ `
      <figure class="eventEach pr-3 transition-transform ease-in-out duration-500 hover:-translate-y-4">
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
