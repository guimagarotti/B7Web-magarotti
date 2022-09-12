function validar(usuario, senha) {    
    if (usuario === "guilherme" && senha === '1234') {
        return true;
    } else {
        return false;
    }
}

let usuario = "guilherme";
let senha = '1234';
let validacao = validar(usuario, senha);

if (validacao) {
    console.log("Acesso concebido.")
} else {
    console.log("Acesso NEGADO!")
}