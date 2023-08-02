const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");
const slider2 = document.querySelector(".slider2");
const btnLeft2 = document.getElementById("moveLeft2");
const btnRight2 = document.getElementById("moveRight2");
const slider3 = document.querySelector(".slider3");
const btnLeft3 = document.getElementById("moveLeft3");
const btnRight3 = document.getElementById("moveRight3");
const slider4 = document.querySelector(".slider4");
const btnLeft4 = document.getElementById("moveLeft4");
const btnRight4 = document.getElementById("moveRight4");
const slider5 = document.querySelector(".slider5");
const btnLeft5 = document.getElementById("moveLeft5");
const btnRight5 = document.getElementById("moveRight5");
const slider6 = document.querySelector(".slider6");
const btnLeft6 = document.getElementById("moveLeft6");
const btnRight6 = document.getElementById("moveRight6");

const defaultOptions = {
  d: 7,
  t: 4,
  m: 2,
};

function left(slideMain, slideEach) {
  let { d, t, m } = defaultOptions;

  let movieWidth = document
    .querySelector(slideEach)
    .getBoundingClientRect().width;
  let scrollDistance;

  if (window.innerWidth >= 1280) scrollDistance = movieWidth * d;
  else if (window.innerWidth >= 768 && window.innerWidth < 1280)
    scrollDistance = movieWidth * t;
  else if (window.innerWidth >= 320 && window.innerWidth < 768)
    scrollDistance = movieWidth * m;

  slideMain.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: "smooth",
  });
}

function right(slideMain, slideEach, defaultOptions) {
  let { d, t, m } = defaultOptions;

  let movieWidth = document
    .querySelector(slideEach)
    .getBoundingClientRect().width;
  let scrollDistance;

  if (window.innerWidth >= 1280) scrollDistance = movieWidth * d;
  else if (window.innerWidth >= 768 && window.innerWidth < 1280)
    scrollDistance = movieWidth * t;
  else if (window.innerWidth >= 320 && window.innerWidth < 768)
    scrollDistance = movieWidth * m;

  slideMain.scrollBy({
    top: 0,
    left: +scrollDistance,
    behavior: "smooth",
  });
}

// Scroll button
btnLeft.addEventListener("click", () =>
  left(slider, ".recommendEach", defaultOptions),
);
btnRight.addEventListener("click", () =>
  right(slider, ".recommendEach", defaultOptions),
);
btnLeft2.addEventListener("click", () =>
  left(slider2, ".realtimeEach", defaultOptions),
);
btnRight2.addEventListener("click", () =>
  right(slider2, ".realtimeEach", defaultOptions),
);
btnLeft3.addEventListener("click", () =>
  left(slider3, ".quickEach", {
    d: 6,
    t: 3,
    m: 1.5,
  }),
);
btnRight3.addEventListener("click", () =>
  right(slider3, ".quickEach", {
    d: 6,
    t: 3,
    m: 1.5,
  }),
);
btnLeft4.addEventListener("click", () =>
  left(slider4, ".liveEach", {
    d: 6,
    t: 3,
    m: 1.5,
  }),
);
btnRight4.addEventListener("click", () =>
  right(slider4, ".liveEach", {
    d: 6,
    t: 3,
    m: 1.5,
  }),
);
btnLeft5.addEventListener("click", () =>
  left(slider5, ".onlyEach", {
    d: 6,
    t: 3,
    m: 2,
  }),
);
btnRight5.addEventListener("click", () =>
  right(slider5, ".onlyEach", {
    d: 6,
    t: 3,
    m: 2,
  }),
);
btnLeft6.addEventListener("click", () =>
  left(slider6, ".eventEach", defaultOptions),
);
btnRight6.addEventListener("click", () =>
  right(slider6, ".eventEach", defaultOptions),
);
