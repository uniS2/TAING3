const btnR = document.querySelectorAll(".btn-right");
const btnL = document.querySelectorAll(".btn-left");

const defaultOptions = {
  d: 6,
  t: 4,
  m: 2,
};

btnL.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    moveSlide(e, defaultOptions, "left");
  });
});

btnR.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    moveSlide(e, defaultOptions, "right");
  });
});

function moveSlide(e, defaultOptions, direction) {
  let { d, t, m } = defaultOptions;

  const slideMain =
    direction === "right"
      ? e.target.previousElementSibling
      : e.target.nextElementSibling;
  const slideEach = slideMain.children[0];
  const classCheck = slideEach.classList;

  if (
    classCheck.contains("quickEach") ||
    classCheck.contains("eventEach") ||
    classCheck.contains("liveEach")
  )
    (d = 4), (t = 2), (m = 1);
  else if (classCheck.contains("onlyEach")) (d = 5), (t = 3);

  const movieWidth = slideEach.getBoundingClientRect().width;
  let scrollDistance;

  if (window.innerWidth >= 1280) scrollDistance = movieWidth * d;
  else if (window.innerWidth >= 768 && window.innerWidth < 1280)
    scrollDistance = movieWidth * t;
  else if (window.innerWidth >= 320 && window.innerWidth < 768)
    scrollDistance = movieWidth * m;

  slideMain.scrollBy({
    top: 0,
    left: direction === "right" ? +scrollDistance : -scrollDistance,
    behavior: "smooth",
  });
}
