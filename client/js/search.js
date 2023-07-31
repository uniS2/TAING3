import {
  getNode,
  insertLast,
  isString,
  tiger,
  typeError,
} from "../lib/index.js";

const popularLists = getNode(".search__lists");

// 실시간 인기 검색어 rendering
//^ [효윤님] header의 검색 버튼 부분을 클릭시 작동하기
async function renderPopularList(url = "http://localhost:3000/main") {
  try {
    const realtime = (await tiger.get(url)).data.realtime;

    if (!realtime.length) return;
    if (!isString(url))
      typeError("함수 renderProfile의 매개변수는 문자이어야 합니다.");

    realtime.forEach(({ name, rank, ...restOptions }) => {
      const templatePopularList = /* html */ `
          <li class="search__list">
            <a href="./" class="search__link">
              <span
                class="search__rank inline-block w-[1.875rem] text-red_login"
                >${rank}</span
              ><span class="hover:text-white">${name}</span>
            </a>
          </li>
          `;

      insertLast(popularLists, templatePopularList);
    });
  } catch (error) {
    console.log(error);
  }
}

renderPopularList();

// 실시간 날짜 정보 받기
const time = getNode("time");

function getNow() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let noon = "";
  let minutes = now.getMinutes();

  if (hours >= 12) {
    noon = "오후";
  } else {
    noon = "오전";
  }
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  const time = `${year}.${month}.${date} ${noon} ${hours}:${minutes} 기준`;
  // console.log(now, time);
  return time;
}

insertLast(time, getNow());

//# 검색어 처리
const btnClick = getNode("#appendText");

btnClick.addEventListener("click", () => {
  // e.defaultPrevent();

  const ulNode = getNode("#searchRecent");
  const liNode = getNode("p");
  const btn = document.createElement("button");

  clearContents(liNode);
  liNode.textContent = getNode("#search").value;
  ulNode.appendChild(liNode).classList.add("search__history");
  liNode.appendChild(btn).classList.add("search__erase");

  var none = getNode("#searchNone");
  let eraseAll = getNode("#eraseAll");

  if (none.style.display == "") {
    none.style.display = "none";
  }
  if (eraseAll.style.display == "") {
    eraseAll.style.display = "block";
  }
});
