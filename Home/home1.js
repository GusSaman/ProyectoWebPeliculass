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
let ficcionMovies = document.getElementById("ficcionMovies");
let terrorMovies = document.getElementById("terrorMovies");
let comediaMovies = document.getElementById("comedyMovies");
let musicalMovies = document.getElementById("musicalMovies");
let dramaMovies = document.getElementById("dramaMovies");

function ficcionFunction() {
    Movies = JSON.parse(localStorage.getItem('Movies')) || [];
    let ficcionGenero=[]
    Movies.map((item) => {
        if (item.genero=="Ficcion" && item.public== true) {
            ficcionGenero.push(`
            <a href="${item.trailer}">
                <div class="cardImgMovie m-4">
                    <div>
                      <img class="imgMovie" src="${item.imagen}" alt="" srcset="">
                    </div>
                    <div class="bg-dark">
                        <p class="text-light text-center">
                            <i class="text-light text-center">${item.titulo}</i>
                        </p>
                    </div>
                </div>
                </a>
            `)
        }
        ficcionGenero.innerHTML=ficcionGenero.join('');
    })    
}
ficcionFunction()































// function terrorFunction() {
//     Movies = JSON.parse(localStorage.getItem('Movies')) || [];
//     let terrorGenero=[]
//     Movies.map((item) => {
//         if (item.genero=="Terror" && item.public== true) {
//             terrorGenero.push(`
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
//         terrorMovies.innerHTML=terrorGenero.join('');
//     })    
// }
// terrorFunction()


// function comediaFunction() {
//     Movies = JSON.parse(localStorage.getItem('Movies')) || [];
//     let comedyGenre=[]
//     Movies.map((item) => {
//         if (item.genero=="Comedia" && item.public== true) {
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



// function musicalFunction() {
//     Movies = JSON.parse(localStorage.getItem('Movies')) || [];
//     let musicalGenero=[]
//     Movies.map((item) => {
//         if (item.genero=="Musical" && item.public== true) {
//             musicalGenero.push(`
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
//         musicalMovies.innerHTML=musicalGenero.join('');
//     })
// }
// musicalFunction()



// function dramaFunction() {
//     Movies = JSON.parse(localStorage.getItem('Movies')) || [];
//     let dramaGenero=[]
//     Movies.map((item) => {
//         if (item.genero=="Drama" && item.public== true) {
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
