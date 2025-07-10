// let firstNumber = 10
// let secondNumber = 5
// let operator = "+";

const display = document.querySelector('.display');
const numbers = document.querySelector('.calculator-numbers');
const operations = document.querySelector('.calculator-operations');

numbers.addEventListener('click', function (e){
    console.log(e.target);
    console.log(e.target.dataset.number);
})

operations.addEventListener('click', function (e){
    console.log(e.target);
    console.log(e.target.dataset.operation);
})

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}

//Arithmetic Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}