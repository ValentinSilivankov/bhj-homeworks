let countdown = document.getElementById("timer");

let countFuncDown = function () {
  if (countdown.textContent > 0) {
    countdown.textContent --;
  } else {
    alert(`Вы победили в конкурсе!`);
    window.clearInterval(timer);
  }
};

let timer = window.setInterval(countFuncDown, 1000);