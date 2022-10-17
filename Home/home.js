const fila = document.querySelector('.container-carrusel');
const movie = document.querySelectorAll('.movies');

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// ------------------- Event Listener para la flecha derecha -------------

rightArrow.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicatorsActivo = document.querySelector('.indicators .activo');
    if (indicatorsActivo.nextSibling) {
        indicatorsActivo.nextSibling.classList.add('activo');
        indicatorsActivo.classList.remove('activo');
    }
});

// ------------------- Event Listener para la flecha izquierda -------------

leftArrow.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicatorsActivo = document.querySelector('.indicators .activo');
    if (indicatorsActivo.previousSibling) {
        indicatorsActivo.previousSibling.classList.add('activo');
        indicatorsActivo.classList.remove('activo');
    }

});



//---------------------HOVER


movie.forEach((movies) => {
    movies.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            movie.forEach(movies => movies.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    movie.forEach(movies => movies.classList.remove('hover'));
});

//-----------------carrusel DC



