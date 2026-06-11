const filterButtons = document.querySelectorAll(".filter-options button");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.classList.toggle("selected");
    });
});
const pricePoints = document.querySelectorAll(".price-point");

pricePoints.forEach(function(point) {

    point.addEventListener("click", function() {

        pricePoints.forEach(function(p) {
            p.classList.remove("active");
        });

        point.classList.add("active");

    });

});