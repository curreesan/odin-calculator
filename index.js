const calculatorState = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    isOperatorClicked: false,
}

const display = document.querySelector('.display');
const numbers = document.querySelector('.calculator-numbers');
const operations = document.querySelector('.calculator-operations');
const equalsTo = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

numbers.addEventListener('click', displayNumber);
operations.addEventListener('click', displayOperator)
equalsTo.addEventListener('click', displayEqualsTo)
clear.addEventListener('click', clearEquation)
backspace.addEventListener('click', clearLastDigit)

function clearLastDigit() {
     let { firstNumber, operator, secondNumber } = calculatorState;

     if (secondNumber != '') {
         calculatorState.secondNumber = secondNumber.slice(0, -1);

     } else if (operator != '') {
            calculatorState.operator = '';

     } else if (firstNumber != '') {
        calculatorState.firstNumber = firstNumber.slice(0,-1);
     };

     displayEquation();
}

function clearEquation() {
    calculatorState.firstNumber = '';
    calculatorState.secondNumber = '';
    calculatorState.operator = '';
    calculatorState.isOperatorClicked = false;
    displayEquation();
}

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

function displayEqualsTo (event) {
    console.log(event.target);
    const { firstNumber, operator, secondNumber } = calculatorState;

    if (firstNumber && secondNumber && operator) {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        const answer = operate(first, second, operator);
        console.log(answer);

        resetAfterMath(answer);
    }
}

function resetAfterMath(answer) {
    clearEquation();
    calculatorState.firstNumber = answer;
    displayEquation();
}

function displayOperator(event) {
    if (event.target.dataset.operation !== undefined) {
        const operator = event.target.dataset.operation;

        if (['+', '-', '/','x'].includes(operator)) {
            calculatorState.operator = operator;
            calculatorState.isOperatorClicked = true;
            displayEquation();
        }
    }

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
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "x") {
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