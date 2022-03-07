const prompt = require("prompt-sync")({ sigint: true });

let name = prompt('¿Cuál es tu nombre?: ');
console.log(`${name} es un nombre muy bonito, ¿por qué te llamaron así?`);

