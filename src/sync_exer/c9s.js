const prompt = require("prompt-sync")({ sigint: true });
/*
1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola debés utilizar el método console.log().
*/

function printPhrase(phrase) {
    console.log(phrase);
}
// printPhrase(prompt('Write a phrase: '));

/*
2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
*/

function greeting(name) {
    console.log(`Hello, ${name}!`);
}
// greeting(prompt('Whats your name? '))

/*
3) Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.
*/

function sumOfTwoNumbers(number1, number2) {

    console.log(parseInt(number1) + parseInt(number2));
}
// sumOfTwoNumbers(prompt('Number 1: '), prompt('Number 2: '));

/*
4) Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola: “Tienes 20 años”.
*/

function yourAge(birthYear, currentYear = 2022) {
    const age = parseInt(currentYear) - parseInt(birthYear);
    console.log(`You are ${age} years old`);
}
// yourAge(prompt('Your birthyear: '));

/*
5) Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!"
*/

function guessMyNumber(playerNumber) {
    let randomNumber = Math.floor(Math.random()*10) + 1;
    const winMessage = "Yei, that's the number!";
    const failMessage = "Sorry, try again";
    parseInt(playerNumber) === randomNumber ? console.log(winMessage, randomNumber) : console.log(failMessage, randomNumber); 
}
// guessMyNumber(prompt('Guess my number. Write down a whole number between 1 and 10: '));

/*
6) Escribí un programa que imprima los números pares del 0 al 100.
*/

const evenNumbers = function() {
    for(let i = 0; i < 101; i++) {
        i % 2 == 0 ? console.log(i) : '';
    }
}
// evenNumbers();

/*
7) Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola: const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
*/

const displayNames = function() {
    const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
    for (let index = 0; index < nombres.length; index++) {
        const element = nombres[index];
        console.log(element);
    }
}
// displayNames();

/*
8) Construí un pseudocódigo que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.
*/

const displayConditionalPercentage = function(number) {
    if (parseInt(number) > 500 ) {
        console.log(parseInt(number)*18/100);
    }
}
// displayConditionalPercentage(prompt('Pass a number: '));

/*
9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.
*/


/*
10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.
*/


/*
11) Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar.
*/


/*
12) Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.
*/