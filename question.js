const answerButtons = document.querySelectorAll(".answer-button");
const nextButton = document.querySelector(".next-btn");

let selectedAnswer = false;

answerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        answerButtons.forEach(function(b) {
            b.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedAnswer = true;

    });

});

nextButton.addEventListener("click", function(event) {

    if (selectedAnswer === false) {

        event.preventDefault();

        alert("Please select an answer first.");

    }

});
const filterLink = document.querySelector(".filter-link");

filterLink.addEventListener("click", function(event) {

    const leavePage = confirm("Go to Filters? Your current answer will not be saved.");

    if (leavePage === false) {

        event.preventDefault();

    }

});