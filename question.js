const answerButtons = document.querySelectorAll(".answer-button");

answerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        answerButtons.forEach(function(b) {
            b.classList.remove("selected");
        });

        button.classList.add("selected");

    });

});