//Sesion cuenta
let correoInicioSesion = document.getElementById('correo');
let contrasenaInicioSesion = document.getElementById('contrasena');
let botonInicioSesion = document.getElementById('botonInicioSesion');

//Nueva cuenta
let correoRegistro = document.getElementById('correoRegistro');
let contrasenaRegistro = document.getElementById('contrasenaRegistro');
let nombreRegistro = document.getElementById('nombreRegistro');
let nombreUsuarioRegistro = document.getElementById('nombreUsuarioRegistro')
let botonRegistro = document.getElementById('botonRegistro');

//Registro
botonRegistro.addEventListener('click', () => {
    let usuarios = JSON.parse(localStorage.getItem(usuarios)) || []
    if (correoRegistro.value != "" && contrasenaRegistro.value != "" && nombreRegistro.value != "" && nombreUsuarioRegistro.value != "") {
        usuarios.push({
            id: Math.round(Math.random() * 10000),
            nombre: nombreRegistro.value,
            correo: correoRegistro.value,
            contrasena: contrasenaRegistro.value,
            nombreUsuario: nombreUsuarioRegistro.value,
            admin: false
        })
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Registrado");
    } else {
        alert("Ingrese correctamente sus credenciales");
    }
})


//inicio de sesion
botonInicioSesion.addEventListener("click", (e) => {
    e.preventDefault();
    let usuarios = JSON.parse(localStorage.getItem(usuarios)) || []
    if (correoInicioSesion.value != "" && contrasenaInicioSesion.value != "") {
        let respuesta = usuarios.find ((item) => correoInicioSesion === item.correo && item.contrasena === contrasenaInicioSesion) || []
        }
        })