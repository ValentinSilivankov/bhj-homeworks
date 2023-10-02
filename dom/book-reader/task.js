const BOOK = document.getElementById("book");
let fonts = document.querySelectorAll(".font-size");
let fontActive = document.querySelector(".font-size_active");

for (let i of fonts) {
  i.addEventListener("click", toggleActive);
}
function toggleActive(e) {
  fontActive.classList.remove("font-size_active");
  this.classList.add("font-size_active");
  fontActive = this;
  if (this.getAttribute("data-size") === "small") {
    BOOK.classList.add("book_fs-small");
    e.preventDefault();
  }
  if (this.getAttribute("data-size") === "big") {
    BOOK.classList.add("book_fs-big");
    BOOK.classList.remove("book_fs-small");
    e.preventDefault();
  }
}