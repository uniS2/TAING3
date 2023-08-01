import {
  addClass,
  getNode,
  getNodes,
  insertLast,
  isNull,
  isString,
  refError,
  removeClass,
  tiger,
  typeError,
} from "../lib/index.js";

// rendering
const profileList = getNode(".profile__lists");

async function renderProfileSelect(url = "http://localhost:3000/users") {
  try {
    const users = (await tiger.get(url)).data;

    //# header 처리
    // include 땡겨오면 none 해줄게!!
    getNode("header").style.position = "relative";
    getNode("nav").style.display = "none";
    getNode("form").style.display = "none";
    getNode(".userInfo").style.display = "none";

    if (!users.length) return;
    if (!isString(url))
      typeError("함수 renderProfile의 매개변수는 문자이어야 합니다.");

    users.forEach(({ id, profile, ...restOptions } = {}) => {
      //^ 로그인한 회원 id 통한 index 가져오기
      if (id === "likelion02") {
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
                    src="image/profile/DesktopLock.png"
                    alt=""
                    class="profile__dimmed__img absolute left-[calc(50%-1.5625rem)] top-[calc(50%-1.5625rem)]"
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
  } catch (error) {
    console.log(error);
  }
}

renderProfileSelect();

//# 현재 프로필 처리
//$ 로그인 회원 정보 및 선택 통한 프로필 정보 받아오기
//$ currentProfile === 로그인.id + profile
const profileImg = getNodes(".profile__img");
console.log(profileImg);

profileImg.forEach((node) => {
  if (node.alt === `이듬 프로필`) {
    const profile = node.closest(".profile__img__div");
    profile.style.border = "0.1875rem solid #FFFFFF";
    profile.style.borderRadius = "0.25rem";
    //% addClass(profile, ".current__profile");
  }
});

const handleProfileSelect = (e) => {
  e.preventDefault();
  const target = e.target.closest(".profile__img__div");
  console.log(target);
  if (isNull(target)) return;

  const profile = [...getNodes(".profile__img__div")];
  profile.forEach((node) => {
    // removeClass(node, ".current__profile");
    node.style.border = "none";
  });

  if (target) {
    // addClass(target, ".current__profile");
    target.style.border = "0.1875rem solid #FFFFFF";
    target.style.borderRadius = "0.25rem";
    window.location.href = "./index.html";
    //$ 현재 프로필 정보 바꾸기
  }
};

profileList.addEventListener("click", handleProfileSelect);

//# 버튼 이동

const btnEdit = getNode(".profile__button");

const handleProfilePage = (e) => {
  e.preventDefault();
  window.location.href = "./profile.html";
};

btnEdit.addEventListener("click", handleProfilePage);
