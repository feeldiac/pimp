/*
Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.
*/

// function loro(text) {
//     for (let i = 0; i < 5; i++) {
//         console.log(text);
//     }
// }

// loro('Digital House');




/*
1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes. 
*/

function proximosDiezNumeros(numero) {
    for (let indice = 1; indice < 11; indice++) {
        console.log(numero + indice);
    }
}

proximosDiezNumeros(5);



//Fibonacci
function fibonacciSequence(n) {
    let a = 0, b = 1;
    console.log(a), console.log(b);
    for(let i = 0; i < n + 1; i++) {
        b = b + a;
        a = b - a;
        console.log(b);
    }
}

fibonacciSequence(15);
