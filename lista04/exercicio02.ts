let impar: number = 0, par = 0;

for (let i = 0; i < 1001; i++) {

    if (i % 2 == 0) {
        par += i;
    }
    else
        impar += i;
}
console.log("Soma de Par:", par, "/nSoma de Impar:", impar)