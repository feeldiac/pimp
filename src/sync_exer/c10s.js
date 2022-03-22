//¿Qué devuelven estos códigos?
let numbers =[22, 33, 54, 66, 72]
//console.log(numbers[numbers.length]) //undefined

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
//console.log(grupoDeAmigos[5]) //Ironman

let str = 'un string cualquiera';
let arrayAleatorio= ["Digital", "House", true, "string", "123","false", 54, str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1]) //un string cualquiera

//Colecciones de películas y mas
//1
let arrayPeliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
// console.log(arrayPeliculas[3]);

//2
function cambioAMayuscula(array) {
    const arrayMayuscula = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        arrayMayuscula.push(element.toUpperCase());
    }
    // console.log(arrayMayuscula);
    return arrayMayuscula;
}
// cambioAMayuscula(arrayPeliculas);

//3
const peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function unirArrays(array1, array2) {
    const arrayUnido = array1.concat(array2);
    return cambioAMayuscula(arrayUnido);
}
// console.log(unirArrays(arrayPeliculas, peliculasAnimadas));

//4
function unirArrays2(array1, array2) {
    const elementoEliminado = array2.pop();
    const arrayUnido = array1.concat(array2);
    return cambioAMayuscula(arrayUnido);
}
// console.log(unirArrays2(arrayPeliculas, peliculasAnimadas));

//5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
function compararCalificaciones(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        const element1 = array1[i];
        const element2 = array2[i];
        if (element1 === element2) {
            console.log(`Las calificaciones de la película ${i + 1} son iguales: ${element1}`)
        } else {
            console.log(`Las calificaciones de la película ${i + 1}  no son iguales: ${element1} - ${element2}`)
        }
    }
}
compararCalificaciones(asiaScores, euroScores);
