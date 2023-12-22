"use strict";
const dataProducts = JSON.parse(dataProductsJson);

let procuctTemplate = document.querySelector('#productTemplate .product');
let cartTemplate = document.querySelector('#cartTemplate .product__cart');

let cont = document.querySelector('.container');
let cart = document.querySelector('.cart');



dataProducts.forEach(element => {
    let product = procuctTemplate.cloneNode(true);
    const addition = document.querySelector(".product__toCart");
    console.log(addition);
    product.id = element.productID;
    product.querySelector(".product__image img").src = element.image;
    product.querySelector(".product__info .product__title").textContent = element.title;
    product.querySelector(".product__info .product__description").textContent = element.description;
    product.querySelector(".product__info .product__price").textContent = element.price;
    product.querySelector(".product__toCart img").src = element.btnImage;
    product.querySelector(".product__toCart .product__toCartBtn").textContent = element.btnText;
    cont.appendChild(product);

    const cartContainer = document.querySelectorAll('.product__cart');
    if (cartContainer.length != 0) {
        if (cart.textContent === "") {
            let cartHeader = document.createElement("p");
            cartHeader.setAttribute("class", "cartHeader");
            cartHeader.textContent = "Cart Items";
            cart.appendChild(cartHeader);
        };
        addProductToCart(element, addition);
    };
});

function addProductToCart(element, addition) {
    addition.addEventListener("click", () => {
        dataProducts.forEach(e => {
            let cartItem = cartTemplate.cloneNode(true);
            cartItem.querySelector(".cart__image img").src = e.image;
            cartItem.querySelector(".cart__info .cart__title").textContent = e.title;
            const cartItemRemove = cartItem.querySelector(".product__cart__remove");
            // console.log(cartItemRemove);
            let price = cartItem.querySelector(".cart__info .cart__price");
            price.textContent = price.textContent + e.price;
            let color = cartItem.querySelector(".cart__info .cart__color");
            color.textContent = color.textContent + e.color;
            let size = cartItem.querySelector(".cart__info .cart__size");
            size.textContent = size.textContent + e.size;
            let quantity = cartItem.querySelector(".cart__info .cart__quantity");
            quantity.textContent = quantity.textContent + e.quantity;
            cart.appendChild(cartItem);

            cartItemRemove.addEventListener("click", () => {
                cartItem.remove();
                const cartSize = document.querySelectorAll(".product__cart").length;
                if (cartSize === 0) { cart.style = "display: none;" };
            });
        });
    });
};