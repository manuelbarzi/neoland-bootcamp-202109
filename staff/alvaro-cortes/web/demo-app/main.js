// DATA

var users = []
//var newUser = new UsersCollection

// INICIALES

var landingContainer = document.querySelector(".landing")
var loginContainer = document.querySelector(".login")
var registerContainer = document.querySelector(".register")
var signedup = document.querySelector(".welcome")
var registered = document.querySelector(".register-ok")

// BOTONES DE LA SECCION LADING

var landingButtonLogin = landingContainer.querySelectorAll(".button")[0]
var landingButtonRegister = landingContainer.querySelectorAll(".button")[1]

// BOTONES DE LA SECCIÓN DE LOGIN

var loginLoginButton = loginContainer.querySelectorAll(".button")[1]
var loginRegisterButton = loginContainer.querySelectorAll(".button")[0]

// BOTONES DE LA SECCION DE REGISTER

var registerLoginButton = registerContainer.querySelectorAll(".button")[0]
var registerRegisterButton = registerContainer.querySelectorAll(".button")[1]

// BOTON DE INICIAR SESION EN REGISTRO SATISFACTORIO

var loginAfterRegisterButton = registered.querySelector(".button")

// INGRESANDO A LA SECCION DE LOGIN

landingButtonLogin.onclick = function () {

    landingContainer.classList.add("container--off")
    loginContainer.classList.remove("container--off")
}

// INGRESANDO A LA SECCION DE REGISTER

landingButtonRegister.onclick = function () {

    landingContainer.classList.add("container--off")
    registerContainer.classList.remove("container--off")

}

// VOLVIENDO DE LA SECCION DE LOGIN A REGISTER

loginRegisterButton.onclick = function (event) {
    event.preventDefault();

    loginContainer.classList.add("container--off")
    registerContainer.classList.remove("container--off")
}

// VOLVIENDO DE LA SECCION DE REGISTER A LOGIN

registerLoginButton.onclick = function (event) {
    event.preventDefault();

    registerContainer.classList.add("container--off")
    loginContainer.classList.remove("container--off")
}

// INICIANDO SESIÓN

loginContainer.onsubmit = function (event) {
    event.preventDefault();

    var inputs = loginContainer.querySelectorAll("input");
    /*var user = new User("", "", "", inputs[0].value, inputs[1].value);
    var userLogin = newUser.login(user);

    if (userLogin.username === undefined) {
        alert("Este usuario no está registrado")
        loginContainer.classList.add("container--off")
        signedup.classList.remove("container--off")
    }
        
    else
        alert("Has iniciado sesión como " + userLogin.username)
    loginContainer.reset();*/

    var userInput = inputs[0];
    var passwordInput = inputs[1];

    var userValue = userInput.value;
    var passwordValue = passwordInput.value;

    if (!userValue.length) return alert("Username is empty")
    if (!passwordValue.length) return alert("Password is empty")

    var user = users.find(function (user) {
        return user.username === userValue && user.password === passwordValue
    })

    if (!user) return alert("Wrong credential");
    loginContainer.reset();

    loginContainer.classList.add("container--off");

    var nameSpan = signedup.querySelector(".name")

    nameSpan.innerText = " " + user.name + "."

    signedup.classList.remove("container--off");
    

    /*for (var i = 0; i <= users.length; i++) {
        if ((users[i].username === userValue) && (users[i].password === passwordValue) && (users[i].username !== "" && users[i].password !== "")) {
            loginContainer.classList.add("container--off")
            signedup.classList.remove("container--off")
        } else {
            alert("Error")
        }
    }*/

}

// CARGANDO LOS DATOS DE REGISTRO

registerContainer.onsubmit = function (event) {
    event.preventDefault();

    var inputs = registerContainer.querySelectorAll("input")

    var nameInput = inputs[0];
    var surnameInput = inputs[1];
    var emailInput = inputs[2];
    var userInput = inputs[3];
    var passwordInput = inputs[4];

    var name = nameInput.value;
    var surname = surnameInput.value;
    var email = emailInput.value;
    var user = userInput.value;
    var password = passwordInput.value;

    if(!name.length) return alert("Name is empty")
    if(!surname.length) return alert("Surname is empty")
    if(!email.length) return alert("Email is empty")
    if(!user.length) return alert("User is empty")
    if(!password.length) return alert("Password is empty")

    var user = {
        name: name,
        surname: surname,
        email: email,
        username: user,
        password: password,
    };

    users.push(user);

    /*var user = new User(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
    newUser.register(user);*/

    registerContainer.reset();

    registerContainer.classList.add("container--off")
    registered.classList.remove("container--off")
}

// REDIRECCIONANDO A LOGIN LUEGO DE REGISTRO SATISFACTORIO

loginAfterRegisterButton.onclick = function () {
    registered.classList.add("container--off")
    loginContainer.classList.remove("container--off")
}
