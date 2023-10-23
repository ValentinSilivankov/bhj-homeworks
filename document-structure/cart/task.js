const PLUS = document.getElementsByClassName(
    "product__quantity-control product__quantity-control_inc"
  );
const MINUS = document.getElementsByClassName(
    "product__quantity-control product__quantity-control_dec"
  );
const QUANTITY = document.getElementsByClassName("product__quantity-value");
const ADD = document.getElementsByClassName("product__add");
const PRODUCTS = document.getElementsByClassName("product");
const IMAGES = document.getElementsByClassName("product__image");
const CART = document.querySelector(".cart__products");
let arryId = [];
  
for (let i = 0; i < PLUS.length; i++) {
    PLUS[i].onclick = () => {
        QUANTITY[i].textContent = Number(QUANTITY[i].textContent) + 1;
    };
    MINUS[i].onclick = () => {
        if (QUANTITY[i].textContent > 1) {
            QUANTITY[i].textContent = Number(QUANTITY[i].textContent) - 1;
        }
    };
    ADD[i].onclick = () => {
        const cartCount = document.querySelectorAll(".cart__product-count");
        if (arryId.includes(PRODUCTS[i].getAttribute("data-id"))) {
            cartCount[i].textContent =
            Number(cartCount[i].textContent) + Number(QUANTITY[i].textContent);
        } 
        else {
            CART.innerHTML += 
            `<div class="cart__product" data-id="${PRODUCTS[i].getAttribute("data-id")}">
            <img class="cart__product-image" src="${IMAGES[i].getAttribute("src")}">
            <div class="cart__product-count">${QUANTITY[i].textContent}</div>
            </div>`;
        }
        arryId.push(PRODUCTS[i].getAttribute("data-id"));
    };
}