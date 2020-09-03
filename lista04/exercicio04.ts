
let aleatorio: number = 0;
aleatorio = Math.floor(Math.random() * (6 - 0) + 0);


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um numero:", function (numero) {
    rl.close();

    numero == aleatorio ? console.log("Parábens! Voce acertou! Numero sorteado:", aleatorio) : console.log("Não foi dessa vez! Numero sorteado:", aleatorio)
})