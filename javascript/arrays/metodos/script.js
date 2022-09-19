/*let lista = [45, 2, 4, 8, 50, 15];*/
let lista = [
    {id: 1, nome:'Jonas', sobrenome: 'Pereira'},
    {id: 2, nome:'Cleber', sobrenome: 'Silva'},
    {id: 3, nome:'Marcus', sobrenome: 'Alves'}
]
let lista2 = [];

// MAP
/* lista2 = lista.map((num) => {
    return num * 2;
});
*/

// FILTER
/*lista2 = lista.filter(function(num) {
    if (num < 20) {
        return num;
    }
});
*/

// EVERY -- TODOS de acordo
/* lista2 = lista.every((num) => {
    return (item < 3) ? true : false;
});
*/

// SOME -- UM caso
/* lista2 = lista.some((num) => {
    return (item < 3) ? true : false;
});
*/

// FIND
lista2 = lista.find((item) => {
    if (item.nome == 'Cleber') {
        return true;
    } else {
        return false;
    }
});

console.log(lista2);