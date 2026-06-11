const cartItems = document.querySelectorAll(".cart-item");
const totalText = document.querySelector(".cart-total");
const titleText = document.querySelector(".cart-title-bar h1");

function updateCartTotal() {
    let total = 0;
    let itemCount = 0;

    cartItems.forEach(function(item) {
        const quantityText = item.querySelector(".cart-quantity p");
        const priceText = item.querySelector(".cart-price");

        const quantity = Number(quantityText.textContent);
        const price = Number(priceText.textContent.replace("$", ""));

        total = total + quantity * price;
        itemCount = itemCount + quantity;
    });

    totalText.textContent = "TOTAL $" + total;
    titleText.textContent = "CART (" + itemCount + " Items)";
}

cartItems.forEach(function(item) {
    const quantityText = item.querySelector(".cart-quantity p");
    const minusButton = item.querySelector(".cart-quantity button:first-child");
    const plusButton = item.querySelector(".cart-quantity button:last-child");

    plusButton.addEventListener("click", function() {
        let quantity = Number(quantityText.textContent);
        quantity = quantity + 1;
        quantityText.textContent = quantity;

        updateCartTotal();
    });

    minusButton.addEventListener("click", function() {
        let quantity = Number(quantityText.textContent);

        if (quantity > 1) {
            quantity = quantity - 1;
            quantityText.textContent = quantity;
        }

        updateCartTotal();
    });
});

updateCartTotal();