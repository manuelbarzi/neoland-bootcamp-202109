// INICIALES

var landingContainer = document.querySelector(".landing")
var loginContainer = document.querySelector(".login")
var registerContainer = document.querySelector(".register")
var signedup = document.querySelector(".welcome")
var registered = document.querySelector(".register-ok")
var profileContainer = document.querySelector(".profile")
var unregisterContainer = document.querySelector(".unregister")
var modifyProfile = document.querySelector(".modify")
var changePasswordProfile = document.querySelector(".change--password")
var spinnerContainer = document.querySelector('.spinner')
var searchBar = document.querySelector(".container--search")


var token;

if (!sessionStorage.token) {
    spinnerContainer.classList.add("container--off")

    landingContainer.classList.remove("container--off")
} else {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) delete (sessionStorage.token)

            landingContainer.classList.add("container--off")

            spinnerContainer.classList.add("container--off")

            var name = user.name

            var nameSpan = signedup.querySelector(".name")

            nameSpan.innerText = name


            signedup.classList.remove("container--off")
            searchBar.classList.remove("container--off")

            buttonsProfilList.classList.add("container--off")

        })
    } catch (error) {
        injectableModal("template-modal", "Error", error.message);
    }
}

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

    var inputs = loginContainer.querySelectorAll("input");
    var userInput = inputs[0];
    var passwordInput = inputs[1];

    var userValue = userInput.value;
    var passwordValue = passwordInput.value;

    loginContainer.classList.add("container--off")
    spinnerContainer.classList.remove("container--off")

    try {
        loginUser(userValue, passwordValue, function (error, token) {
            if (error) {
                injectableModal("template-modal", "Error", error.message);

                spinnerContainer.classList.add("container--off")

                loginContainer.classList.remove("container--off")

                loginContainer.reset()

                return
            }

            sessionStorage.token = token

            loginContainer.reset()

            try {
                retrieveUser(sessionStorage.token, function (error, user) {
                    if (error) {
                        injectableModal("template-modal", "Error", error.message);

                        spinnerContainer.classList.add("container--off")

                        loginContainer.classList.remove("container--off")


                        return
                    }

                    var name = user.name

                    spinnerContainer.classList.add("container--off")

                    loginContainer.classList.add("container--off");

                    var nameSpan = signedup.querySelector(".name")

                    nameSpan.innerText = name

                    signedup.classList.remove("container--off")

                    searchBar.classList.remove("container--off")
                })
            } catch (error) {
                injectableModal("template-modal", "Error", error.message);

                loginContainer.reset()

                spinnerContainer.classList.add("container--off")

                loginContainer.classList.remove("container--off")
            }
        })
    } catch (error) {
        injectableModal("template-modal", "Error", error.message);

        loginContainer.reset()

        spinnerContainer.classList.add("container--off")

        loginContainer.classList.remove("container--off")

    }
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

    registerContainer.classList.add("container--off")
    spinnerContainer.classList.remove("container--off")

    try {
        registerUser(name, surname, email, user, password, function (error) {
            if (error) {
                injectableModal("template-modal", "Error", error.message);

                spinnerContainer.classList.add("container--off")
                registerContainer.classList.remove("container--off")

                return
            }

            registerContainer.reset();

            spinnerContainer.classList.add("container--off")

            registered.classList.remove("container--off")
        })
    } catch (error) {
        injectableModal("template-modal", "Error", error.message);

        spinnerContainer.classList.add("container--off")
        registerContainer.classList.add("container--off")
    }
}


// REDIRECCIONANDO A LOGIN LUEGO DE REGISTRO SATISFACTORIO

loginAfterRegisterButton.onclick = function () {
    registered.classList.add("container--off")

    loginContainer.classList.remove("container--off")
}

// REDIRECCIONANDO DE SESIÓN INICIADA A PROFILE

var homeProfileButton = signedup.querySelector(".button")

homeProfileButton.onclick = function () {
    signedup.classList.add("container--off");
    searchBar.classList.add("container--off")

    profileContainer.classList.remove("container--off")
}

// CERRANDO SESIÓN

var buttonSignOut = document.querySelector(".button--signout")

buttonSignOut.onclick = function () {

    sessionStorage.token = ""
    signedup.classList.add("container--off")
    searchBar.classList.add("container--off")
    landingContainer.classList.remove("container--off")
}

