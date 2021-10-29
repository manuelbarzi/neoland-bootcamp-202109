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

    registerUser(name, surname, username, password, function (error) {
        if (error) return alert(error.message)

        registerContainer.reset()
        registerContainer.classList.add('container--off')
        registered.classList.remove('container--off')
    })
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

    loginUser(username, password, function (error, _token) {
        if (error) return alert(error.message)

        token = _token

        loginContainer.reset()
        loginContainer.classList.add('container--off')
        welcome.classList.remove('container--off')

        retrieveUser(token, function (error, user) {
            if (error) return alert(error.message)

            welcomeUser.textContent = user
        })
    })
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
    event.preventDefault()

    var inputs = changePassword.querySelectorAll('input')
    var inputOldPassword = inputs[0]
    var inputPassword = inputs[1]

    var oldPassword = inputOldPassword.value
    var password = inputPassword.value

    changePasswordUser(oldPassword, password, token, function (error) {
        if (error) return alert(error.message)

        changePassword.reset()
        changePassword.classList.add('container--off')
        landingContainer.classList.remove('container--off')
    })
}

changePasswordBackButton.onclick = function () {
    changePassword.reset()
    changePassword.classList.add('container--off')
    welcome.classList.remove('container--off')
}