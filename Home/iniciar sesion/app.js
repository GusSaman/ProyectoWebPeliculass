let email = document.getElementById('email');
let password = document.getElementById('password');

let users = [];

function Register() {
    if (email.value != "" && password.value != "") {
        users.push({
            email:email.value, 
            password:password.value
        })
        localStorage.setItem('users', JSON.stringify(users));

        email.value = "";
        password.value="";
    }
    else{
        alert("Alguno de los campos es incorrecto, por favor reviselos")
    }
}

Register()