/*
Examen final
Programación Imperativa
Fernando Díaz A.
Camada 2  
*/

/* Ejercicio 1*/

// Datos contenidos en el archivo final.js
const alumnos = [
  {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
  },
  {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
  },
  {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
  },
  {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
  },
  {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
  },
];


/* Ejercicio 1.1

a. Qué tipo de dato contiene la variable ‘alumnos’?
La variable alumnos contiene una lista de objetos (Objects).

b. ¿Qué propiedades tiene la estructura definida en el archivo final.js? 
Los elementos dentro del array alumnos, es decir los objetos o alumnos individuales tienen las siguientes propiedades:
- id (int)
- nombre (string)
- apellido (string)
- legajo (int)
- notas (array)
*/

/* Ejercicio 1.2 
Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*) 
*/


//Implementacón
function ordenarDeFormaAscendente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].legajo > array[j + 1].legajo) {
                //Usando Destructuring assignment
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    //No se especifica pero opté por retornar el array ordenado
    return array;
}


//Prueba
console.table(alumnos);
ordenarDeFormaAscendente(alumnos);
console.table(alumnos);


/* Ejercicio 2 */

/* Ejercicio 2a. 
Crear un método que retorne el promedio de notas. (*) 
*/

//Implementación y declaración del objeto alumno
let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9],
    promedio: function() {
        let sumatoria = 0;
        for (let i = 0; i < this.notas.length; i++) {
            const element = this.notas[i];
            sumatoria += element;
        }
        return sumatoria / this.notas.length;
    }
}

//Prueba
console.log(alumno.promedio()); //8.6


/* Ejercicio 2b
Crear una función que ordene las notas del alumno de forma descendente. (*)
*/

//Implementacón
function ordenarDeFormaDescendente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                //Usando Destructuring assignment
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}

//Prueba
console.log(alumno.notas);
ordenarDeFormaDescendente(alumno.notas);
console.log(alumno.notas);


/* Ejercicio 3 */

/* Ejercicio 3a. 
Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.
*/

let matriz3X3 = [
    [1,5,6],
    [8,3,9],
    [2,4,7],
]

/*
Ejercicio 3b.
Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3. 
*/

//Implementación
function sumaMultiplosDe3(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
        const array = matriz[i];
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if (element % 3 === 0) {
                sumatoria += element;
            }
        }
    }

    return sumatoria;
}

//Prueba
console.log(sumaMultiplosDe3(matriz3X3)); //18

/*
Ejercicio 3c.
Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.
*/

function sumatoriaEsPar(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
        const array = matriz[i];
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            sumatoria += element;
        }
    }

    return sumatoria % 2 === 0 ? true : false;
}

//Prueba
console.log(sumatoriaEsPar(matriz3X3)); //false

/*
Ejercicio 3d.
Crear una función que retorne la suma de las diagonales de la matriz.
 */

//Implementación
function sumaDeDiagonales(matriz) {
    let sumas = {
        diagonalPrincipal: 0,
        diagonalSecundaria: 0,
    }

    for (let i = 0; i < matriz.length; i++) {
        sumas.diagonalPrincipal += matriz[i][i];
        sumas.diagonalSecundaria += matriz[i][matriz.length - i - 1];   
    }

    return sumas;
}

//Prueba
console.log(sumaDeDiagonales(matriz3X3)); //Diagonal ppal: 11, Diagonal sec: 11
