// Function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Select the feedback element
    const feedback = document.getElementById("feedback");

    // Check if an answer was selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
        return;
    }

    // Compare user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