// REDIRECCIONANDO DE PROFILE A LA SECCION DE SESIÓN INICIADA
var profileBackButton = profileContainer.querySelector(".button--back--profile")

profileBackButton.onclick = function () {

    profileContainer.classList.add("container--off")
    searchBar.classList.remove("container--off")
    signedup.classList.remove("container--off")
}

// CAMBIANDO DATOS DE USUARIO

var modifyProfileForm = modifyProfile.querySelector("form")

modifyProfileForm.onsubmit = function (event) {
    event.preventDefault()

    var inputs = modifyProfileForm.querySelectorAll("input")

    var nameInput = inputs[0];
    var surnameInput = inputs[1];
    var emailInput = inputs[2];
    var userInput = inputs[3];

    var name = nameInput.value;
    var surname = surnameInput.value;
    var email = emailInput.value;
    var user = userInput.value;


    try {
        updateUserData(sessionStorage.token, name, surname, email, user, function (error) {
            if (error) {
                injectableModal("template-modal", "Error", error.message);

                spinnerContainer.classList.add("container--off")
                modifyProfile.classList.remove("container--off")

                return
            }

            modifyProfileForm.reset()

            modifyProfileForm.classList.add("container--off")

            spinnerContainer.classList.add("container--off")

            profileContainer.classList.remove("container--off")
        })
    } catch (error) {
        injectableModal("template-modal", "Error", error.message);

        spinnerContainer.classList.add("container--off")
        modifyProfile.classList.remove("container--off")
    }

}

// CAMBIANDO LA PASSWORD

var profileChangePasswordForm = changePasswordProfile.querySelector("form")

profileChangePasswordForm.onsubmit = function (event) {
    event.preventDefault();

    var inputs = changePasswordProfile.querySelectorAll("input")

    var passwordInput = inputs[0];
    var oldPasswordInput = inputs[1];

    var password = passwordInput.value;
    var oldPassword = oldPasswordInput.value;

    changePasswordProfile.classList.add("container--off")
    spinnerContainer.classList.remove("container--off")

    try {
        updateUserPassword(sessionStorage.token, oldPassword, password, function (error) {
            if (error) {
                injectableModal("template-modal", "Error", error.message);

                spinnerContainer.classList.add("container--off")
                changePasswordProfile.classList.remove("container--off")
            }

            profileChangePasswordForm.reset()

            spinnerContainer.classList.add("container--off")

            changePasswordProfile.classList.add("container--off");

            loginContainer.classList.remove("container--off")
        })
    } catch (error) {
        injectableModal("template-modal", "Error", error.message);

        spinnerContainer.classList.add("container--off")
        changePasswordProfile.classList.remove("container--off")
    }
}

// REDIRECCIONANDO A LA SECCIÓN DE MODIFICAR DATOS

var profileModifyData = document.querySelector(".button--config")

profileModifyData.onclick = function () {

    profileContainer.classList.add("container--off")

    modifyProfile.classList.remove("container--off")
}

// REDIRECCIONANDO A LA SECCIÓN PROFILE

var modifyProfileBackButton = modifyProfile.querySelector("button")

modifyProfileBackButton.onclick = function (event) {
    event.preventDefault()
    profileContainer.classList.remove("container--off")

    modifyProfile.classList.add("container--off")
}

// REDIRECCIONANDO A LA SECCIÓN DE CAMBIAR CONTRASEÑA

var profileChangePassword = document.querySelector(".button--change--password")

profileChangePassword.onclick = function () {

    profileContainer.classList.add("container--off")

    changePasswordProfile.classList.remove("container--off")
}

var backButtonPassword = changePasswordProfile.querySelector("button")

backButtonPassword.onclick = function (event) {
    event.preventDefault()

    changePasswordProfile.classList.add("container--off")

    profileContainer.classList.remove("container--off")
}

// REDIRECCIONANDO A LA SECCIÓN DE ELIMINAR CUENTA

var profileUnregisterButton = document.querySelector(".button--delete")

profileUnregisterButton.onclick = function () {
    profileContainer.classList.add("container--off")

    unregisterContainer.classList.remove("container--off")
}

// REDIRECCIONANDO A PROFILE

var unregisterBackButton = unregisterContainer.querySelector("button")

