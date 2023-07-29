import { getNode, getNodes } from "../lib/index.js";

const logout = getNode(".logout__buttons");

const [buttonYes, buttonNo] = getNodes(".logout__buttons > button");

// function name(params) {}

const handlerLogout = (e) => {
  e.preventDefault();
  const target = e.target.closest("button");

  if (target === buttonYes) window.location.replace("./landing.html");
  //$ 사용자 정보 제거 필요
  if (target === buttonNo) window.history.back();
};

logout.addEventListener("click", handlerLogout);
