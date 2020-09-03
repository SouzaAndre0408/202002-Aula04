const ordena = (e) => e < 2 ? `Aprovado` : e < 4 ? `Lista de espera` : `Não foi dessa vez`

const aprovado = (elementos) => {
    elementos.reduce((x, texto, index) => {
        console.log("Aluno: " + texto + " com situação de " + ordena(index))
    }, "")
}
let nomes = ["Andre", "Leh", "Rinata", "Naruto", "Kakashi", "Jiraya"]
aprovado(nomes)