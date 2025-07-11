const calculatorState = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    isOperatorClicked: false,
}

const display = document.querySelector('.display');
const numbers = document.querySelector('.calculator-numbers');
const operations = document.querySelector('.calculator-operations');

numbers.addEventListener('click', displayNumber);

operations.addEventListener('click', displayOperator)

function displayEquation() {
    const { firstNumber, operator, secondNumber } = calculatorState;

    if (operator && secondNumber) {
        display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
    } else if (operator) {
        display.innerHTML = `${firstNumber} ${operator}`;
    } else {
        display.innerHTML = firstNumber || '00';
    }
    console.log(calculatorState);
}

function displayOperator(event) {
    if (event.target.dataset.operation !== undefined) {
        const operator = event.target.dataset.operation;

        if (['+', '-', '/','x'].includes(operator)) {
            calculatorState.operator = operator;
            calculatorState.isOperatorClicked = true;
        }
    }

    displayEquation();
}

function displayNumber(event) {
    if (event.target.dataset.number !== undefined) {
        const number = event.target.dataset.number;

        if (!calculatorState.isOperatorClicked) {
            calculatorState.firstNumber += number;
        } else {
            calculatorState.secondNumber += number;
        }
        displayEquation();
    }

    displayEquation();
}

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