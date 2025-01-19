function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}
function calculate(operation) {
    // Get input values from the DOM
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    // Perform the operation and store the result
    const result = operation(number1, number2);

    // Display the result in the result span
    document.getElementById('calculation-result').textContent = result;
}
document.getElementById('add').addEventListener('click', function () {
    calculate(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    calculate(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    calculate(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    calculate(divide);
});
if (number2 === 0) {
    return "Error: Division by zero";
}
const resultSpan = document.getElementById('calculation-result');
if (result === "Error: Division by zero") {
    resultSpan.style.color = "red";
} else {
    resultSpan.style.color = "green";
}
