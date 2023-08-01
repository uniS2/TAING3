import {
  getNode as $,
  addClass,
  attr,
  getNodes,
  removeClass,
  tiger,
} from "../lib/index.js";

// const user = {
//   id: "asd@naver.com",
//   pw: "spdlqj123!@",
// };

//* <header>에 메뉴, 프로필 지우기----------------------------------------------------------
async function ready() {
  // const header = await $(".header");
  const nav = await $("nav");
  const form = await $("form");
  const userInfo = await $(".userInfo");

  // header.style.position = "relative";
  nav.style.display = "none";
  form.style.display = "none";
  userInfo.style.display = "none";
}
ready();

//*아이디, 비번, 이메일 정규식-------------------------------------------------------------------------

//사용자가 아이디를 잘 입력했는지 확인하는 정규식?
function idReg(text) {
  const re = /^[a-z]+[a-z0-9]{5,11}$/g;
  return re.test(String(text).toLowerCase());
}
//사용자가 비밀번호을 잘 입력했는지 확인하는 정규식?
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{7,14}$/;
  return re.test(String(text).toLowerCase());
}
//사용자가 이메일을 잘 입력했는지 확인하는 정규식?
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

//*아이디, 비번, 체크박스 일치하는지-------------------------------------------------------------------------

//! 선택자 불러오기
const userId = $("#userId");
const userPw = $("#userPw");
const userPwCheck = $("#passwordCheck");
const userEmail = $("#email");
const btnRegist = $("#btnRegist");
const btnWrap = $(".btn_wrap");

let idPass = false;
//! 아이디 인풋 이벤트
function handlerIdInput() {
  if (!idReg(userId.value)) {
    addClass(".input_info", "text-red");
    idPass = false;
  } else {
    removeClass(".input_info", "text-red");
    idPass = true;
  }
}

let pwPass = false;
//! 비밀번호 인풋 이벤트
function handlerPasswordInput() {
  if (!pwReg(userPw.value)) {
    addClass(".input_pw", "text-red");
    pwPass = false;
  } else {
    removeClass(".input_pw", "text-red");
    pwPass = true;
  }
}

let pwPassCheck = false;
//! 비밀번호 일치 체크 인풋 이벤트
function handlerPasswordCheckInput() {
  if (userPwCheck.value !== userPw.value) {
    pwPassCheck = false;
    removeClass(".input_checkpw_N", "hidden");
    addClass(".input_checkpw", "hidden");
  } else {
    pwPassCheck = true;
    addClass(".input_checkpw_N", "hidden");
    removeClass(".input_checkpw", "hidden");
  }
}

let emailPass = false;
//! 이메일 인풋 이벤트
function handlerEmailInput() {
  if (!emailReg(userEmail.value)) {
    emailPass = false;
    removeClass(".input_email_N", "hidden");
    addClass(".input_email", "hidden");
  } else {
    emailPass = true;
    addClass(".input_email_N", "hidden");
    removeClass(".input_email", "hidden");
  }
}

// console.log(
//   idPass &&
//     pwPass &&
//     pwPassCheck &&
//     emailPass &&
//     agreements.privacy &&
//     agreements.service &&
//     agreements.channel,
// );
//! 클릭 이벤트 함수
function handlerClick1(e) {
  console.log(idPass);
  console.log(pwPass);
  console.log(pwPassCheck);
  console.log(emailPass);
  console.log(agreements.privacy);
  console.log(agreements.service);
  console.log(agreements.channel);

  e.preventDefault();
  if (!idPass || !pwPass || !pwPassCheck || !emailPass) {
    alert("아이디, 비밀번호, 이메일의 형식이 올바른지 확인해주세요.");
  } else if (
    !agreements.privacy ||
    !agreements.service ||
    !agreements.channel
  ) {
    alert("[필수] 동의를 체크해주세요.");
  }
  //   else if (
  //   !idPass ||
  //   !pwPass ||
  //   !pwPassCheck ||
  //   !emailPass ||
  //   !agreements.privacy ||
  //   !agreements.service ||
  //   !agreements.channel
  // ) {
  //   //! 아이디 비밀번호가 일치하면 welcome 페이지로 이동
  //   // if (userId.value === user.id && userPw.value === user.pw) {

  //   // window.location.href = "http://localhost:5500/";
  //   //   } else if (!(userId.value === user.id) && !(userPw.value === user.pw)) {
  //   //     alert("아이디와 비밀번호가 올바르지 않습니다.");
  //   //   } else if (!(userId.value === user.id)) {
  //   //     alert("아이디가 올바르지 않습니다.");
  //   //   } else if (!(userPw.value === user.pwuser)) {
  //   //     alert("비밀번호가 올바르지 않습니다.");
  //   //   }
  //   // } else {
  //   alert("아이디와 비밀번호가 올바른지 확인해주세요.");
  //   // }
  else {
    window.location.href = "http://localhost:5500/";
  }
}
//****서버로 자료보내기---------------------------------------------------------
async function isregister(emailCheck, pwCheck) {
  const response = (await tiger.post("http://localhost:3000/users"), users, ``)
    .data;
  // const user = {
  //   id: "asd@naver.com",
  //   pw: "spdlqj123!@",
  // };
  if (emailCheck && pwCheck) {
    response.some((element) => {
      if (emailInput === element.id && passwordInput === element.password) {
        window.location.href = "./index.html";
      } else if (emailCheck || pwCheck) {
        event.preventDefault();
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        return true;
      }
    });
  }
}

