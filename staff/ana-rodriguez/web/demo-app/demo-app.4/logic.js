function signUpCall(firstName, lastName, userName, password, confirmPassword, policies, callback) {
    if (typeof firstName !== 'string') throw new TypeError(firstName + 'is not a string')
    if (!firstName.trim().length) throw new Error('firstName is empty or blank')
    if (firstName.trim() !== firstName) throw new Error('blanck spaces around firstName')

    if (!lastName.length) throw new Error('lastName is empty')

    if (!userName.trim().length) throw new Error('userName is empty or blank')
    if (typeof userName !== 'string') throw new TypeError(userName + 'is not a string')

    if (!password.trim().length) throw new Error('password is empty or blank')
    if (typeof password !== 'string') throw new TypeError(password + 'is not a string')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (/^(?=[^AZ]*[AZ])(?=[^az]*[az])(?=[^0-9]*[0-9]).{6,}$/g.test(password) === false) throw new Error('password needed uppercase, lowercase, number and 6 characters of length')

    if (!confirmPassword.length) throw new Error('confirmPassword is empty')
    if (!policies) throw new Error('confirmPassword is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 409 || status === 400) {
            var response = JSON.parse(xhr.responseText)

            var message = response.Error

            callback(newError(message))
        } else if (status === 201) {
            callback(null)
        }

    }


    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = {
        name: firstName + ' ' + lastName,
        username: userName,
        password: password
    }

    xhr.send(JSON.stringify(body))
}

// En archivo logic implemento la lógica de negocio que significa todo lo que tenga que ver con la llamada al servidor
// En archivo main recojo los datos que necesito pasarle a mi lógica de negocio
// Y después en la callback implemento todo lo necesario para la navegación de la página web

// SIGN-IN
function signInCall(userName, password, callback) {
    // if(!userName.length) throw new Error('User name is empty')
    if (!userName.trim().length) throw new Error('userName is empty or blank')
    if (typeof userName !== 'string') throw new TypeError(userName + 'is not a string')

    // if(!password.length) throw new Error ('Password is empty')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (typeof password !== 'string') throw new TypeError(password + 'is not a string')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    // if (/^(?=[^AZ]*[AZ])(?=[^az]*[az])(?=[^0-9]*[0-9]).{6,}$/g.test(password) === false) throw new Error('password needed uppercase, lowercase, number and 6 characters of length')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        var response = JSON.parse(xhr.responseText)
        var message = response.error


        if (status === 401) {
            callback(new Error(message))
        }
        else if (status === 200) {
            var token = response.token
            callback(null, token)
        }
    }
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = {
        username: userName,
        password: password
    }

    xhr.send(JSON.stringify(body))
}

function retrieveSignIn(token, callback) {
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

    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

// PROFILE
function profileCall(oldpassword, password, token, callback) {
    if (!oldpassword.length) throw new Error('oldpassword is empty')
    if (!password.length) throw new Error('password is empty')

    var xhr = new XMLHttpRequest
    var body = {
        oldPassword: oldpassword,
        password: password
    }
    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }

    }
    xhr.open("PATCH", url + "users");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
}

// UNREGISTER

function UnregisterCall(password, token, callback) {
    if (!password.length) throw new Error('password is empty')
    if (!token) throw new Error('invalid token')

    var xhr = new XMLHttpRequest

    var body = {
        password: password
    }

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401 || status === 400) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }

    }
    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(body))
}

//   SEARCH
function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + 'is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicles = JSON.parse(xhr.responseText)

            callback(null, vehicles)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    xhr.send()
}


function retrieveVehicle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + 'is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicles = JSON.parse(xhr.responseText)

            callback(null, vehicles)
        }
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()

}

//   MODAL


function generateCloseModal(element) {
    var modal = document.getElementById(element)
    var close = modal.querySelector("#close-modal")

    // close.onclick = function() { modal.remove() }

    modal.onclick = function (event) {
        if (!(
            event.target === modal.querySelector("#modal-content") ||
            event.target === modal.querySelector("#modal-title") ||
            event.target === modal.querySelector("#modal-text")
        ))
            modal.remove();
    }
}

function injectableModal(element, title, text) {
    var template = document.getElementById(element)
    var clone = template.content.cloneNode(true)
    clone.querySelector("#modal-title").innerText = title
    clone.querySelector("#modal-text").innerText = text
    document.body.appendChild(clone)
    generateCloseModal("modal")
}

