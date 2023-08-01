import { getNode } from "../lib/index.js";





// **로그인 페이지**
// 김남진 : []로그인 기능
// []자동 로그인-유니크 아이디 일치 여부 확인
// 김남진 : []유효성 검사



//로그인 버튼 클릭 시 함수 실행
    getNode("#doLogIn")
 .addEventListener("click", function (event) {
    const email = document.querySelector("#id_input");
    const pw = document.querySelector("#password_input");
    const emailInput = email.value;
    const passwordInput = pw.value;
    console.log(email);
    // let errorMessage = '';

//아이디 유효성 검사 함수
function idCheck() {

    if (emailInput.length > 0 && !emailReg(emailInput)) {
        // errorMessage = '이메일은 유효한 형식이어야 합니다.';
      event.preventDefault();
    //  prevenDefault함수: a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행
      email.classList.add("is--invalid");
    // 명시된 클래스를 추가하는 메서드입니다.
      return;
    } else {
      email.classList.remove("is--invalid");
      return emailInput;
    }
  }

   //비밀번호 유효성 검사 함수
   function pwCheck() {
    if (passwordInput.length > 0 && !pwReg(passwordInput)) {
        // errorMessage = '비밀번호는 영문, 숫자, 특수문자를 포함한 6자 이상 16자 이하여야 합니다.';
      event.preventDefault();
      pw.classList.add("is--invalid");
      return;
    } else {
      pw.classList.remove("is--invalid");
      return passwordInput;
    }
  }
  //로그인 아이디, 비밀번호 일치 확인 함수
  function isLogin(emailCheck, pwCheck) {
    const user = {
      id: "asd@naver.com",
      pw: "spdlqj123!@",
    };

    if (emailCheck && pwCheck) {
      if (emailCheck === user.id && pwCheck === user.pw) {
        event.preventDefault();
        window.location.href = "./welcome.html";
      } else if (emailCheck || pwCheck) {
        event.preventDefault();
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        return;
      }
    }
  }

  //isLogin 함수 실행
  //idCheck, pwCheck 함수를 매개변수로 받아
  //각 함수를 실행하고 return 값으로 진행 여부 결정
  return isLogin(idCheck(), pwCheck());
});




function emailReg(text) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(text).toLowerCase());
  }
  
  function pwReg(text) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-~]).{10,16}$/;
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
