import { getNode, toggleClass } from "../lib/index.js";
const userBarBox = getNode(".userInfo__content");
const userProfile = getNode(".userInfo__button");

//헤더 오른쪽상단 프로필 사진 누르면 프로필 설정창 토글 기능
function handleUserBar() {
  if (userBarBox.style.display === "none") {
    userBarBox.style.display = "block";
    toggleClass(".userInfo__content", "invisible");
  }
  toggleClass(".userInfo__content", "invisible");
}

//프로필 설정창 외부에서 클릭하면 hidden 기능
function handleRemoveUserbar(e) {
  if (!userProfile.contains(e.target)) {
    userBarBox.style.display = "none";
  }
}

userProfile.addEventListener("click", handleUserBar);
document.addEventListener("mouseup", handleRemoveUserbar);
