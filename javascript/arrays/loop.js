let cores = [
    {nome: 'verde', id: 1}, 
    {nome: 'azul', id: 2}, 
    {nome: 'rosa', id: 3}
];

/*for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
*/

for (let cor in cores) {
    console.log(cores[cor].nome)
}

for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.id}`)
}