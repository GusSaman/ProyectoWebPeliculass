let dramaMovies = document.getElementById("dramaMovies");


function dramaFunction() {
    Movies = JSON.parse(localStorage.getItem('Movies')) || [];
    let dramaGenero=[]
    Movies.map((item) => {
        if (item.genero=="DRAMA" && item.public== true) {
            dramaGenero.push(`
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
        dramaMovies.innerHTML=dramaGenero.join('');
    })    
}
dramaFunction()