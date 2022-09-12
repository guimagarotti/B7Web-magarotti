// Retorno Condicional
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

let idade = 18
let resultado = maiorDeIdade(idade)

if (resultado) {
    console.log("MAIOR de idade!")
} else {
    console.log("MENOR de idade!")
}