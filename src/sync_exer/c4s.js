const prompt = require("prompt-sync")({ sigint: true });
/* 
Situación 1
Un profesor que ingresa a la plataforma digital de la escuela a diligenciar las notas de sus estuadiantes.
*/

const fullName = prompt('Ingrese su nombre completo: ');
const grade = prompt('Ingrese el grado a diligenciar: ');
const signature = prompt('Ingrese el nombre de la asignatura: ');
const totalStudents = prompt('Ingrese el número total de estudiantes: ');
const students = {};

for(let i = 0; i < totalStudents; i++) {
    students[i] = {
        name: prompt('Nombre del estudiante: '),
        grade: prompt('Nota del estudiante: '),
    };
}
console.log(students);


/*
Situación 2
Se está preparando la materia prima para la cuantificación de lignina y azúcares en biomasa.
*/

//Relativo a la biomasa
const initialWeight = prompt('Peso inicial de la bioamasa(g): ');
const initialMoisture = prompt('Humedad inicial(%): ');
const finalMoisture = prompt('Humedad final(%): ');
const dryTipe = prompt('Tipo de secado: ');
const dryTime = prompt('Horas de secado: ');
const avgTemperature = prompt('Temperatura promedio de secado: ');
const finalWeight = prompt('Peso final de la bioamasa(g): ');



