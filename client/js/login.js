import { attr, getNode, tiger, setStorage } from "../lib/index.js";

// tiger
const closePW = getNode("#closePW");

closePW.addEventListener("click", function (event) {
  event.preventDefault();
  const pwInput = getNode("#password_input");
  if (pwInput.type === "password") {
    attr(pwInput, "type", "text");
    attr(pwInput, "autocomplete", "off");
    closePW.style.backgroundImage = `url('/image/login/eye.png')`;
  } else {
    attr(pwInput, "type", "password");
    attr(pwInput, "autocomplete", "current-password");
    closePW.style.backgroundImage = `url('/image/login/DesktopPw.png')`;
  }
});

// **로그인 페이지**
// 김남진 : []로그인 기능
// []자동 로그인-유니크 아이디 일치 여부 확인
// 김남진 : []유효성 검사

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
  // console.log(emailInput);
  // let errorMessage = '';
  // console.log(eyes)
  //아이디 유효성 검사 함수
  function idCheck() {
    if (emailInput.length > 0 && !idReg(emailInput)) {
      emailError.style.display = "block";
      event.preventDefault();
      //  prevenDefault함수: a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행
      // email.classList.add("is--invalid");
      // 명시된 클래스를 추가하는 메서드입니다.
      return;
    } else {
      emailError.style.display = "none";
      // email.classList.remove("is--invalid");
      return emailInput;
    }
  }

  //비밀번호 유효성 검사 함수
  function pwCheck() {
    if (passwordInput.length > 0 && !pwReg(passwordInput)) {
      pwError.style.display = "block";
      event.preventDefault();
      // pw.classList.add("is--invalid");
      return;
    } else {
      pwError.style.display = "none";
      eyes.style.display = "none";

      // pw.classList.remove("is--invalid");
      return passwordInput;
    }
  }
  //로그인 아이디, 비밀번호 일치 확인 함수

  async function isLogin(emailCheck, pwCheck) {
    const response = (await tiger.get("http://localhost:3000/users")).data;

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
  //   if (emailCheck && pwCheck) {
  //     if (emailCheck === user.id && pwCheck === user.pw) {
  //       event.preventDefault();
  //       window.location.href = "./index.html";
  //     } else if (emailCheck || pwCheck) {
  //       event.preventDefault();
  //       alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  //       return;
  //     }
  //   }

  //isLogin 함수 실행
  //idCheck, pwCheck 함수를 매개변수로 받아
  //각 함수를 실행하고 return 값으로 진행 여부 결정
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

// // const idInput = '#id_input';

// // getNode('#id_input')를 쓰기위해서 idInput 이란 별명에 걸어줌.
// const idInput = getNode('#id_input');

// // getNode('#id_input')
// function handleGetId(){

//    let idValue = idInput.value

//     console.log(idValue)

// }

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1,2))

// idInput.addEventListener('input',handleGetId)
// //addEventListener(이벤트타입:'input',/ handleId)
