window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".reveal");
    for (let i of reveals) {
      const { top, bottom } = i.getBoundingClientRect();
      if (50 < bottom && top < window.innerHeight - 50) {
        i.classList.add("reveal_active");
      } else {
        i.classList.remove("reveal_active");
      }
    }
  });