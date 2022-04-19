
/** Ejercicio 1
 Escribir una función que reciba un array de elementos e indique si se encuentran ordenados de menor a mayor o no.
 La función debe retornar un booleano: true si el array esta ordenado, false, si no.
 */

let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

// Comprueba tu función con los 2 arrays en dos llamadas independientes

function isOrdered(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true;
}

// console.log(isOrdered(pruebaA));
// console.log(isOrdered(pruebaB));


/**
 * Ejercicio 2
 *
 * Escribir una función que
 *  reciba un array con nombres,
 *  y para cada nombre imprima el
 *  mensaje:
 *  Estimado (nombre) , vote por mí.
 */

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

function generadorDeMensajes(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`Estimado ${element}, vote por mí`);
  }
}

// generadorDeMensajes(nombres);

/**
 * Ejercicio 3
 * 
 * Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 
666666 
55555 
4444 
333 
22 
 */

function piramideInversa(numero) {
  for (let i = numero; i >= 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String(i);
    }
    console.log(row);
  }
}

//  piramideInversa(6);

/**
 * Ejercicio 4
 * 
 * Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Cargarlos en una matriz y luego,
hacer la suma de los valores horizontales de cada fila, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.

 */

function sumaArray(array1, array2, array3) {
  let matrix = [array1, array2, array3];
  let sum = {
    rows: [0, 0, 0],
    cols: [0, 0, 0],
    diags: [0, 0]
  };
  for (let i = 0, k = matrix.length - 1; i < matrix.length; i++, k--) {
    const array = matrix[i];
    sum.diags[0] += matrix[i][i];
    sum.diags[1] += matrix[i][k];
    for (let j = 0; j < array.length; j++) {
      const element = array[j];
      sum.rows[i] += element;
      sum.cols[i] += array[j];
    }
  }
  console.table(sum);
}

// sumaArray([4, 9, 2], [3, 5, 7], [8, 1, 6]);
