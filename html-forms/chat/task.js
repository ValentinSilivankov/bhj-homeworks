const CHAT = document.querySelector(".chat-widget");

CHAT.addEventListener("click", () => {
  CHAT.classList.add("chat-widget_active");
});

const BOT_TEXT = [
  "Здравствуйте! Как Вас зовут?",
  "Какой у вас вопрос?",
  "К сожалению все операторы сейчас заняты. Мы свяжемся с вами попозже."
];

let i = 0;

const TEXT = document.getElementById("chat-widget__input");
const MESSAGES = document.getElementById("chat-widget__messages");

TEXT.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && TEXT.value.length != 0) {
    MESSAGES.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
          })}</div>
          <div class="message__text">
            ${TEXT.value}
          </div>
        </div>
        `;
    TEXT.value = null;
    MESSAGES.innerHTML += `
        <div class="message">
          <div class="message__time">${new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
          })}</div>
          <div class="message__text">
           ${BOT_TEXT[i]}
          </div>
        </div>
        `;
    if (i < BOT_TEXT.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
});