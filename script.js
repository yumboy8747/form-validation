let button = document.querySelector(".checkButton__button");

button.addEventListener("click", function () {
  let idAlert = document.querySelector(".inputs__id-alert");
  let idValue = document.querySelector(".id").value;
  let passwordAlert = document.querySelector(".inputs__password-alert");
  let passwordValue = document.querySelector(".password").value;

  if (idValue.length < 5) {
    idAlert.textContent = "6글자 이상의 아이디를 입력하세요!!";
    idAlert.classList.add("idAlertStyle");
  } else if (idValue.length >= 5) {
    idAlert.textContent = "";
  }

  if (passwordValue.length < 5) {
    passwordAlert.textContent = "6글자 이상의 비밀번호를 입력하세요!!";
    passwordAlert.classList.add("passwordAlertStyle");
  } else if (passwordValue.length >= 5) {
    passwordAlert.textContent = "";
  }
});
