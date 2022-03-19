const team8 = {
members: ['Karina Vargas', 'Natalia Giraldo', 'Lesly Rodriguez', 'Byron Escobar', 'Fernando Díaz Acosta'],
}

//Microdesafío 1
function test1(x,y) {
    return y - x;
}
console.log(test1(10,40)); //30

//Microdesafío 2
function test2(x,y) {
    return x * 2
    console.log(x)
    return x / 2
}
console.log(test2(10)); //20

const prompt = require("prompt-sync")({ sigint: true });

//Convertir pulgadas en centímetros

let pulgadasEnCentimetros = pulgadas => parseInt(pulgadas) * 2.54;
let pulgadasUsuario = prompt("Ingrese el valor en pulgadas: ");
console.log(pulgadasEnCentimetros(pulgadasUsuario));


//Convertir string a URL

let cadenaEnUrl = cadena => `http://www.${cadena}.com`;
let cadenaUsuario = prompt("Ingrese la cadena que quiere convertir: ");
console.log(cadenaEnUrl(cadenaUsuario));


//Añadir admiración a un string

let fraseAdmiracion = cadena => `${cadena}!!!!`;
let fraseUsuario = prompt("Ingrese la frase a convertir: ");
console.log(fraseAdmiracion(fraseUsuario));


//Calculo edad de los perros

let calculoEdadPerros = edadPerro => edadPerro * 7;
let edadPerro = prompt("Ingrese la edad del perro: ");
console.log(calculoEdadPerros(edadPerro));


//Calculo valor hora de trabajo

let calculoHoraTrabajo = (sueldoMensual) => sueldoMensual / 40;
let sueldoMensualUsuario = prompt("Ingrese el valor del sueldo mensual: ");
console.log(`El valor de tu hora de trabajo es: ${calculoHoraTrabajo(sueldoMensualUsuario)}`);


//Calculador IMC
let peso = Number(prompt("Ingrese su peso en kg: "));
let altura = Number(prompt("Ingrese su altura en m: "));
// function calculadorIMC(peso, altura) {
//     return peso / (altura ** 2);
// }
// console.log(calculadorIMC(peso,altura));
const imcCalculator = (weight, height) => weight / Math.pow(height, 2);
console.log(imcCalculator(peso,altura));

// From minus to mayus
function toUpperCase(string) {
    return string.toUpperCase();
}
console.log(toUpperCase('La vida es bella.'))

