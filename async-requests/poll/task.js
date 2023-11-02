const REQUEST = new XMLHttpRequest();

REQUEST.addEventListener("readystatechange", () => {
  if (REQUEST.readyState === REQUEST.DONE) {
    let data = JSON.parse(REQUEST.responseText);
    const POLL_TITLE = document.getElementById("poll__title");
    POLL_TITLE.textContent = data.data.title;
    const POLL_ANSWERS = document.getElementById("poll__answers");
    for (let i of data.data.answers) {
        POLL_ANSWERS.innerHTML += 
      `<button class="poll__answer">
      ${i}
      </button>`;
    }
    const ANSWER = document.querySelectorAll(".poll__answer");
    for (let k of ANSWER) {
      k.onclick = () => {
        alert("Спасибо, ваш голос засчитан!");
      };
    }
  }
});

REQUEST.open(
    "GET",
    "https://students.netoservices.ru/nestjs-backend/poll"
);
REQUEST.send();