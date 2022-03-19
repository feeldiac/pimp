const prompt = require("prompt-sync")({ sigint: true });

function addition(num1, num2) {
    return num1 + num2;
}

function substraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2 = 0) {
    return num1 / num2;
}

const powerOfNumber = (number) => multiplication(number,number);
const meanOfThreeNumbers = (number1, number2, number3) => division(addition(number1, number2, number3), 3);
const porcentageValue = (total, porcentage) => division(multiplication(total, porcentage), 100);

//Testing
console.log('Testing the arithmetic functions')
console.log('Addition');
const add = addition(Number(prompt('Número 1: ')), Number(prompt('Número 2: ')));
console.log(add);
console.log('Substraction');
const sub = substraction(Number(prompt('Número 1: ')), Number(prompt('Número 2: ')));
console.log(sub);
console.log('Multiplication');
const mult = multiplication(Number(prompt('Número 1: ')), Number(prompt('Número 2: ')));
console.log(mult);
console.log('Division');
const div = division(Number(prompt('Número 1: ')), Number(prompt('Número 2: ')));
console.log(div);