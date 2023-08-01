import {
  clearContents,
  deleteStorage,
  getNode,
  getStorage,
  insertLast,
  isString,
  refError,
  setStorage,
  tiger,
  typeError,
} from "../lib/index.js";

const popularLists = getNode(".search__lists");

// 실시간 인기 검색어 rendering
//^ [효윤님] header의 검색 버튼 부분을 클릭시 작동하기
async function renderPopularList(url = "http://localhost:3000/program") {
  try {
    const realtime = (await tiger.get(url)).data.realtime;

    //# 헤더 처리
    getNode("header").style.position = "relative";

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
    hours -= 12;
    noon = "오후";
  } else {
    noon = "오전";
  }

  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  const time = `${year}.${month}.${date} ${noon} ${hours}:${minutes} 기준`;
  // console.log(now, time);
  return time;
}

insertLast(time, getNow());

// 검색어 처리
const searchBtn = getNode(".search__button");
const history = getNode(".search__history");
const search = getNode("#search");

function handleSearch(e) {
  //% input enter 에러 해결
  /* 이 코드는 "keydown" 이벤트 리스너에서 handleSearch() 함수를 호출하는 경우에는 e 인자가 존재하지만, "click" 이벤트 리스너에서 호출하는 경우에는 e 인자가 없을 수 있습니다. 그래서 e가 존재하고 e.preventDefault()를 호출하면 "keydown" 이벤트 리스너에서 검색어를 입력한 후 엔터 키를 눌렀을 때 폼 제출이 발생하는 것을 막을 수 있습니다. 반면 "click" 이벤트에서는 폼 제출을 막을 필요가 없으므로 e가 없을 때 e && e.preventDefault가 거짓이 되어 해당 조건문이 실행되지 않습니다.

  즉, 이 조건문은 엔터 키를 눌렀을 때만 폼 제출을 막아주는 보호적인 코드입니다. 다른 요소를 클릭해서 검색 버튼이 아닌 이벤트에서 handleSearch() 함수를 호출한다면, 폼 제출이 발생하지 않아도 되기 때문에 폼 제출 막기를 할 필요가 없기 때문입니다. 이런 방식으로 코드를 작성하면 불필요한 폼 제출을 방지할 수 있습니다. */

  if (e && e.preventDefault) {
    e.preventDefault(); // 폼 제출 막기 (click 이벤트에서 호출된 경우에만 적용)
  }

  let text = search.value;
  const templateHistory = /*html*/ `
  <p class="search__earse">
  ${text}
  <button class="search__eraseOne h-[0.9375rem] ml-3 inline-block w-[0.9375rem] bg-xNofilledMark bg-no-repeat" id="history"></button>
  </p>
  `;

  if (!text) return;

  if (history.innerText === "검색 내역이 없습니다.") clearContents(history);
  insertLast(history, templateHistory);

  //# 검색어 저장
  async function saveSearch(url = "http://localhost:3000/users") {
    try {
      const users = (await tiger.get(url)).data;
      const url_history = "http://localhost:3000/history";
      const history = (await tiger.get("http://localhost:3000/history")).data;

      if (!users.length) return;
      if (!isString(url))
        typeError("함수 renderProfile의 매개변수는 문자이어야 합니다.");

      users.forEach(({ id, profile, ...restOptions } = {}) => {
        //$ if 현재 로그인 === key 값 -> 현재 선택한 프로필 === key 값
        if (id === "likelion01") {
          if (Object.keys(profile).includes("이듬")) {
            //! server 정보
            // let serverItems = history["likelion01"]["이듬"];

            // 이전에 저장된 "items"가 없다면 빈 배열로 초기화
            let items = JSON.parse(localStorage.getItem("이듬")) || [];

            // 새로운 값을 배열에 추가
            items.push(`${text}`);

            // 변경된 배열을 다시 "items" 키로 localStorage에 저장
            setStorage("이듬", items);
            // tiger.put(
            //   url_history,
            //   `
            //     "이듬": [
            //       "${getStorage("이듬")}"
            //     ]
            //   `,
            // );
          }
        }
        count += 1;
      });
    } catch (error) {
      console.log(error);
    }
  }

  saveSearch();
  // clearContents(search);
  search.value = "";
}

// 검색 버튼과 검색 input 모두에서 이벤트 처리
searchBtn.addEventListener("click", handleSearch);
search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// 모두 지우기 및 지우기 버튼 처리
const searchRecent = getNode(".search__recent");

function isClassName(node, className) {
  if (!className)
    refError("함수 isClassName의 두 번째 매개변수는 필수 값입니다.");

  return node.className.split(" ").includes(className);
}

function handleErase(e) {
  e.preventDefault();
  const eraseBtn = e.target.closest("button");
  const historyOne = e.target.closest(".search__earse");

  if (!eraseBtn) return;

  if (isClassName(eraseBtn, "search__eraseAll")) {
    clearContents(history);
    deleteStorage("이듬");
  }

  if (isClassName(eraseBtn, "search__eraseOne")) {
    clearContents(historyOne);
    // deleteStorage("이듬");
  }
}

searchRecent.addEventListener("click", handleErase);

if (localStorage.getItem("이듬")) {
  clearContents(history);
  const data = JSON.parse(localStorage.getItem("이듬"));
  for (let value of data) {
    const templateHistoryLog = /*html*/ `
    <p class="search__earse">
    ${value}
    <button class="search__eraseOne h-[0.9375rem] ml-3 inline-block w-[0.9375rem] bg-xNofilledMark bg-no-repeat" id="history"></button>
    </p>
    `;
    insertLast(history, templateHistoryLog);
  }
}
