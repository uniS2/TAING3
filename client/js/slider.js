const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");
const slider2 = document.querySelector(".slider2");
const btnLeft2 = document.getElementById("moveLeft2");
const btnRight2 = document.getElementById("moveRight2");

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

// Scroll Left button
btnLeft.addEventListener("click", () => left(slider, ".recommendEach"));
btnRight.addEventListener("click", () => right(slider, ".recommendEach"));
btnLeft2.addEventListener("click", () => left(slider2, ".realtimeEach"));
btnRight2.addEventListener("click", () => right(slider2, ".realtimeEach"));

function right(slideMain, slideEach) {
  console.log("check");
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
