// PANELS

var landingContainer = document.querySelector('.landing')
var loginContainer = document.querySelector('.login')
var registerContainer = document.querySelector('.register')
var registeredContainer = document.querySelector('.registered')
var homeContainer = document.querySelector('.home')


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

        if (status === 409) return alert('user already exists')

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

    var usernameValue = usernameInput.value
    var passwordValue = passwordInput.value

    if (!usernameValue.length) return alert('username is empty')
    if (!passwordValue.length) return alert('password is empty')

    // var user = users.find(function(user) {
    //     return user.username === usernameValue && user.password === passwordValue
    // })
    // if (!user) return alert('Usuario o contraseña incorrectos')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) return alert ('wrong credentials')

        if (status === 200) {
            var response = xhr.responseText 

            var token = response.slice(10, -2)

            var xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                var response = xhr2.responseText

                var name = response.slice(9, response.indexOf(',') - 1)

                loginContainer.reset()

                loginContainer.classList.add('container--off')

                var nameSpan = homeContainer.querySelector('.name')

                nameSpan.innerText = name

                homeContainer.classList.remove('container--off')
            }

            xhr2.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', 'Bearer ' + token)

            xhr2.send()
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "username": "' + usernameValue + '", "password": "' + passwordValue + '" }'

    xhr.send(body)
}

// Button Login to Register

var loginRegisterButton = loginContainer.querySelectorAll('button')[0]

loginRegisterButton.onclick = function (event) {
    event.preventDefault()

    registerContainer.classList.remove('container--off')

    loginContainer.classList.add('container--off')
}



/*
// EJEMPLO DE MANU

// views

var landingContainer = document.querySelector('.landing')
var signupContainer = document.querySelector('.signup')
var signinContainer = document.querySelector('.signin')
var postSignupContainer = document.querySelector('.post-signup')
var homeContainer = document.querySelector('.home')

var landingButtons = landingContainer.querySelectorAll('button')

var signupButton = landingButtons[1]

signupButton.onclick = function () {
    landingContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
}

var landingSigninButton = landingButtons[0]

landingSigninButton.onclick = function () {
    landingContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var signupButtons = signupContainer.querySelectorAll('button')

var signupSigninButton = signupButtons[0]

signupSigninButton.onclick = function (event) {
    event.preventDefault()

    signupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var signinButtons = signinContainer.querySelectorAll('button')

var signinSignupButton = signinButtons[0]

signinSignupButton.onclick = function (event) {
    event.preventDefault()

    signinContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
}

signupContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signupContainer.querySelectorAll('input')

    var nameInput = inputs[0]
    var usernameInput = inputs[1]
    var passwordInput = inputs[2]

    var name = nameInput.value
    var username = usernameInput.value
    var password = passwordInput.value

    if (!name.length) return alert('name is empty')
    if (!username.length) return alert('username is empty')
    if (!password.length) return alert('password is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 409) return alert('user already exists')

        if (status === 201) {
            signupContainer.reset()

            signupContainer.classList.add('container--off')

            postSignupContainer.classList.remove('container--off')
        }

    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "name": "' + name + '", "username": "' + username + '", "password": "' + password + '" }'

    xhr.send(body)
}

var postSignupSigninButton = postSignupContainer.querySelector('button')

postSignupSigninButton.onclick = function () {
    postSignupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

signinContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signinContainer.querySelectorAll('input')

    var usernameInput = inputs[0]
    var passwordInput = inputs[1]

    var username = usernameInput.value
    var password = passwordInput.value

    if (!username.length) return alert('username is empty')
    if (!password.length) return alert('password is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) return alert('wrong credentials')

        if (status === 200) {
            var response = xhr.responseText

            var token = response.slice(10, -2)

            var xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                var response = xhr2.responseText

                var name = response.slice(9, response.indexOf(',') - 1)

                signinContainer.reset()

                signinContainer.classList.add('container--off')

                var nameSpan = homeContainer.querySelector('.name')

                nameSpan.innerText = name

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
*/