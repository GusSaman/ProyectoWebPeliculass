let titulo = document.getElementById("Titulo");
let sinopsis = document.getElementById("Sinopsis");
let genero = document.getElementById("Genero");
let imagen = document.getElementById("Imagen");
let trailer = document.getElementById("Trailer");
let myPelis = document.getElementById("myPelis");
let public = document.getElementById("checked");
// let newPublic = document.getElementById("newchecked");

let Movies = JSON.parse(localStorage.getItem("Movies")) || [];

function Main() {
  ReadFunction();
}



window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0);
})









//---------------CREATE MOVIE
function CreateFunction() {
  if (
    (titulo.value !== "" &&
      sinopsis.value !== "" &&
      genero.value !== "" &&
      imagen.value !== "" &&
      trailer.value !== "") ||
    (titulo.value > 0 &&
      sinopsis.value > 0 &&
      genero.value > 0 &&
      imagen.value > 0 &&
      trailer.value > 0)
  ) {
    Movies.push({
      id: Math.round(Math.random() * 1000000),
      titulo: titulo.value,
      sinopsis: sinopsis.value,
      genero: genero.value,
      imagen: imagen.value,
      trailer: trailer.value,
      fav: false,
      // Quiero que arranque publicada ↓↓↓ por eso va true
      public: false,
    });
    localStorage.setItem("Movies", JSON.stringify(Movies));
    titulo.value = "";
    sinopsis.value = "";
    genero.value = "";
    imagen.value = "";
    trailer.value = "";
    // public.checked = false;
  } else {
    Swal.fire({
      title: "No Completaste todos los campos",
      width: 350,
      padding: "1em",
      color: "#000",
      background: "#fff url(/img/Fondo acuarela negro.jpg)",
      backdrop: `
            rgba(121, 140, 140,0.4)            
          `,
    });
  }
  ReadFunction();
}

//---------------Funcion visualizar en pantalla
function ReadFunction() {
  let arrayPelis = [];
  let getLocalStorage = JSON.parse(localStorage.getItem("Movies"));
  // console.log(getLocalStorage)
  if (getLocalStorage != null) {
    for (let index = 0; index < getLocalStorage.length; index++) {
      // console.log(getLocalStorage[index].public)
      arrayPelis.push(`   
        <tr>  
          <th scope="row">${getLocalStorage[index].id}</th>  
          <td>${getLocalStorage[index].titulo}</td>
          <td>${getLocalStorage[index].sinopsis}</td>
          <td>${getLocalStorage[index].genero}</td>
          <td>${getLocalStorage[index].imagen}</td>
          <td>${getLocalStorage[index].trailer}</td>
          <td>
            <div class="custom-control custom-switch form-group form-check my-1">
              <input type="checkbox" class="custom-control-input" value="${getLocalStorage[index].id}" name="publicadaCheck" onchange="updatePublic()" ${getLocalStorage[index].public && "checked" }>
              <label class="custom-control-label" for="publicadaCheck">-</label>
            </div>
          </td>
          <td>
            <div class="icon-links">
                ${
                  getLocalStorage[index].fav === false
                    ? `<button href="#" class="like like-reg" onclick="upDateFav(${getLocalStorage[index].id})"><i class="fa-regular fa-heart"></i></button>`
                    : `<button href="#" class="like like-solid" onclick="upDateFav(${getLocalStorage[index].id})"><i class="fa-solid fa-heart"></i></button>`
                }  
            </div>
          </td>                  
          <td class="accionar" >                       
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop2" onclick="viewNote('${index}')">
            <i class="fa-regular fa-pen-to-square"></i>
            </button>
          </td>
          <td class="accionar" >
            <button onclick="DeleteMovie(${index})">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </td> 
        </tr>      
        `);
    }
    myPelis.innerHTML = arrayPelis.join("");
  } else {
    arrayPelis = [];
    myPelis.innerHTML = arrayPelis.join("");
  }
}

//---------------Funcion ver y actualizar
let newTitulo = document.getElementById("newTitulo");
let newSinopsis = document.getElementById("newSinopsis");
let newGenero = document.getElementById("newGenero");
let newImagen = document.getElementById("newImagen");
let newTrailer = document.getElementById("newTrailer");

let identifier;
function viewNote(item) {
  const Movies = JSON.parse(localStorage.getItem("Movies"));
  identifier = Movies[item].id;
  newTitulo.value = Movies[item].titulo;
  newSinopsis.value = Movies[item].sinopsis;
  newGenero.value = Movies[item].genero;
  newImagen.value = Movies[item].imagen;
  newTrailer.value = Movies[item].trailer;
  newPublic.checked = Movies[item].public;
}

function UptdateNote() {
  let update = [];
  Movies.map((item) => {
    if (item.id == identifier) {
      update.push({
        ...item,
        titulo: newTitulo.value,
        sinopsis: newSinopsis.value,
        genero: newGenero.value,
        imagen: newImagen.value,
        trailer: newTrailer.value,
        // public: newPublic.checked != item.public ? newPublic.checked : item.public,
      });
    } else {
      update.push({
        ...item,
      });
    }
  });
  localStorage.setItem("Movies", JSON.stringify(update));
  ReadFunction();
}

//---------------DELETE MOVIE
function DeleteMovie(item) {
  Movies.splice(item, 1);
  localStorage.setItem("Movies", JSON.stringify(Movies));
  ReadFunction();
}

//---------------DELETE CONTENIDO DE EDICION
function DeleteContent() {
  titulo.value = "";
  sinopsis.value = "";
  genero.value = "";
  imagen.value = "";
  trailer.value = "";
}

//---------------↓↓BUTTON FAV-------------
function upDateFav(id) {
  let putMovies = [];
  Movies.map((item) => {
    if (item.id == id) {
      putMovies.push({
        ...item,
        fav: true,
      });
    } else {
      putMovies.push({
        ...item,
        fav: false,
      });
    }
  });
  localStorage.setItem("Movies", JSON.stringify(putMovies));
  ReadFunction();
  putMovies = [];
}
//---------------↓↓BUTTON check-------------
function updatePublic() {
  // console.log(event.target.value)  // value devuelve id
  // console.log(event.target.checked) // cheched dvuelve true or false
  let publicMovies = [];
  Movies.map((item) => {
    // console.log(item.id)
    // console.log(event.target.value) 
    // console.log(event.target.checked)
    // console.log(identifier)
    if (item.id == event.target.value) {
      publicMovies.push({
        ...item,
        public: event.target.checked,
      });
    } else {
      publicMovies.push({
        ...item,
      });
    }
  });
  // console.log(publicMovies)
  localStorage.setItem("Movies", JSON.stringify(publicMovies));
  // ReadFunction();
  // console.log(JSON.parse(localStorage.getItem("Movies")));
  // publicMovies = [];
}

Main();





















// function UptdateNote() {
//   const Movies = JSON.parse(localStorage.getItem("Movies"));
//   Movies.splice(identifier, 1, {
//     ...Movies[identifier],
//     titulo: newTitulo.value,
//     sinopsis: newSinopsis.value,
//     genero: newGenero.value,
//     imagen: newImagen.value,
//     trailer: newTrailer.value,
//   });
//   localStorage.setItem("Movies", JSON.stringify(Movies));
//   ReadFunction();
// }




//---------------DELETE ARRAY MOVIES
// function DeleteFunction() {
//   localStorage.clear();
//   Movies = [];
//   ReadFunction();
// }