//------------------------------

//! addEventListener input, click
userId.addEventListener("input", handlerIdInput);
userPw.addEventListener("input", handlerPasswordInput);
userPwCheck.addEventListener("input", handlerPasswordCheckInput);
userEmail.addEventListener("input", handlerEmailInput);

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
//비밀번호 문자 보이게하기 -----------------------------------------------------------
const closePw = $("#closePw");
const closePwCheck = $("#closePwCheck");

closePw.addEventListener("click", function (event) {
  event.preventDefault();
  const pwInput = $("#userPw");
  if (pwInput.type === "password") {
    attr(pwInput, "type", "text");
    attr(pwInput, "autocomplete", "off");
    closePw.style.backgroundImage = `url('/image/login/eye.png')`;
  } else {
    attr(pwInput, "type", "password");
    attr(pwInput, "autocomplete", "current-password");
    closePw.style.backgroundImage = `url('/image/login/DesktopPw.png')`;
  }
});

closePwCheck.addEventListener("click", function (event) {
  event.preventDefault();
  const pwInput = $("#passwordCheck");
  if (pwInput.type === "password") {
    attr(pwInput, "type", "text");
    attr(pwInput, "autocomplete", "off");
    closePwCheck.style.backgroundImage = `url('/image/login/eye.png')`;
  } else {
    attr(pwInput, "type", "password");
    attr(pwInput, "autocomplete", "current-password");
    closePwCheck.style.backgroundImage = `url('/image/login/DesktopPw.png')`;
  }
});

//체크박스-------------------------------------------
const form = $(".check_wrap"); // 데이터를 전송하는 Form
const checkAll = $("#agreeAll"); // 모두 동의 체크박스
const checkBoxes = getNodes(".check_box input"); // 모두 동의를 제외한 3개의 체크박스
const agree7 = $("#agree_7"); // 모두 동의를 제외한 3개의 체크박스
// const submitButton = $("button"); // 확인 버튼 btnRegist

//체크 박스의 체크 여부
const agreements = {
  checkAge: false, // 만 14세 이상 체크박스
  service: false, // [필수] 서비스 이용약관
  privacy: false, // [필수] 개인정보 수집 및 서비스 활용
  channel: false, // [필수] 채널 홈페이지 개인정보 제 3자 제공
  allowPrivacy: false, // [선택] 개인정보 제 3자 제공동의
  allowService: false, // [선택] 개인정보 수집 및 서비스 활용 동의
  allowSns: false, // [선택] 마케팅 정보 SMS 수신동의
  allowEmail: false, // [선택] 마케팅 정보 이메일 수신동의
};

checkBoxes.forEach((item) => item.addEventListener("input", toggleCheckbox));

function toggleCheckbox(e) {
  const { checked, id } = e.target;
  agreements[id] = checked;
  this.parentNode.classList.toggle("active");
  checkAllStatus();
  // toggleSubmitButton();
}

function checkAllStatus() {
  const {
    checkAge,
    service,
    privacy,
    channel,
    allowPrivacy,
    allowService,
    allowSns,
    allowEmail,
  } = agreements;
  if (
    checkAge &&
    service &&
    privacy &&
    channel &&
    allowPrivacy &&
    allowService &&
    allowSns &&
    allowEmail
  ) {
    checkAll.checked = true;
  } else {
    checkAll.checked = false;
  }
}

// function toggleSubmitButton() {
//   const { service, privacy, channel } = agreements;
//   if (service && privacy && channel) {
//     alert("a");
//   }
// }

checkAll.addEventListener("click", (e) => {
  const { checked } = e.target;
  if (checked) {
    agreements.service = true;
    agreements.privacy = true;
    agreements.channel = true;
    checkBoxes.forEach((item) => {
      item.checked = true;
      agreements[item.id] = true;
      item.parentNode.classList.add("active");
    });
  } else {
    agreements.service = false;
    agreements.privacy = false;
    agreements.channel = false;
    checkBoxes.forEach((item) => {
      item.checked = false;
      agreements[item.id] = false;
      item.parentNode.classList.remove("active");
    });
  }
  // toggleSubmitButton();
});

agree7.addEventListener("click", (e) => {
  const { checked } = e.target;
  if (checked) {
    $("#agree_8").checked = true;
    agreements.allowEmail = true;
    $("#agree_6").checked = true;
    agreements.allowPrivacy = true;
    $("#agree_5").checked = true;
    agreements.allowPrivacy = true;
  }
});

$("#agree_5").addEventListener("click", (e) => {
  const { checked } = e.target;
  if (checked) {
    $("#agree_8").checked = true;
    agreements.allowEmail = true;
    $("#agree_6").checked = true;
    agreements.allowPrivacy = true;
    $("#agree_7").checked = true;
    agreements.allowSns = true;
  }

  // toggleSubmitButton();
});

$("#agree_2").addEventListener("click", () => {
  agreements.service = true;
});

$("#agree_3").addEventListener("click", () => {
  agreements.privacy = true;
});

$("#agree_4").addEventListener("click", () => {
  agreements.channel = true;
});

btnRegist.addEventListener("click", handlerClick1);
