// DATA

//var users = []
//var newUser = new UsersCollection

// LOGIC

function registerUser(name, surname, email, user, password, callback) {
    if (!name.length) throw new Error("Name is empty")
    if (!surname.length) throw new Error("Surname is empty")
    if (!email.length) throw new Error("Email is empty")
    if (!user.length) throw new Error("User is empty")
    if (!password.length) throw new Error("Password is empty")

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status
        if (status === 409 || status === 400) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 201) {
            callback(null)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = { name: name, surname: surname, email: email, username: user, password: password }

    xhr.send(JSON.stringify(body))
}

function loginUser(user, password, callback) {
    if (!user.length) throw new Error("Username is empty")
    if (!password.length) throw new Error("Password is empty")

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {

            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            var response = JSON.parse(xhr.responseText)

            token = response.token

            callback(null, token)
        }
    }
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = { username: user, password: password }

    xhr.send(JSON.stringify(body))
}

function retrieveUser(token, callback) {
    if (!token) throw new Error('invalid token')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            var response = xhr.responseText

            var user = JSON.parse(response)

            callback(null, user)
        }
        /*loginContainer.reset();

        loginContainer.classList.add("container--off");

        var nameSpan = signedup.querySelector(".name")

        nameSpan.innerText = name

        signedup.classList.remove("container--off");*/
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

function updateUserPassword(token, oldPassword, password, callback) {
    if (!token) throw new Error("Invalid token")
    if (!oldPassword.length) throw new Error("User is empty")
    if (!password.length) throw new Error("Password is empty")

    var xhr = new XMLHttpRequest;

    xhr.onload = function () {
        var status = xhr.status;

        if (status === 400 || status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var body = { oldPassword: oldPassword, password: password }

    xhr.send(JSON.stringify(body))
}

function unregisterUser(token, password, callback) {
    if (!token) throw new Error("Invalid token")
    if (!password.length) throw new Error("Password is empty")

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 400 || status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }

    }

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', "application/json")

    var body = { password: password }

    xhr.send(JSON.stringify(body))
}


// ANIMACION INPUTS

var allInputs = document.querySelectorAll("input")

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("click", function () {
        allInputs[0].classList.remove("input--click")
        allInputs[1].classList.remove("input--click")
        allInputs[2].classList.remove("input--click")
        allInputs[3].classList.remove("input--click")
        allInputs[4].classList.remove("input--click")
        allInputs[5].classList.remove("input--click")
        allInputs[6].classList.remove("input--click")
        allInputs[7].classList.remove("input--click")
        allInputs[8].classList.remove("input--click")
        allInputs[9].classList.remove("input--click")
        this.classList.add("input--click")
    })
}

// INICIALES

var landingContainer = document.querySelector(".landing")
var loginContainer = document.querySelector(".login")
var registerContainer = document.querySelector(".register")
var signedup = document.querySelector(".welcome")
var registered = document.querySelector(".register-ok")
var profileContainer = document.querySelector(".profile")
var unregisterContainer = document.querySelector(".unregister")

var token;

// BOTONES DE LA SECCION LANDING

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

    var inputs = loginContainer.querySelectorAll("input");
    var userInput = inputs[0];
    var passwordInput = inputs[1];

    var userValue = userInput.value;
    var passwordValue = passwordInput.value;

    try {
        loginUser(userValue, passwordValue, function (error, _token) {
            if (error) return alert(error.message)

            token = _token

            loginContainer.reset()

            try {
                retrieveUser(token, function (error, user) {
                    if (error) return alert(error.message)

                    var name = user.name

                    loginContainer.reset()

                    loginContainer.classList.add("container--off");

                    var nameSpan = signedup.querySelector(".name")

                    nameSpan.innerText = name

                    signedup.classList.remove("container--off")
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }


    /*var user = users.find(function (user) {
        return user.username === userValue && user.password === passwordValue
    })*/

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

    try {
        registerUser(name, surname, email, user, password, function (error) {
            if (error) return alert(error.message)

            registerContainer.reset();
            registerContainer.classList.add("container--off")
            registered.classList.remove("container--off")
        })
    } catch (error) {
        alert(error.message)
    }

    /*var user = {
        name: name,
        surname: surname,
        email: email,
        username: user,
        password: password,
    };

    users.push(user);

    var user = new User(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
    newUser.register(user);*/
}


// REDIRECCIONANDO A LOGIN LUEGO DE REGISTRO SATISFACTORIO

loginAfterRegisterButton.onclick = function () {
    registered.classList.add("container--off")
    loginContainer.classList.remove("container--off")
}

// BOTON DE LA SECCIÓN SESIÓN INICIADA

var homeProfileButton = signedup.querySelector(".button")

// REDIRECCIONANDO DE SESIÓN INICIADA A PROFILE

homeProfileButton.onclick = function () {
    signedup.classList.add("container--off");

    profileContainer.classList.remove("container--off")
}

// BOTONES DE LA SECCIÓN DE PROFILE PARA CAMBIAR LA PASSWORD

var profileButtons = profileContainer.querySelectorAll(".button")

var profileBackButton = profileButtons[0]

// REDIRECCIONANDO DE PROFILE A LA SECCION DE SESIÓN INICIADA

var profileForm = profileContainer.querySelector("form")
profileBackButton.onclick = function (event) {
    event.preventDefault()

    profileContainer.classList.add("container--off")

    profileForm.reset()

    signedup.classList.remove("container--off")
}

// CAMBIANDO LA PASSWORD

profileContainer.onsubmit = function (event) {
    event.preventDefault();

    var inputs = profileContainer.querySelectorAll("input")

    var passwordInput = inputs[0];
    var oldPasswordInput = inputs[1];

    var password = passwordInput.value;
    var oldPassword = oldPasswordInput.value;

    try {
        updateUserPassword(token, oldPassword, password, function (error) {
            if (error) return alert(error.message)

            profileContainer.classList.add("container--off");

            profileForm.reset()

            loginContainer.classList.remove("container--off")
        })
    } catch (error) {
        alert(error.message)
    }

}

// BOTON ELIMINAR CUENTA


var profileUnregisterButton = document.querySelector(".button--delete")

// REDIRECCIONANDO A LA SECCIÓN DE ELIMINAR CUENTA

profileUnregisterButton.onclick = function () {
    profileContainer.classList.add("container--off")

    unregisterContainer.classList.remove("container--off")
}

// BOTON DE REGRESO DE LA SECCIÓN ELIMINAR CUENTA

var unregisterBackButton = unregisterContainer.querySelector("button")

var unregisterForm = unregisterContainer.querySelector("form")

// REDIRECCIONANDO A PROFILE

unregisterBackButton.onclick = function (event) {
    event.preventDefault()

    unregisterContainer.classList.add("container--off")

    unregisterForm.reset()

    profileContainer.classList.remove("container--off")
}

// ELIMINANDO LA CUENTA

unregisterForm.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput = unregisterForm.querySelector("input")

    var password = passwordInput.value

    try {
        unregisterUser(token, password, function (error) {
            if (error) return alert(error.message)
    
            unregisterForm.classList.add("container--off")
    
            unregisterForm.reset()
    
            landingContainer.classList.remove("container--off")
        })
    } catch (error) {
        alert(error.message)
    }
    
}