
const media = () => {
    let nota1: number = 5
    let nota2: number = 5
    let media: number = 0

    return media = (nota1 * 0.4) + (nota2 * 0.6)
}

const aprovad = (e: number) => e < 7 ? 'Reprovado' : 'Aprovado'

const mostraMedia = () => {
    console.log("Média final: " + media())
    console.log("Situação do aluno: " + aprovad(media()))
}

mostraMedia()
