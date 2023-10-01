const ROTATOR = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

setInterval(() => {
    ROTATOR[currentIndex].classList.remove("rotator__case_active");
  if (currentIndex < ROTATOR.length - 1) {
    ROTATOR[currentIndex].nextElementSibling.classList.add(
      "rotator__case_active"
    );
    currentIndex++;
  } else {
    ROTATOR[0].classList.add("rotator__case_active");
    currentIndex = 0;
  }
}, 1000);