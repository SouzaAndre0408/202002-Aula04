function NumAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [], Soma = 0;
for (let i = 0; i < 100; i++) {

    arr.push(NumAleatorios(0, 100));
    Soma += i;
}

console.log("Valores do array:", arr);
console.log("Media dos Valores:", (Soma / 100));
console.log("Soma dos valores", Soma);

array.sort(function (a, b) {
    return a - b;
});

console.log("Valores ordenados:", arr)