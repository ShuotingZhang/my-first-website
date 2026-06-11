const productCards = document.querySelectorAll(".product-card");

productCards.forEach(function(card) {
    const quantityText = card.querySelector(".quantity-row p");
    const minusButton = card.querySelector(".quantity-row button:first-child");
    const plusButton = card.querySelector(".quantity-row button:last-child");
    const heartButton = card.querySelector(".heart-btn");
    const addCartButton = card.querySelector(".add-cart-btn");

    plusButton.addEventListener("click", function() {
        let quantity = Number(quantityText.textContent);
        quantity = quantity + 1;
        quantityText.textContent = quantity;
    });

    minusButton.addEventListener("click", function() {
        let quantity = Number(quantityText.textContent);

        if (quantity > 1) {
            quantity = quantity - 1;
            quantityText.textContent = quantity;
        }
    });

    heartButton.addEventListener("click", function() {
        heartButton.classList.toggle("liked");
    });

    addCartButton.addEventListener("click", function() {
        alert("Added to cart!");
    });
});