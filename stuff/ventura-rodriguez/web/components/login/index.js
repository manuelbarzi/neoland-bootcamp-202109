// ----- global variables -----
var url = "https://b00tc4mp.herokuapp.com/api/v2";
var user = {};
var token = "";


// ----- Pages selectors -----
var landing = document.getElementById("landing");
var register = document.getElementById("register");
var logIn = document.getElementById("logIn");
var home = document.getElementById("home");
var profile = document.getElementById("profile");


// ----- landing page logic -----
var landingButtons = landing.getElementsByTagName("button");
var registerPage = landingButtons[0];
var logInPage = landingButtons[1];

registerPage.onclick = function() {
    landing.classList.add("panel--off");
    register.classList.remove("panel--off");
}

logInPage.onclick = function() {
    landing.classList.add("panel--off");
    logIn.classList.remove("panel--off");
}


// ----- register page logic -----
var registerButtons = register.getElementsByTagName("button");
var logInPage = registerButtons[0];
var registerBtn = registerButtons[1];

logInPage.onclick = function () {
    register.classList.add("panel--off");
    logIn.classList.remove("panel--off");
}

register.onsubmit = function(event) {
    event.preventDefault();

    var inputs = this.getElementsByTagName("input");
    var name = inputs[0].value;
    var username = inputs[1].value;
    var password = inputs[2].value;
    
    // if (password.includes("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")) {
    if (password) { // Put some validates here
        var user = {name, username, password};
        
        var xhr = new XMLHttpRequest;
        xhr.onload = function () {
            var status = xhr.status;
            switch (status) {
                case 201 :
                    alert("Usuario registrado correctamente");
                    register.reset();
                    register.classList.add("panel--off");
                    logIn.classList.remove("panel--off");
                    break;
                case 409 : alert("Este usuario ya está registrado"); inputs[2].value = ""; break;
                default  : alert("Ops, respuesta del servidor no manejada");
            }
        }
        xhr.open("POST", url + "/users");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(user));
    }
    else {
        alert("Introduce un formato de contraseña válido");
        inputs[2].value = "";
    }
}

// ----- logic page logic -----
var logInButtons = logIn.getElementsByTagName("button");
var registerPage = logInButtons[0];
var logInBtn = logInButtons[1];

registerPage.onclick = function () {
    logIn.classList.add("panel--off");
    register.classList.remove("panel--off");
}

function getData (_user, _token) {
    var xhr = new XMLHttpRequest;
    xhr.onload = function () {
        var status2 = xhr.status;
        var response = xhr.responseText;
        switch (status2) {
            case 200:
                alert("Bienvenido");
                logIn.reset();
                user = JSON.parse(response);
                token = _token;
                logIn.classList.add("panel--off");
                home.classList.remove("panel--off");
                break;
            default: alert("Ops, respuesta del servidor no manejada");
        }
    }
    xhr.open("GET", url + "/users");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + _token);
    xhr.send(JSON.stringify(_user));
}

logIn.onsubmit = function(event) {
    event.preventDefault();

    var inputs = this.getElementsByTagName("input");
    var username = inputs[0].value;
    var password = inputs[1].value;
    
    // if (password.includes("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")) {
    if (password) { // Put some validates here
        var xhr = new XMLHttpRequest;

        var user = {username, password};
        xhr.onload = function() {
            var status = xhr.status;
            var response = xhr.responseText;
            var token = response.slice(10, -2);
            switch(status) {
                case 200: getData(user, token); break;
                case 401:
                    alert("El usuario o la contraseña no son correctas o el usuario no está registrado o autorizado");
                    inputs[1].value = "";
                    break;
                default : alert("Ops, respuesta del servidor no manejada");
            }
        }
        xhr.open("POST", url + "/users/auth");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(user));
    }
    else {
        alert("Introduce un formato de contraseña válido");
        inputs[2].value = "";
    }
}


// ----- logic home page -----
var homeButtons = home.getElementsByTagName("button");
var logOutButton = homeButtons[0];
var profileButton = homeButtons[1];

logOutButton.onclick = function() {
    user = {};
    token = "";
    alert("Sesión cerrada correctamente");
    home.classList.add("panel--off");
    landing.classList.remove("panel--off");
}

profileButton.onclick = function() {
    home.classList.add("panel--off");
    profile.classList.remove("panel--off");
}


// ----- logic profile page -----
var profileButtons = profile.getElementsByTagName("button");
var forms = profile.getElementsByTagName("form");
var updateForm = forms[0];
var deleteForm = forms[1];
var backButton = profileButtons[2];

backButton.onclick = function() {
    profile.classList.add("panel--off");
    home.classList.remove("panel--off");
}

updateForm.onsubmit = function(event) {
    event.preventDefault();
    var inputs = this.getElementsByTagName("input");
    var oldPassword = inputs[0];
    var password = inputs[1];
    var _user = {
        username: user.username,
        oldPassword: oldPassword.value,
        password: password.value
    }

    if(_user.password && _user.oldPassword) {
        var xhr = new XMLHttpRequest;
    
        xhr.onload = function() {
            var status = xhr.status;
    
            switch (status) {
                case 204:
                    alert("El usuario ha sido modificado");
                    updateForm.reset();
                    break;
                case 401: alert("Usuario no autorizado para la operación, comprueba el token"); break;
                case 400: alert("Contraseña incorrecta, repita la operación"); break;
                default : alert("Ops, respuesta del servidor no manejada, el usuario no ha podido ser modificado");
            }
        }
        xhr.open("PATCH", url + "/users");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.send(JSON.stringify(_user));
    }
    else {
        alert("Introduce un formato de contraseña válido");
        updateForm.reset();
    }
}

deleteForm.onsubmit = function(event) {
    event.preventDefault();
    var inputs = this.getElementsByTagName("input");
    var password = inputs[0];
    var _user = {
        username: user.username,
        password: password.value
    }

    if(_user.password) {
        var xhr = new XMLHttpRequest;
    
        xhr.onload = function() {
            var status = xhr.status;
    
            switch (status) {
                case 204:
                    alert("El usuario ha sido eliminado");
                    deleteForm.reset();
                    profile.classList.remove("panel--off");
                    landing.classList.add("panel--off");
                    break;
                case 401: alert("Usuario no autorizado para la operación, comprueba el token"); break;
                case 400: alert("Contraseña incorrecta"); deleteForm.reset(); break;
                default : alert("Ops, respuesta del servidor no manejada, el usuario no ha podido ser eliminado");
            }
        }
        xhr.open("DELETE", url + "/users");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.send(JSON.stringify(_user));
    }
    else {
        alert("Introduce un formato de contraseña válido");
        password.value = "";
    }
}