
for (let counter = 1; counter <=1; counter +=1) {

    const firstNumber = +(prompt('Enter first number: '));

    if (isNaN(firstNumber)) {
        alert("It's not a number");
        break;
    }

    let operator = prompt('Enter operator (+, -, * or / ): ');

    const secondNumber = +(prompt('Enter second number: '));
        if (isNaN(firstNumber)) {
            alert("It's not a number");
            break;
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

}