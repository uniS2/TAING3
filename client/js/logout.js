import { getNode, getNodes, isNull } from "../lib/index.js";

// 로그아웃 (IIFE)
(function () {
  const logout = getNode(".logout__buttons");
  const [btnYes, btnNo] = getNodes(".logout__buttons > button");

  function handlerLogout(e) {
    e.preventDefault();
    const target = e.target.closest("button");

    if (isNull(target)) return;

    if (target === btnYes) {
      window.location.replace("./landing.html");
      // 로그인키 제거
      localStorage.removeItem("currentUniqueID");
    }
    if (target === btnNo) window.history.back();
  }

  logout.addEventListener("click", handlerLogout);
})();
