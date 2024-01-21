import { attr, getNode, tiger, setStorage } from "../lib/index.js";

const closePW = getNode("#closePW");

closePW.addEventListener("click", function (event) {
  event.preventDefault();
  const pwInput = getNode("#password_input");
  if (pwInput.type === "password") {
    attr(pwInput, "type", "text");
    attr(pwInput, "autocomplete", "off");
    closePW.style.backgroundImage = `url('./image/login/eye.png')`;
  } else {
    attr(pwInput, "type", "password");
    attr(pwInput, "autocomplete", "current-password");
    closePW.style.backgroundImage = `url('./image/login/DesktopPw.png')`;
  }
});

async function ready() {
  const header = await getNode("header");
  const nav = await getNode("nav");
  const form = await getNode("form");
  const userInfo = await getNode(".userInfo");

  header.style.position = "relative";
  nav.style.display = "none";
  form.style.display = "none";
  userInfo.style.display = "none";
}

ready();

//로그인 버튼 클릭 시 함수 실행
getNode("#doLogIn").addEventListener("click", function (event) {
  const email = document.querySelector("#id_input");
  const pw = document.querySelector("#password_input");
  const emailInput = email.value;
  const passwordInput = pw.value;
  const emailError = document.querySelector("#userEmailError");
  const pwError = document.querySelector("#userPasswordError");
  const eyes = document.querySelector("#closePW");

  //아이디 유효성 검사 함수
  function idCheck() {
    if (emailInput.length > 0 && !idReg(emailInput)) {
      emailError.style.display = "block";
      event.preventDefault();
      return;
    } else {
      emailError.style.display = "none";
      return emailInput;
    }
  }
  //비밀번호 유효성 검사 함수
  function pwCheck() {
    if (passwordInput.length > 0 && !pwReg(passwordInput)) {
      pwError.style.display = "block";
      event.preventDefault();
      return;
    } else {
      pwError.style.display = "none";
      eyes.style.display = "none";
      return passwordInput;
    }
  }
  //로그인 아이디, 비밀번호 일치 확인 함수

  async function isLogin(emailCheck, pwCheck) {
    const response = (await tiger.get("./server/db/data.json")).data.users;

    if (emailCheck && pwCheck) {
      let loginSuccessful = false;

      response.some((element) => {
        if (emailInput === element.id && passwordInput === element.password) {
          setStorage("currentUniqueID", element.uniqueID);
          setStorage("currentID", element.id);
          window.location.href = "./profile_init.html";
          loginSuccessful = true;
          return true;
        }
      });

      if (!loginSuccessful) {
        event.preventDefault();
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    }
  }
  return isLogin(idCheck(), pwCheck());
});

function idReg(text) {
  const re = /^[a-z]+[a-z0-9]{5,11}$/g;
  return re.test(String(text).toLowerCase());
}
//사용자가 비밀번호을 잘 입력했는지 확인하는 정규식?
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{7,14}$/;
  return re.test(String(text).toLowerCase());
}
