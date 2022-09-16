function subirTela() {       
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll() {
    let botao = document.querySelector('.button');

    if (window.scrollY === 0) {
        botao.style.display = 'none';
    } else {
        botao.style.display = 'block';
    }
}

// Menos Eficaz setInterval(decidirBotaoScroll, 1000)
window.addEventListener('scroll', decidirBotaoScroll);