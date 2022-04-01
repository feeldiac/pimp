/* 
Realizado por Fernando Díaz
Parcial 1
Programación Imperativa
*/


//Ejercicio 1

//1.1
const estudiante = {
    nombre: 'Fernando',
    apellido: 'Diaz',
    camada: 2,
    esParcial: true,
}

//1.2
function situacionEstudiante(nota) {
    let condicion = '';
    if (nota < 4) {
        condicion = 'desaprobado';
    } else if (nota >= 7 ) {
        condicion = 'promocionado';
    } else if (nota >= 4 || nota < 7) {
        condicion = 'debe rendir examen final';
    }
    console.log(`El alumno obtuvo una nota igual a ${nota} por lo tanto su condición es ${condicion}`);
    return condicion;
}

situacionEstudiante(7.2);

//Ejercicio 2

//2.1
let clase = [];

//2.2
const companiera1 = {
    nombre: 'Dayana',
    apellido: 'Dominguez',
    bimestre: 2,
}

const companiera2 = {
    nombre: 'Angélica',
    apellido: 'Arias',
    bimestre: 2,
}

const companiera3 = {
    nombre: 'Luisa',
    apellido: 'Ortiz',
    bimestre: 2,
}

//Agregar los objetos al array anterior
clase.push(companiera1, companiera2, companiera3);
console.log(clase);

//2.3
function siguienteCursada(clase) {
    for (let i = 0; i < clase.length; i++) {
        const element = clase[i];
        element.bimestre += 1;
    }
}

//2.4
console.log(clase);
siguienteCursada(clase);
console.log(clase);


//Ejercicio 3

//3.1
//progresoPlayground será un entero entre 0 y 100
function aprobarAlumnos(asistencias, progresoPlayground) {
    let condicion = '';
    const asistenciaMinima = 23;
    asistencias >= asistenciaMinima && progresoPlayground === 100 ? 
    condicion = 'aprobado' : condicion = 'desaprobado';
    return condicion;
}
console.log(aprobarAlumnos(25, 100));