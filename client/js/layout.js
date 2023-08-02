//모달 창 닫기
function exitModal() {
  document.getElementById("mainModal").style.display = "none";
}

document.querySelector(".close").addEventListener("click", function () {
  exitModal();
});

// 오늘 하루 보지 않기 클릭시 24시간 동안 modal 창 뜨지 않음 localStorage에 값이 들어감
const closeButton = document.querySelector(".no-open");
function disableModalFor24Hours() {
  const currentDate = new Date();
  const nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // 현재 날짜에 24시간을 더한 다음 날짜 계산

  localStorage.setItem("disableModalUntil", nextDate.getTime());
}

function shouldShowModal() {
  const disableModalUntil = localStorage.getItem("disableModalUntil");

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
    document.getElementById("mainModal").style.display = "block";
  } else {
    document.getElementById("mainModal").style.display = "none";
  }
}

closeButton.addEventListener("click", function () {
  disableModalFor24Hours();
  showOrHideModal();
});

showOrHideModal();
