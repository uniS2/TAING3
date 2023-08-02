import {
  addClass,
  clearContents,
  getNode,
  getNodes,
  insertLast,
  isNull,
  isString,
  refError,
  removeClass,
  setStorage,
  tiger,
  typeError,
} from "../lib/index.js";

// rendering
const profileList = getNode(".profile__lists");

async function renderProfileSelect(url = "http://localhost:3000/users") {
  try {
    const users = (await tiger.get(url)).data;

    // header 처리
    getNode("header").style.position = "relative";
    getNode("nav").style.display = "none";
    getNode("form").style.display = "none";
    getNode(".userInfo").style.display = "none";

    if (!users.length) return;
    if (!isString(url))
      typeError("함수 renderProfile의 매개변수는 문자이어야 합니다.");

    users.forEach(({ id, profile, ...restOptions } = {}) => {
      //^ 로그인한 회원 id 통한 index 가져오기
      if (id === JSON.parse(localStorage.getItem("currentID"))) {
        const nickSrc = Object.entries(profile);

        nickSrc.forEach(([nickname, src]) => {
          if (!nickname || !src) return;

          const templateProfileSelect = /*html*/ `
            <li class="pofile__list text-gray3 s:w-[45%]">
            <a
              href="./index.html"
              class="profile__link text-gray3"
            >
              <div
                class="profile__img__div relative duration-300 ease-linear hover:-translate-y-[10%] s:w-[100%]"
              >
                <img
                  src="image/profile/mobile/${src}"
                  alt="${nickname} 프로필"
                  class="profile__img w-[10.625rem] flex-col gap-y-4 rounded"
                />
                <div
                  class="profile__dimmed absolute bottom-0 left-0 right-0 top-0 rounded bg-black/[.5]"
                >
                  <img
                    src="image/profile/DesktopUnlock2.png"
                    alt=""
                    class="profile__dimmed__img absolute left-[calc(50%-1.5625rem)] top-[calc(50%-1.5625rem)] w-[3.75rem] h-[3.75rem] brightness-200 invert-[50%]"
                  />
                </div>
              </div>
              <p
                class="py-4 text-center text-[1.3125rem] leading-[160%] text-gray3 s:text-[1.3125rem] s:w-[100%]"
              >
                ${nickname}
              </p>
            </a>
          </li>
          `;
          insertLast(profileList, templateProfileSelect);
        });
      }
    });

    // 현재 프로필 처리
    const currentProfile = JSON.parse(localStorage.getItem("currentProfile"));
    const profileImg = getNodes(".profile__img");

    profileImg.forEach((node) => {
      if (node.alt === `${currentProfile} 프로필`) {
        const profile = node.closest(".profile__img__div");
        profile.style.border = "0.1875rem solid #FFFFFF";
        profile.style.borderRadius = "0.25rem";
      }
    });

    const handleProfileSelect = (e) => {
      e.preventDefault();
      const target = e.target.closest(".profile__img__div");
      if (isNull(target)) return;

      const selectProfile = target.firstChild.nextSibling;
      const selectProfileInfo = selectProfile.alt.slice(0, 1);
      if (!selectProfile) return;

      const profile = [...getNodes(".profile__img__div")];
      profile.forEach((node) => {
        removeClass(node, ".current__profile");
        node.style.border = "none";
      });

      if (target) {
        target.style.border = "0.1875rem solid #FFFFFF";
        target.style.borderRadius = "0.25rem";
        // 프로필 선택
        setStorage("currentProfile", selectProfileInfo);
        window.location.href = "./index.html";
      }
    };

    profileList.addEventListener("click", handleProfileSelect);
  } catch (error) {
    console.log(error);
  }
}

renderProfileSelect();

//# 버튼 이동

const btnEdit = getNode(".profile__button");

const handleProfilePage = (e) => {
  e.preventDefault();
  window.location.href = "./profile.html";
};

btnEdit.addEventListener("click", handleProfilePage);
