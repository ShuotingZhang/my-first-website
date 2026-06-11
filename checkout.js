const form = document.querySelector(".checkout-form");

form.addEventListener("submit", function(event) {

    const cardName = document.querySelector("#card-name").value;
    const cardNumber = document.querySelector("#card-number").value;
    const cvv = document.querySelector("#cvv").value;
    const expiry = document.querySelector("#expiry").value;
    const address = document.querySelector("#address").value;
    const state = document.querySelector("#state").value;
    const postcode = document.querySelector("#postcode").value;

    if (
        cardName === "" ||
        cardNumber === "" ||
        cvv === "" ||
        expiry === "" ||
        address === "" ||
        state === "" ||
        postcode === ""
    ) {

        event.preventDefault();

        alert("Please complete all fields before checkout.");
    }
});