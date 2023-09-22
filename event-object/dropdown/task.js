const ARRAY_LINK = Array.from(document.querySelectorAll(".dropdown__link"));
const btn = document.querySelector(".dropdown__value");

btn.addEventListener('click', Onclick)

function Onclick() {
    let classListActive = document.querySelector(".dropdown__list");

    if (classListActive.className == "dropdown__list dropdown__list_active") {
        classListActive.classList.remove('dropdown__list_active');
    } else {
        classListActive.classList.add('dropdown__list_active');
    }
}

ARRAY_LINK[0].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = ARRAY_LINK[0].textContent;

    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}

ARRAY_LINK[1].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = ARRAY_LINK[1].textContent;

    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}

ARRAY_LINK[2].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = ARRAY_LINK[2].textContent;

    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}

ARRAY_LINK[3].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = ARRAY_LINK[3].textContent;
    
    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}