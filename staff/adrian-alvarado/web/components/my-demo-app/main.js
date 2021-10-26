// MAIN PAGES
var landingContainer = document.querySelector('.landing')
var registerContainer = document.querySelector('.register')
var registered = document.querySelector('.registered')
var loginContainer = document.querySelector('.login')
var welcome = document.querySelector('.welcome')
var changePassword = document.querySelector('.change-password')
var deleteAccount = document.querySelector('.delete-account')

// LANDING BUTTONS
var landingLoginButton = landingContainer.querySelectorAll('button')[0]
var landingRegisterButton = landingContainer.querySelectorAll('button')[1]

// REGISTER BUTTONS
var registerRegisterButton = registerContainer.querySelectorAll('button')[0]
var registerLoginButton = registerContainer.querySelectorAll('button')[1]

// REGISTERED PAGE
var registeredLoginButton = registered.querySelectorAll('button')[0]
var registeredLandingButton = registered.querySelectorAll('button')[1]

// LOGIN BUTTONS
var loginLoginButton = loginContainer.querySelectorAll('button')[0]
var loginRegisterButton = loginContainer.querySelectorAll('button')[1]

// WELCOME BUTTONS
var welcomeChangePassButton = welcome.querySelectorAll('button')[0]
var welcomeDeleteAccountButton = welcome.querySelectorAll('button')[1]
var welcomeLandingButton = welcome.querySelectorAll('button')[2]
var welcomeUser = welcome.querySelector('.welcome__user')

// CHANGE PASSWORD BUTTONS
var changePasswordButton = changePassword.querySelectorAll('button')[0]
var changePasswordBackButton = changePassword.querySelectorAll('button')[1]

// DELETE ACCOUNT BUTTONS
var deleteAccountButton = deleteAccount.querySelectorAll('button')[0]
var deleteLandingButton = deleteAccount.querySelectorAll('button')[1]

// TOKEN
var token

// LANDING TO LOGIN
landingLoginButton.onclick = function () {
    landingContainer.classList.add('container--off')
    loginContainer.classList.remove('container--off')
}

// LANDING TO REGISTER
landingRegisterButton.onclick = function () {
    landingContainer.classList.add('container--off')
    registerContainer.classList.remove('container--off')
}

// REGISTER TO LOGIN
registerLoginButton.onclick = function (event) {
    event.preventDefault()
    registerContainer.classList.add('container--off')
    loginContainer.classList.remove('container--off')
}

// REGISTERING 
registerContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = registerContainer.querySelectorAll('.input')
    var nameInput = inputs[0]
    var surnameInput = inputs[1]
    var usernameInput = inputs[2]
    var passwordInput = inputs[3]

    var name = nameInput.value
    var surname = surnameInput.value
    var username = usernameInput.value
    var password = passwordInput.value

    let xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 409) return ('user already exist')

        if (status == 201) {
            registerContainer.reset()
            registerContainer.classList.add('container--off')
            registered.classList.remove('container--off')
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = `{
        "name": "${name}",
        "surname": "${surname}",
        "username": "${username}",
        "password": "${password}"
    }`

    xhr.send(body)
}

// REGISTERED PAGE TO LOGIN AND TO LANDING
registeredLoginButton.onclick = function () {
    registered.classList.add('container--off')
    loginContainer.classList.remove('container--off')
}

registeredLandingButton.onclick = function () {
    registered.classList.add('container--off')
    landingContainer.classList.remove('container--off')
}

// LOGING IN
loginContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = loginContainer.querySelectorAll('.input')
    var usernameInput = inputs[0]
    var passwordInput = inputs[1]

    var username = usernameInput.value
    var password = passwordInput.value

    let xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401)
            return alert('wrong credentials')

        if (status == 200) {
            var response = xhr.responseText

            token = response.slice(10, -2)

            var xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                loginContainer.reset()

                loginContainer.classList.add('container--off')

                welcomeUser.textContent = username

                welcome.classList.remove('container--off')
            }

            xhr2.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', 'Bearer ' + token)

            xhr2.send()
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = `{
        "username": "${username}",
        "password": "${password}"
    }`

    xhr.send(body)
}

// LOGIN TO REGISTER
loginRegisterButton.onclick = function (event) {
    event.preventDefault()
    registerContainer.classList.remove('container--off')
    loginContainer.classList.add('container--off')
}

// WELCOME TO CHANGE PASSWORD
welcomeChangePassButton.onclick = function () {
    welcome.classList.add('container--off')
    changePassword.classList.remove('container--off')
}

// WELCOME TO DELETE ACCOUNT
welcomeDeleteAccountButton.onclick = function () {
    welcome.classList.add('container--off')
    deleteAccount.classList.remove('container--off')
}

// WELCOME TO LANDING
welcomeLandingButton.onclick = function () {
    welcome.classList.add('container--off')
    landingContainer.classList.remove('container--off')
}

// CHANGE PASSWORD
changePassword.onsubmit = function (event) {
    // debugger
    event.preventDefault()

    var inputs = changePassword.querySelectorAll('input')
    var inputOldPassword = inputs[0]
    var inputNewPassword = inputs[1]

    var oldPassword = inputOldPassword.value
    var newPassword = inputNewPassword.value

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401)
            alert('Wrong Password')

        if (status === 204) {
            changePassword.reset()
            changePassword.classList.add('container--off')
            landingContainer.classList.remove('container--off')
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = `{
        "oldPassword": "${oldPassword}",
        "password": "${newPassword}"
    }`

    xhr.send(body)
}

changePasswordBackButton.onclick = function () {
    changePassword.reset()
    changePassword.classList.add('container--off')
    welcome.classList.remove('container--off')
}