// PANELS

var landingContainer = document.querySelector('.landing')
var registerContainer = document.querySelector('.register')
var registeredContainer = document.querySelector('.registered')
var loginContainer = document.querySelector('.login')
var homeContainer = document.querySelector('.home')
var profileContainer = document.querySelector('.profile')
var unregisterContainer = document.querySelector('.unregister')

// Global variables

var token


// LANDING

// Button Landing to Register

var landingRegisterButton = landingContainer.querySelectorAll('button')[1]

landingRegisterButton.onclick = function () {
    landingContainer.classList.add('container--off')

    registerContainer.classList.remove('container--off')
}

// Button Landing to Login

var landingLoginButton = landingContainer.querySelectorAll('button')[0]

landingLoginButton.onclick = function () {
    landingContainer.classList.add('container--off')

    loginContainer.classList.remove('container--off')
}


// REGISTER

// var registerRegisterButton = registerContainer.querySelectorAll('button')[1]

registerContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = registerContainer.querySelectorAll('.field')
    var nameInput = inputs[0]
    var surnameInput = inputs[1]
    var usernameInput = inputs[2]
    var passwordInput = inputs[3]

    var name = nameInput.value 
    var surname = surnameInput.value 
    var username = usernameInput.value 
    var password = passwordInput.value

    if (!name.length) return alert('Name is empty')
    if (!surname.length) return alert('Surname is empty')
    if (!username.length) return alert('Username is empty')
    if (!password.length) return alert('Password is empty')

    // var user = {
    //     name: name,
    //     surname: surname,
    //     username: username,
    //     password: password
    // }

    // users.push(user)

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 409 || status === 400) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

        if (status === 201) {
            var nameSpan = homeContainer.querySelector('.name')

            nameSpan.innerText = name

            registerContainer.reset()

            registerContainer.classList.add('container--off')

            registeredContainer.classList.remove('container--off')
        }

    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "name": "' + name + '", "surname": "' + surname + '", "username": "' + username + '", "password": "' + password + '" }' 

    xhr.send(body)
}


// Button New User Registered Page to Login

var registeredLoginButton = registeredContainer.querySelector('button')

registeredLoginButton.onclick = function () {
    registeredContainer.classList.add('container--off')

    loginContainer.classList.remove('container--off')
}

// Button Register to Login

var registerLoginButton = registerContainer.querySelectorAll('button')[0]

registerLoginButton.onclick = function (event) {
    event.preventDefault()

    loginContainer.classList.remove('container--off')
    
    registerContainer.classList.add('container--off')
}



// LOGIN

// var loginLoginButton = loginContainer.querySelectorAll('button')[1]

loginContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = loginContainer.querySelectorAll('.field')

    var usernameInput = inputs[0]
    var passwordInput = inputs[1]

    var username = usernameInput.value
    var password = passwordInput.value

    if (!username.length) return alert('username is empty')
    if (!password.length) return alert('password is empty')

    // var user = users.find(function(user) {
    //     return user.username === usernameValue && user.password === passwordValue
    // })
    // if (!user) return alert('Usuario o contraseña incorrectos')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

        if (status === 200) {
            var response = xhr.responseText 

            token = response.slice(10, -2)

            var xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                var response = xhr2.responseText

                var name = response.slice(9, response.indexOf(',') - 1)

                var nameSpan = homeContainer.querySelector('.name')

                nameSpan.innerText = name

                loginContainer.classList.add('container--off')

                loginContainer.reset()

                homeContainer.classList.remove('container--off')
            }

            xhr2.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', 'Bearer ' + token)

            xhr2.send()
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "username": "' + username + '", "password": "' + password + '" }'

    xhr.send(body)
}

// Button Login to Register

var loginRegisterButton = loginContainer.querySelectorAll('button')[0]

loginRegisterButton.onclick = function (event) {
    event.preventDefault()

    registerContainer.classList.remove('container--off')

    loginContainer.classList.add('container--off')
}


// HOME

// Button Home to Profile

var homeButtons = homeContainer.querySelectorAll('button')

var homeProfileButton = homeButtons[0]

var profileForm = profileContainer.querySelector('form')

homeProfileButton.onclick = function() {
    homeContainer.classList.add('container--off')

    profileForm.reset()

    profileContainer.classList.remove('container--off')
}


// Button Log Out

var homeLogoutButton = homeButtons[1]

homeLogoutButton.onclick = function() {
    homeContainer.classList.add('container--off')

    profileForm.reset()

    landingContainer.classList.remove('container--off')
}

// PROFILE 

// Button Profile to Previous Page

var profileBackButton = profileForm.querySelector('button')

profileBackButton.onclick = function (event) {
    event.preventDefault()

    profileContainer.classList.add('container--off')

    homeContainer.classList.remove('container--off')
}


// Updating Password

profileForm.onsubmit = function (event) {
    event.preventDefault()

    var inputs = profileForm.querySelectorAll('input')

    var oldPasswordInput = inputs[0]
    var passwordInput = inputs[1]

    var oldPassword = oldPasswordInput.value
    var password = passwordInput.value

    var xhr = new XMLHttpRequest

    xhr.onload = function() {
        var status = xhr.status

        if (status === 400 || status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

        if (status === 204) {
            profileContainer.classList.add('container--off')

            profileForm.reset()

            homeContainer.classList.remove('container--off')
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "oldPassword": "' + oldPassword + '", "password": "' + password + '" }'

    xhr.send(body)
}


// Button Profile to Unregister

var profileUnregisterButton = profileContainer.querySelector('.profile>button')

profileUnregisterButton.onclick = function() {
    profileContainer.classList.add('container--off')

    unregisterContainer.classList.remove('container--off')
}



// UNREGISTER

// Button Unregister to Previous Page

var unregisterBackButton = unregisterContainer.querySelector('button')

var unregisterForm = unregisterContainer.querySelector('form')

unregisterBackButton.onclick = function (event) {
    event.preventDefault()

    unregisterContainer.classList.add('container--off')

    unregisterForm.reset()

    profileContainer.classList.remove('container--off')
}


// Unregistering

unregisterForm.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput = unregisterForm.querySelector('input')

    var password = passwordInput.value

    var xhr = new XMLHttpRequest

    xhr.onload = function() {
        var status = xhr.status

        if (status === 400 || status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

        if (status === 204) {
            unregisterContainer.classList.add('container--off')

            unregisterForm.reset()

            landingContainer.classList.remove('container--off')
        }
    }
    
    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "password": "' + password + '" }'

    xhr.send(body)
}

