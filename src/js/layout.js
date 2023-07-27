const images = [
  "./src/image/main/banner_img_desktop.png",
  "./src/image/main/desktop/1920-1.jpg",
  "./src/image/main/desktop/1920-2.jpg",
  "./src/image/main/desktop/1920-3.jpg",
];

let currentIndex = 0;
const text = document.querySelector('.banner__slider__dot__text');
const dots = document.querySelectorAll(".banner__slider__dot__button");
const pauseIcon = document.getElementById('toggle-start');
const sliderImage = document.getElementById("sliderImage");

function showImage(index) {
  sliderImage.style.opacity = 0;
  setTimeout(() => {  //  이미지에 그라데이션 넣기 위해서 backgroundImage로 줌
    sliderImage.style.backgroundImage = `linear-gradient(to top , rgba(0,0,0,1) 0%,rgba(0,0,0,0.7) 10%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 40%,
    rgba(255,255,255,0) 100%),linear-gradient(to left , rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.5) 5%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 40%,
    rgba(255,255,255,0) 100%),linear-gradient(to right , rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.5) 10%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 40%,
    rgba(255,255,255,0) 100%), url(${images[index]})`;
    sliderImage.style.opacity = 1;
  }, 500); // 500ms => 0.5 초 뒤 다음 index로 가도록 구현.
  if (index == 1) {
    text.innerHTML = 'camp Zero Base One';
  } else if (index == 2) {
    text.innerHTML = "댄스가수 유랑단";
  } else if (index == 3) {
    text.innerHTML = "텐트 밖은 유럽 - 노르웨이편";
  }
  else {
    text.innerHTML = '인생 2회차를 사는 드라마';
  }
}

pauseIcon.addEventListener('click', function () {
  this.classList.toggle("fa-play");
})

function moveImage() {  //이미지가 자동 슬라이드 되도록 만들고 마우스가 이미지를 가르킬시 잠깐 멈추고 다시 마우스가 이미지 밖으로 나가면 슬라이드 되도록 만듬.

  // 정지, 실행 아이콘 나오게 하기.
  timer = setInterval(() => {
    nextImage();
  }, 3000);

  sliderImage.addEventListener("mouseover", function () {
    clearInterval(timer);
  })
  sliderImage.addEventListener("mouseout", function () {
    timer = setInterval(() => {
      nextImage();
    }, 3000);
  })
  // pauseIcon.addEventListener('click', function () {
  //   if (pauseIcon.classList.contains('fa-pause')) {
  //     this.classList.remove('fa-pause')
  //     this.classList.add('fa-play');
  //     console.log("gs");
  //   } else {

  //   }
  // })


}
// if (pauseIcon.classList.contains('fa-pause')) {
//   pauseIcon.addEventListener('click', function () {
//     this.classList.remove('fa-pause')
//     this.classList.add('fa-play');
//     console.log("gs");
//     //  else {
//     //   clearInterval(timer);
//     //   this.classList.remove('fa-play');
//     //   this.classList.add('fa-pause');
//     // }
//   })
// } else if (pauseIcon.classList.contains('fa-play')) {
//   pauseIcon.addEventListener('click', function () {
//   this.classList.remove('fa-play');
//   this.classList.add('fa-pause');
//   console.log("q2s");
// })
// }




// else if (pauseIcon.classList.contains('fa-play')){
//   clearInterval(timer);
//   sliderImage.addEventListener("mouseout", function () {
//     timer = setInterval(() => {
//       nextImage();
//     }, 1000);
//   })
// }

// if(pauseIcon.classList.contains('fa-play')){ 퍼스, 플레이 구현 실패
//   clearInterval(timer);
// }else{
//   timer = setInterval(() => {
//     nextImage();
//   }, 3000);
// }  재귀함수 불러오기도 x 



function prevImage() {  // 이전 버튼 누르면 이전 이미지 가장 낮은 인덱스이면 가장 높은 인덱스 이미지가 나올수 있도록 만듬
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  dotMove()
}

function nextImage() {  //위와 반대로 작동
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  dotMove()
}

function dotMove() {   // dot 버튼은 화면에 나오는 인덱스 이미지에 맞춰 해당 인덱스 dot 에 하얀색 background가 들어오게 만듬. 그리고 dot 버튼을 클릭시 해당 dot 인덱스와 같은 인덱스의 이미지가 나옴
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove('active');
    }
  })
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
      currentIndex = index;
      showImage(currentIndex);
      dotMove();
    });
  });
}





// 스크롤시 header배경색 변경 구현
const banner = document.getElementById('mainbanner');
const bannerHeight = banner.getBoundingClientRect().height;

window.addEventListener('scroll', function () {
  if (window.scrollY > bannerHeight) {
    document.getElementById('scrollHeader').style.backgroundColor = 'black'
  }
  else {
    document.getElementById('scrollHeader').style.backgroundColor = 'transparent'
  }
})



//모달 창 닫기
function exitModal() {
  document.getElementById('mainModal').style.display = "none";
}

document.querySelector('.close').addEventListener('click', function () {
  exitModal();
})


// 오늘 하루 보지 않기 클릭시 24시간 동안 modal 창 뜨지 않음 localStorage에 값이 들어감
const closeButton = document.querySelector('.no-open');
function disableModalFor24Hours() {
  const currentDate = new Date();
  const nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // 현재 날짜에 24시간을 더한 다음 날짜 계산

  localStorage.setItem('disableModalUntil', nextDate.getTime());
}

function shouldShowModal() {
  const disableModalUntil = localStorage.getItem('disableModalUntil');

  if (disableModalUntil) {
    const currentDate = new Date();
    const disableModalTime = new Date(parseInt(disableModalUntil));

    if (currentDate <= disableModalTime) {
      return false; // 24시간이 지나기 전에는 모달 표시하지 않음
    }
  }

  return true; // 모달 표시해야 함
}

function showOrHideModal() {
  if (shouldShowModal()) {
    document.getElementById('mainModal').style.display = "block";
  } else {
    document.getElementById('mainModal').style.display = "none";
  }
}

closeButton.addEventListener('click', function () {
  disableModalFor24Hours();
  showOrHideModal();
});

showOrHideModal();


showImage(currentIndex); // 서버 실행시 첫번째 index 이미지 화면에 랜더링 시켜주기 
document.querySelector(".banner__slider__prev").addEventListener("click", prevImage);
document.querySelector(".banner__slider__next").addEventListener("click", nextImage);
dotMove();
moveImage();