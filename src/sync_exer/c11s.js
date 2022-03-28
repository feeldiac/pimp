//Clients list
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

//Banco
let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular) {
        for (let i = 0; i < this.clientes.length; i++) {
            const client = this.clientes[i];
            if (titular === client.titularCuenta) {
                return client;
            }
        }
    },
    deposito: function(titular, montoADepositar) {
        const cliente = this.consultarCliente(titular);
        const nuevoSaldo = cliente.saldoEnPesos += montoADepositar;
        console.log(`Depósito realizado, su nuevo saldo es: ${nuevoSaldo}.`);
    },
    extraccion: function(titular, montoAExtraer) {
        const cliente = this.consultarCliente(titular);
        const nuevoSaldo = cliente.saldoEnPesos -= montoAExtraer;
        nuevoSaldo < 0 ? console.log('Fondos insuficientes') : console.log(`Extracción realizada correctamente, su nuevo saldo es: ${nuevoSaldo}.`);
    }
}

//Testing methods
// console.log(consultarCliente('Jacki Shurmer'));
// banco.deposito('Jacki Shurmer', 10000);
// banco.extraccion('Jacki Shurmer', 200000);

//Propiedad única
let array = [{ nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49}, { nombre: 'Fer', edad: 23}, { pais: 'Colombia', departamento: 'Atlántico'}];
function propiedadUnica(array, property) {
    const newArray = [];
    
    //Objects could be different
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const keys = Object.keys(element);
      const values = Object.values(element);
      const uniquePropertyIndex = keys.indexOf(property);
      const uniqueValue = values[uniquePropertyIndex];
      const newObject = Object.fromEntries([[property, uniqueValue]]);
      newArray.push(newObject);
    }
    return newArray;
}
// console.log(propiedadUnica(array, 'pais'));


//Calculador de notas
const alumno = {
  nombre: 'Ernesto Pérez',
  numLegajo: 1202,
  notas: [5.1, 6, 8, 8.5, 2.3], //Aprobación > 7
}

function calculadorDeNotas(alumno) {
  let sumatoria = 0;
  for (let i = 0; i < alumno.notas.length; i++) {
    const nota = alumno.notas[i];
    sumatoria += nota;
  }
  const promedio = sumatoria / alumno.notas.length;
  console.log(`El estudiante ${alumno.nombre}, ${promedio >= 7 ? 'aprobó' : 'no aprobó'} y su promedio es ${promedio.toFixed(2)}`);
}

calculadorDeNotas(alumno);