import {
  addClass,
  getNode,
  getNodes,
  insertLast,
  isNull,
  removeClass,
} from "../lib/index.js";

//# rendering -> 비동기 변경
const url = {
  users: [
    {
      id: "likelion01",
      password: "likelion01**",
      uniqueID: "42307118970030766",
      email: "likelion01@euid.com",
      agree: {
        toOthers: true,
        marketing: {
          sms: true,
          email: true,
        },
      },
      profile: {
        슬비님: "profile_1.png",
        범쌤: "profile_3.png",
        야무: "profile_2.png",
        이듬: "profile_4.png",
      },
    },
    {
      id: "likelion02",
      password: "likelion02**",
      uniqueID: "42307118970030766",
      email: "likelion02@naver.com",
      agree: {
        toOthers: true,
        marketing: {
          sms: false,
          email: true,
        },
      },
      profile: {
        정: "",
        진: "",
        이: "",
        효: "",
      },
    },
    {
      id: "",
      password: "",
      uniqueID: "",
      email: "",
      agree: {
        toOthers: false,
        marketing: {
          sms: false,
          email: false,
        },
      },
      profile: {
        profile: "",
      },
    },
  ],
};

const users = url["users"];
const profileList = getNode(".profile__lists");

//$ 로그인한 회원 id 또는 uniqueID 통한 index 가져오기
const { id, profile, ...restOptions } = users[0];

for (const [key, value] of Object.entries(profile)) {
  //$ key, value 중 null 값 있으면 표시 X -> 프로필은 순차적

  const templateProfileSelect = /*html*/ `
<li class="profile__list text-gray3 s:w-[45%] s:pb-6">
<a
  href="./index.html"
  class="profile__link flex-col items-center gap-y-[15px] text-gray3 s:w-full"
>
  <div
    class="profile__img__div relative duration-150 ease-linear hover:-translate-y-[10%]"
  >
    <img
      src="image/profile/mobile/${value}"
      alt="${key} 프로필"
      class="profile__img w-[150px] max-w-[234px] flex-col items-center gap-y-4 rounded bg-gray3 s:w-[114px]"
    />
    <div
      class="profile__dimmed absolute bottom-0 left-0 right-0 top-0 min-w-[150px] rounded bg-black/[.5]"
    >
      <img
        src="image/profile/DesktopLock.png"
        alt=""
        class="profile__dimmed__img absolute left-[calc(50%-25px)] top-[calc(50%-25px)] w-full max-w-[50px]"
      />
    </div>
  </div>
  <p
    class="py-4 text-center text-[21px] leading-[160%] text-gray3 s:text-[21px]"
  >
  ${key}
  </p>
</a>
</li>`;

  insertLast(profileList, templateProfileSelect);
}

//# 현재 프로필 처리
//$ 로그인 회원 정보 및 선택 통한 프로필 정보 받아오기
//$ currentProfile === 로그인.id + profile
const profileImg = [...getNodes(".profile__img")];

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
  if (isNull(target)) return;

  const profile = [...getNodes(".profile__img__div")];
  profile.forEach((node) => {
    // removeClass(node, ".current__profile");
    node.style.border = "none";
  });

  // addClass(target, ".current__profile");
  if (target) {
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
