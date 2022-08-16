const firstNumber = +(prompt('Enter first number: '));

    if (isNaN(firstNumber)) {
        alert("Not a number");
        
    }

const operator = prompt('Enter operator (+, -, * or / ): ');

const secondNumber = +(prompt('Enter second number: '));
    if (isNaN(firstNumber)) {
        alert("Not a number");
    }

let calculation;

    if (operator === '+') {
        calculation = firstNumber + secondNumber;
    }

    else if (operator === '-') {
        calculation = firstNumber - secondNumber;
    }

    else if (operator === '*') {
        calculation = firstNumber * secondNumber;
    }

    else if (operator === '/') {
        calculation = firstNumber / secondNumber;
    }

    else {
        calculation = "This operation is not exist";
    }

let message = (`Your result is "${calculation}"`)

alert(message);