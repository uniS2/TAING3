import { getNode, getNodes, isNull } from "../lib/index.js";

const logout = getNode(".logout__buttons");
const [btnYes, btnNo] = getNodes(".logout__buttons > button");

function handlerLogout(e) {
  e.preventDefault();
  const target = e.target.closest("button");
  if (isNull(target)) return;

  if (target === btnYes) {
    window.location.replace("./landing.html");
    localStorage.removeItem("currentUniqueID");
  }
  if (target === btnNo) window.history.back();
}

logout.addEventListener("click", handlerLogout);
