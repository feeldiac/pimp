/* 
Crear una función que imprima todos los dígitos decimales, del 0 al 9,
usando un ciclo For.
*/

function printDecimals() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

// printDecimals();

/* 
Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres.
*/

function printCountByThrees() {
    for (let i = 5; i <= 20; i+=3) {
        console.log(i);
    }
}

// printCountByThrees();

/* 
Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100.
*/

const SumOf100FirstNumbers = function() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

// SumOf100FirstNumbers();


/* 
Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase.
*/

function countVowels(string) {
    //Considerando minusculas y mayusculas sin acento
    const results = string.match(/[aeiou]|[AEIOU]/g);
    console.log(results.length)
}

// countVowels('Hola, mi nombre es Ernesto Pérez'); //11


/* 
Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida.
*/

function reversedList(list) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        newList[i] = list[list.length - i -1]
    }
    return newList
}

// console.log(reversedList([1,2,3,4,5,6,7,9,8]));


/* 
Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666
*/

function pyramid() {
    let prog = 0;
    for (let i = 0; i < 5; i++) {
        prog += Math.pow(10, i);
        const row = prog * (i + 1);
        console.log(row);
    }
}

pyramid();