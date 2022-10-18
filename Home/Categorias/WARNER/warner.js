let comediaMovies = document.getElementById("comediaMovies");




function comediaFunction() {
    Movies = JSON.parse(localStorage.getItem('Movies')) || [];
    let comediaGenero=[]
    Movies.map((item) => {
        if (item.genero=="COMEDIA" && item.public== true) {
            comediaGenero.push(`
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
        comediaMovies.innerHTML=comediaGenero.join('');
    })    
}
comediaFunction()