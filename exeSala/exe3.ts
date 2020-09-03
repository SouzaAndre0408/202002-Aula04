function NumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numero: number = 0, array = [], ord = 1, aux = 0;
numero = NumAleatorio(0, 100)

for (let i = 0; i < numero; i++) {
    array.push(NumAleatorio(0, 100));
}

function ordenarArray() {
    while (ord == 1) {

        ord = 0;
        for (let i = 0; i < numero; i++) {
            if (array[i] > array[i + 1]) {
                ord = 1;
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }

    }

}
ordenarArray();
console.log(array)