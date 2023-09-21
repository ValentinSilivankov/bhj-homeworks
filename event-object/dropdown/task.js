const Arraasy = Array.from(document.querySelectorAll(".dropdown__link"));
const btn = document.querySelector(".dropdown__value");

btn.addEventListener('click', Onclick)

function Onclick() {
    let sdf = document.querySelector(".dropdown__list");

    if (sdf.className == "dropdown__list dropdown__list_active") {
        sdf.classList.remove('dropdown__list_active');
    } else {
        sdf.classList.add('dropdown__list_active');
    }
}

Arraasy[0].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = Arraasy[0].textContent;

    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}

Arraasy[1].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = Arraasy[1].textContent;

    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}

Arraasy[2].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = Arraasy[2].textContent;

    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}

Arraasy[3].onclick = function(event){
    document.querySelector(".dropdown__value").textContent = Arraasy[3].textContent;
    
    if (event.target.nodeName != 'A') return;
    document.querySelector(".dropdown__list").classList.remove('dropdown__list_active');
    return false;
}