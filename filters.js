const filterButtons = document.querySelectorAll(".filter-options button");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.classList.toggle("selected");
    });
});