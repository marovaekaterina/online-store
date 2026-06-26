// СЛАЙДЕР

const images = [
    "images/slider-images/img-1.png",
    "images/slider-images/img-2.png",
    "images/slider-images/img-3.png",
];

let index = 0;

function prevButton() {
    index++;

    if(index >= images.length) {
        index = 0;
    }

    document.getElementById("slide").src = images[index];
}

function nextButton() {
    index--;

    if(index < 0) {
        index = images.length - 1;
    }

    document.getElementById("slide").src = images[index];
}



// СЧЁТЧИК

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    const plus = card.querySelector(".plus");
    const minus = card.querySelector(".minus");
    const count = card.querySelector(".count");

    let quantity = 0;

    plus.addEventListener("click", () => {
        quantity++;
        count.textContent = quantity;
    });

    minus.addEventListener("click", () => {
        if(quantity > 0) {
            quantity--;
            count.textContent = quantity;
        }
    });
});



// ДОБАВЛЕНИЕ В КОРЗИНУ

const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const title = card.querySelector(".product-title").textContent;
        const quantity = Number(card.querySelector(".count").textContent);

        if (quantity === 0) {
            alert("Сначала выберите количество товара");
            return;
        }

        alert(
            `В корзину добавлен товар:\n\n` + `Название: ${title}\n` + `Количество: ${quantity}`
        );

        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        const existingProduct = cart.find(item => item.title === title);

        if(existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({
                title: title,
                quantity: quantity
            });
        }

        sessionStorage.setItem("cart", JSON.stringify(cart))

    });

});
