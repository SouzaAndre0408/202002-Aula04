let IMC: number = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a altura", function (altura) {
    rl.question("Digite o peso:", function (peso) {

        IMC = peso / (altura * altura)

        if (IMC <= 18.5) {
            console.log('IMC', IMC, '/nPeso abaixo do normal');
        }

        else if (IMC > 18.5 && IMC < 25) {
            console.log('IMC:', IMC, '/nPeso ideal')
        }
        else if (IMC > 25 && IMC < 30) {
            console.log('IMC:', IMC, '/nAcima do Peso')
        }
        else if (IMC > 30 && IMC < 35) {
            console.log('IMC:', IMC, '/nObesiade Grau I')
        }
        else if (IMC >= 35 && IMC <= 40) {
            console.log('IMC:', IMC, '/nObesiade Grau II')
        }
        else {
            console.log('IMC:', IMC, '/nObesiade Grau III')
        }

        rl.close();

    })
})