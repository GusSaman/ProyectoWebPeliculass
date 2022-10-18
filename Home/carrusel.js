const fila = document.querySelector('.container-carrusel');
const movie = document.querySelectorAll('.movies');

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const carru = document.querySelector('.container-carruDramas');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const come = document.querySelector('.container-carruComedias');
const derechaCome = document.getElementById('derechaCome');
const izquierdaCome = document.getElementById('izquierdaCome');



const ficcion = document.querySelector('.container-carruCiencia');
const derechaFiccion = document.getElementById('derechaFiccion');
const izquierdaFiccion = document.getElementById('izquierdaFiccion');

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

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

//----------------header fijo

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})


//----------------------------------CARRUSEL DRAMAS

// ------------------- Event Listener para la flecha derecha -------------

flechaDerecha.addEventListener('click', () => {
    carru.scrollLeft += carru.offsetWidth; 
});

// ------------------- Event Listener para la flecha izquierda -------------

flechaIzquierda.addEventListener('click', () => {
    carru.scrollLeft -= carru.offsetWidth;
});


//---------------------Carrusel Comedias

// ------------------- Event Listener para la flecha derecha -------------

derechaCome.addEventListener('click', () => {
    come.scrollLeft += come.offsetWidth; 
});

// ------------------- Event Listener para la flecha izquierda -------------

izquierdaCome.addEventListener('click', () => {
    come.scrollLeft -= come.offsetWidth;
});



//----------------------------ficcion
// ------------------- Event Listener para la flecha derecha -------------

derechaFiccion.addEventListener('click', () => {
    ficcion.scrollLeft += ficcion.offsetWidth;
    
});

// ------------------- Event Listener para la flecha izquierda -------------

izquierdaFiccion.addEventListener('click', () => {
    ficcion.scrollLeft -= ficcion.offsetWidth;

    
    
});













































//-----------------JS YOHA

//---------Portada
let coverImage = document.getElementById("Portada");

function createPortada() {
    let Movies= JSON.parse(localStorage.getItem('Movies')) || [];
    let coverImageSelect = []
    Movies.map((item) => {
        if (item.fav == true) {
            coverImageSelect.push(`
            <div class="w-100 imgportada" style="background-image: url(${item.imagen});" >
                
            </div>            
            `)
        }
    })
    coverImage.innerHTML = coverImageSelect.join('')
}
createPortada()




//-----Agregado de Cards en cada Carrucel
// let ficcionMovies = document.getElementById("ficcionMovies");

// let comediaMovies = document.getElementById("comediaMovies");

// let dramaMovies = document.getElementById("dramaMovies");

// function ficcionFunction() {
//     Movies = JSON.parse(localStorage.getItem('Movies')) || [];
//     let ficcionGenero=[]
//     Movies.map((item) => {
//         if (item.genero=="CIENCIA FICCION" && item.public== true) {
//             ficcionGenero.push(`
//             <a href="${item.trailer}">
//                 <div class="cardImgMovie m-4">
//                     <div>
//                       <img class="imgMovie" src="${item.imagen}" alt="" srcset="">
//                     </div>
//                     <div class="bg-dark">
//                         <p class="text-light text-center">
//                             <i class="text-light text-center">${item.titulo}</i>
//                         </p>
//                     </div>
//                 </div>
//                 </a>
//             `)
//         }
//         ficcionMovies.innerHTML=ficcionGenero.join('');
//     })    
// }
// ficcionFunction()




// function comediaFunction() {
//     Movies = JSON.parse(localStorage.getItem('Movies')) || [];
//     let comediaGenero=[]
//     Movies.map((item) => {
//         if (item.genero=="COMEDIA" && item.public== true) {
//             comediaGenero.push(`
//             <a href="${item.trailer}">
//                 <div class="cardImgMovie m-4">
//                     <div>
//                       <img class="imgMovie" src="${item.imagen}" alt="" srcset="">
//                     </div>
//                     <div class="bg-dark">
//                         <p class="text-light text-center">
//                             <i class="text-light text-center">${item.titulo}</i>
//                         </p>
//                     </div>
//                 </div>
//                 </a>
//             `)
//         }
//         comediaMovies.innerHTML=comediaGenero.join('');
//     })    
// }
// comediaFunction()





// function dramaFunction() {
//     Movies = JSON.parse(localStorage.getItem('Movies')) || [];
//     let dramaGenero=[]
//     Movies.map((item) => {
//         if (item.genero=="DRAMA" && item.public== true) {
//             dramaGenero.push(`
//             <a href="${item.trailer}">
//                 <div class="cardImgMovie m-4">
//                     <div>
//                       <img class="imgMovie" src="${item.imagen}" alt="" srcset="">
//                     </div>
//                     <div class="bg-dark">
//                         <p class="text-light text-center">
//                             <i class="text-light text-center">${item.titulo}</i>
//                         </p>
//                     </div>
//                 </div>
//                 </a>
//             `)
//         }
//         dramaMovies.innerHTML=dramaGenero.join('');
//     })    
// }
// dramaFunction()



