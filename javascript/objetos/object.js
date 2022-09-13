let pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Magarotti',
    idade: 18,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())