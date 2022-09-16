function trocarAnimal(fileName, animalName) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+ fileName);
    document.querySelector('.imagem').setAttribute('data-animal', animalName);

    document.getElementById('exibidor').innerHTML = "Qual o animal?";
}

function exibeAnimal() {
    let type = document.querySelector('.imagem').getAttribute('data-animal');

    document.getElementById('exibidor').innerHTML = type;   
}