var unregisterForm = unregisterContainer.querySelector("form")

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

    unregisterForm.classList.add("container--off")
    spinnerContainer.classList.remove("container--off")

    try {
        unregisterUser(sessionStorage.token, password, function (error) {
            if (error) {
                injectableModal("template-modal", "Error", error.message);

                spinnerContainer.classList.add("container--off")
                unregisterForm.classList.remove("container--off")

                return
            }

            unregisterForm.reset()

            spinnerContainer.classList.add("container--off")

            landingContainer.classList.remove("container--off")
        })
    } catch (error) {
        injectableModal("template-modal", "Error", error.message);

        spinnerContainer.classList.add("container--off")
        unregisterForm.classList.remove("container--off")
    }
}

// REDIRECT FROM RESULT LIST TO PROFILE

var buttonsProfilList = document.querySelector(".buttons--list")

var buttonListBackProfile = buttonsProfilList.querySelectorAll("button")

buttonListBackProfile[0].onclick = function () {

    buttonsProfilList.classList.add("container--off")
    welcomeResulList.classList.add("container--off")
    searchBar.classList.remove("container--off")
    signedup.classList.remove("container--off")
}

// SEARCH BAR

var welcomeSearchButton = searchBar.querySelector("button")
var welcomeResulList = document.querySelector(".welcome__results")
var detailsWelcome = document.querySelector(".welcome__details")
var buttonBackWelcomeResults = detailsWelcome.querySelector("button")


welcomeSearchButton.onclick = function (event) {
    event.preventDefault()

    var queryInput = searchBar.querySelector("input")

    var query = queryInput.value

    spinnerContainer.classList.remove("container--off")

    try {
        searchVehicles(query, function (error, vehicles) {
            if (error) return injectableModal("template-modal", "Error", error.message);

            queryInput.value = ""

            spinnerContainer.classList.add("container--off")

            signedup.classList.add("container--off")

            welcomeResulList.innerHTML = ""

            vehicles.forEach(function (vehicle) {

                var item = document.createElement("li")

                var image = document.createElement("img")
                image.src = vehicle.thumbnail

                var title = document.createElement("h2")
                title.innerText = vehicle.name

                var price = document.createElement("span")
                price.innerText = vehicle.price

                item.append(image, title, price)

                item.classList.add("welcome__result")

                item.onclick = function () {

                    try {
                        retrieveVehicle(vehicle.id, function (error, vehicle) {
                            if (error) return injectableModal("template-modal", "Error", error.message);

                            spinnerContainer.classList.add("container--off")

                            welcomeResulList.classList.add("container--off")

                            var title = detailsWelcome.querySelector("h2")
                            title.innerText = vehicle.name

                            var image = detailsWelcome.querySelector("img")
                            image.src = vehicle.image

                            var description = detailsWelcome.querySelector("p")
                            description.innerText = vehicle.description

                            var year = detailsWelcome.querySelector("time")
                            year.innerText = vehicle.year

                            var otherSpan = detailsWelcome.querySelectorAll("span")

                            otherSpan[0].innerText = vehicle.price
                            otherSpan[1].innerText = vehicle.color
                            otherSpan[2].innerText = vehicle.style
                            otherSpan[3].innerText = vehicle.collection
                            otherSpan[4].innerText = vehicle.maker

                            var link = detailsWelcome.querySelector("a")
                            link.src = vehicle.url

                            detailsWelcome.classList.remove("container--off")

                            buttonBackWelcomeResults.classList.remove("container--off")
                        })
                    } catch (error) {
                        injectableModal("template-modal", "Error", error.message);
                        spinnerContainer.classList.add("container--off")
                    }

                }
                detailsWelcome.classList.add("container--off")

                welcomeResulList.classList.remove("container--off")

                welcomeResulList.append(item)

                buttonBackWelcomeResults.classList.add("container--off")

                buttonsProfilList.classList.remove("container--off")
            })
        })
    } catch (error) {
        injectableModal("template-modal", "Error", error.message);
        spinnerContainer.classList.add("container--off")
    }
}

// BACK FROM VEHICLE DETAIL TO RESULTS LIST

buttonBackWelcomeResults.onclick = function () {

    detailsWelcome.classList.add("container--off")
    welcomeResulList.classList.remove("container--off")
}

// ANIMATION INPUTS

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
        allInputs[10].classList.remove("input--click")
        allInputs[11].classList.remove("input--click")
        allInputs[12].classList.remove("input--click")
        this.classList.add("input--click")
    })
}