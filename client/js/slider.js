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

function left(slideMain, slideEach) {
  let activeIndex = 0; // the current page on the slider
  //console.log(document.querySelector(".movie"));

  let movieWidth = document
    .querySelector(slideEach)
    .getBoundingClientRect().width;
  let scrollDistance = movieWidth * 7;
  // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  slideMain.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: "smooth",
  });
  activeIndex = (activeIndex - 1) % 3;
  console.log(activeIndex);
}

function right(slideMain, slideEach) {
  let activeIndex = 0; // the current page on the slider
  // Scroll Right button
  let movieWidth = document
    .querySelector(slideEach)
    .getBoundingClientRect().width;
  let scrollDistance = movieWidth * 7;
  // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  console.log(`movieWidth = ${movieWidth}`);
  console.log(`scrolling right ${scrollDistance}`);

  // if we're on the last page
  if (activeIndex == 2) {
    // duplicate all the items in the slider (this is how we make 'looping' slider)
    slideMain.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = 0;
  } else {
    slideMain.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex + 1) % 3;
    console.log(activeIndex);
  }
  // btnRight2.addEventListener("click", (e) => {
  // });
}

// Scroll button
btnLeft.addEventListener("click", () => left(slider, ".recommendEach"));
btnRight.addEventListener("click", () => right(slider, ".recommendEach"));
btnLeft2.addEventListener("click", () => left(slider2, ".realtimeEach"));
btnRight2.addEventListener("click", () => right(slider2, ".realtimeEach"));
btnLeft3.addEventListener("click", () => left(slider3, ".quickEach"));
btnRight3.addEventListener("click", () => right(slider3, ".quickEach"));
btnLeft4.addEventListener("click", () => left(slider4, ".liveEach"));
btnRight4.addEventListener("click", () => right(slider4, ".liveEach"));
btnLeft5.addEventListener("click", () => left(slider5, ".onlyEach"));
btnRight5.addEventListener("click", () => right(slider5, ".onlyEach"));
btnLeft6.addEventListener("click", () => left(slider6, ".eventEach"));
btnRight6.addEventListener("click", () => right(slider6, ".eventEach"));
