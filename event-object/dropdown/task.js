function openMenu() {
    document.querySelector(".dropdown__list").classList.add("dropdown__list_active");
  }
  
  function closeMenu() {
    document.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
  }
  
  const VALUE_BTN = document.querySelector(".dropdown__value");
  
  VALUE_BTN.addEventListener("click", openMenu);
  
  let arrayLink = Array.from(document.querySelectorAll(".dropdown__item"));
  
  arrayLink.forEach((item, index) => {
    item.onclick = () => {
      closeMenu();
      VALUE_BTN.textContent = arrayLink[index].textContent;
      return false;
    };
  });