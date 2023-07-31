import { getNode, insertLast } from "../lib/index.js";

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

  const templateProfile = /* html */ `
  <li class="profile__list text-gray3 s:w-[45%]">
    <a
      href="./index.html"
      class="profile__link text-gray3"
    >
      <div
        class="profile__img__div relative duration-150 ease-linear hover:-translate-y-[10%] s:w-[100%]"
      >
        <img
          src="image/profile/mobile/${value}"
          alt="${key} 프로필"
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
        ${key}
      </p>
    </a>
  </li>
`;

  insertLast(profileList, templateProfile);
}

//$ 파일 선택 기능 만들기
