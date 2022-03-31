const misMascotas = [
    {
        nombre: 'Flipper',
        raza: 'Schnnauzer',
        edad: 5,
        sonido: 'Guau',
        ladrar: function() {
            return this.sonido + ' ' + this.sonido;
        }
    },

    {
        nombre: 'Skrillex',
        raza: 'Bengal',
        edad: 9,
        sonido: 'Miau',
        maullar: function() {
            return this.sonido + ' ' + this.sonido;
        }
    }
]

// console.log(misMascotas[1].maullar());


function aumentarEdad(animal) {
    animal.edad += 1;
}

// console.log(misMascotas[0]);
// aumentarEdad(misMascotas[0]);
// console.log(misMascotas[0]);

