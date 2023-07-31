import { getNode, toggleClass } from "../lib/index.js";

const userBar = getNode(".userInfo");

function handleUserBar() {
  console.log("hi");
  toggleClass(".userInfo__content", "invisible");
}

userBar.addEventListener("click", handleUserBar);
