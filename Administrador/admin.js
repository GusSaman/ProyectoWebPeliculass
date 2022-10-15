let titulo = document.getElementById("Titulo");
let sinopsis = document.getElementById("Sinopsis");
let genero = document.getElementById("Genero");
let imagen = document.getElementById("Imagen");
let trailer = document.getElementById("Trailer");
let myPelis = document.getElementById("myPelis");

let Movies = [];

function Main() {
  ReadFunction();
}

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
      id: Math.round(Math.random()*1000000),
      titulo: titulo.value,
      sinopsis: sinopsis.value,
      genero: genero.value,
      imagen: imagen.value,
      trailer: trailer.value,
      fav: false,
    });
    localStorage.setItem("Movies", JSON.stringify(Movies));
    (id = ""), (titulo.value = "");
    sinopsis.value = "";
    genero.value = "";
    imagen.value = "";
    trailer.value = "";
  } else {
    Swal.fire({
      title: "No ingresaste nada",
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

//---------------Funcion permite visualizar en pantalla
function ReadFunction() {
  let arrayPelis = [];
  let getLocalStorage = JSON.parse(localStorage.getItem("Movies"));
  if (getLocalStorage != null) {
    for (let index = 0; index < getLocalStorage.length; index++) {
      arrayPelis.push(`   
        <tr>  
          <th scope="row">${getLocalStorage[index].id}</th>  
          <td>${getLocalStorage[index].titulo}</td>
          <td class="divSinopsis">${getLocalStorage[index].sinopsis}</td>
          <td>${getLocalStorage[index].genero}</td>
          <td>${getLocalStorage[index].imagen}</td>
          <td>${getLocalStorage[index].trailer}</td>
          <td>
            <div class="icon-links">
                ${
                  getLocalStorage[index].fav === false
                    ? `<button href="#" class="like like-reg" onclick="upDateFav(${index})"><i class="fa-regular fa-heart"></i></button>`
                    : `<button href="#" class="like like-solid" onclick="upDateFav(${index})"><i class="fa-solid fa-heart"></i></button>`
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
  const Movies= JSON.parse(localStorage.getItem("Movies"))
  identifier = item;
  newTitulo.value= Movies[item].titulo;
  newSinopsis.value= Movies[item].sinopsis;
  newGenero.value= Movies[item].genero;
  newImagen.value= Movies[item].imagen;
  newTrailer.value= Movies[item].trailer;    
}

function UptdateNote() {
 const Movies= JSON.parse(localStorage.getItem("Movies"))
   Movies.splice(identifier, 1, { 
    ...Movies[identifier],
    titulo: newTitulo.value,
    sinopsis: newTitulo.value,
    genero: newGenero.value,
    imagen: newImagen.value,
    trailer: newTrailer.value,
  } );
  localStorage.setItem("Movies", JSON.stringify(Movies));
  ReadFunction();
}

//---------------DELETE ARRAY MOVIES
function DeleteFunction() {
  localStorage.clear();
  Movies = [];
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

//---------------BUG
function Bug() {
  if (localStorage.getItem("Movies") !== null) {
    Movies = JSON.parse(localStorage.getItem("Movies"));
  }
}

//---------------↓↓BUTTON FAV-------------
function upDateFav(item) {
  const Movies= JSON.parse(localStorage.getItem("Movies"))
  console.log(Movies)
  Movies.splice(item, 1,
    { 
      ...Movies[item],
      fav: !Movies[item].fav,
    } 
  );
  localStorage.setItem("Movies", JSON.stringify(Movies));
  ReadFunction();
  // console.log(newItem);
  // console.log(Movies[item]);
}

Main();



