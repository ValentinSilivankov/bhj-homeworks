const LOADER = document.getElementById("loader");
const REQUEST = new XMLHttpRequest();

REQUEST.addEventListener("readystatechange", () => {
  if (REQUEST.readyState === REQUEST.DONE) {
    LOADER.classList.remove("loader_active");
    let data = JSON.parse(REQUEST.responseText);
    const item = document.getElementById("items");
    Object.keys(data.response.Valute).forEach(function (key) {
      item.innerHTML += `<div class="item">
            <div class="item__code">
                ${data.response.Valute[key].CharCode}
            </div>
            <div class="item__value">
                ${data.response.Valute[key].Value}
            </div>
            <div class="item__currency">
               руб.
            </div>
            </div>`;
    });
  }
});

REQUEST.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
REQUEST.send();