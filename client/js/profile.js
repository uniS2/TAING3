import {
  getNode,
  getStorage,
  insertLast,
  isString,
  setStorage,
  tiger,
  typeError,
} from "../lib/index.js";

//# 헤더 처리

// rendering
const profileList = getNode(".profile__lists");

async function renderProfile(url = "http://localhost:3000/users") {
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
      if (id === JSON.parse(localStorage.getItem("currentID"))) {
        const nickSrc = Object.entries(profile);

        nickSrc.forEach(([nickname, src]) => {
          if (!nickname || !src) return;

          const templateProfile = /* html */ `
        <li class="profile__list text-gray3 s:w-[45%]">
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
                  src="image/profile/DesktopPencil.png"
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

          insertLast(profileList, templateProfile);
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}

renderProfile();

// 파일 선택 기능 만들기
