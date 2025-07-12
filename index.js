const calculatorState = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    isOperatorClicked: false,
    isResultDisplayed: false,
}

const display = document.querySelector('.display');
const numbers = document.querySelector('.calculator-numbers');
const operations = document.querySelector('.calculator-operations');
const equalsTo = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

numbers.addEventListener('click', clickNumber);
operations.addEventListener('click', clickOperator)
equalsTo.addEventListener('click', clickEqualsTo)
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
    calculatorState.isResultDisplayed = false;

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

function clickEqualsTo() {
    const { firstNumber, operator, secondNumber } = calculatorState;

    if (firstNumber && secondNumber && operator) {
        const answer = doMath();
        resetAfterMath(answer);
        displayEquation();
    }
}

function doMath() {
     const { firstNumber, operator, secondNumber } = calculatorState;
    const first = Number(firstNumber);
    const second = Number(secondNumber);

    return operate(first, second, operator);
}

function resetAfterMath(answer, operator = '') {
    clearEquation();
    calculatorState.firstNumber = answer;
    calculatorState.isResultDisplayed = true;
    console.log(calculatorState);

    if (operator != '') {
        calculatorState.isOperatorClicked = true;
        calculatorState.operator = operator;
    }
}

function singlePairEvaluation(currentOperator) {
    const ans = doMath();
    resetAfterMath(ans, currentOperator);
}

function clickOperator(event) {
    if (event.target.dataset.operation !== undefined) {
        const operator = event.target.dataset.operation;
        const firstNumber = calculatorState.firstNumber;
        const secondNumber = calculatorState.secondNumber;

        if (['+', '-', '/','x'].includes(operator) && !secondNumber) {
            calculatorState.operator = operator;
            calculatorState.isOperatorClicked = true;

        } else if (calculatorState.isOperatorClicked && ['+', '-', '/','x'].includes(operator) && firstNumber && secondNumber) {
            singlePairEvaluation(operator);
        }
        displayEquation();
    }

}

function clickNumber(event) {
    if (event.target.dataset.number !== undefined) {
        const number = event.target.dataset.number;

        if (!calculatorState.isOperatorClicked) {
            if (calculatorState.isResultDisplayed) {
                calculatorState.firstNumber = '';
                calculatorState.firstNumber += number;
                calculatorState.isResultDisplayed = false;
            } else {
                calculatorState.firstNumber += number;
            }
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
        if(checkDivideByZero(num2)) return;
        return divide(num1, num2);
    }
}

function checkDivideByZero(number) {
    if (number == 0) {
        alert("Divisible by 0 is NOT possible!!")
        return true;
    } else return false;
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