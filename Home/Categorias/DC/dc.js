let ficcionMovies = document.getElementById("ficcionMovies");


function ficcionFunction() {
    Movies = JSON.parse(localStorage.getItem('Movies')) || [];
    let ficcionGenero=[]
    Movies.map((item) => {
        if (item.genero=="CIENCIA FICCION" && item.public== true) {
            ficcionGenero.push(`
            <a href="${item.trailer}">
                <div class="card m-4">
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
        ficcionMovies.innerHTML=ficcionGenero.join('');
    })    
}
ficcionFunction()




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