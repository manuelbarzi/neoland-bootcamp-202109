// - - - - - Panels - - - - - 
var landingContainer = document.querySelector('.landing')
var registerContainer = document.querySelector('.register')
var registeredContainer = document.querySelector('.registered')
var loginContainer = document.querySelector('.login')
var homeContainer = document.querySelector('.home')
var profileContainer = document.querySelector('.profile')
var unregisterContainer = document.querySelector('.unregister')

// - - - - - Global variables - - - - -
var token



// - - - - - LANDING - - - - -

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



// - - - - - REGISTER - - - - -

// Registering
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

    try {
        registerUser(name, surname, username, password, function (error) {
            if (error) return alert(error.message)

            registerContainer.reset()

            registerContainer.classList.add('container--off')

            registeredContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)
    }
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



// - - - - - LOGIN - - - - -

// Loging in
loginContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = loginContainer.querySelectorAll('.field')

    var usernameInput = inputs[0]
    var passwordInput = inputs[1]

    var username = usernameInput.value
    var password = passwordInput.value

    try {
        loginUser(username, password, function (error, _token) {
            if (error) return alert(error.message)

            token = _token

            loginContainer.reset()

            try {
                retrieveUser(token, function (error, user) {
                    if (error) return alert(error.message)

                    var name = user.name

                    loginContainer.classList.add('container--off')

                    var nameSpan = homeContainer.querySelector('.name')

                    nameSpan.innerText = name

                    homeContainer.classList.remove('container--off')
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }
}


// Button Login to Register
var loginRegisterButton = loginContainer.querySelectorAll('button')[0]

loginRegisterButton.onclick = function (event) {
    event.preventDefault()

    registerContainer.classList.remove('container--off')

    loginContainer.classList.add('container--off')
}



// - - - - - HOME - - - - -

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



// - - - - - PROFILE - - - - -

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

    try {
        updateUserPassword(token, oldPassword, password, function (error) {
            if (error) return alert(error.message)

            profileContainer.classList.add('container--off')

            profileForm.reset()

            homeContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)
    }
}


// Button Profile to Unregister
var profileUnregisterButton = profileContainer.querySelector('.profile>button')

profileUnregisterButton.onclick = function() {
    profileContainer.classList.add('container--off')

    unregisterContainer.classList.remove('container--off')
}



// - - - - - UNREGISTER - - - - -

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

    try {
        unregisterUser(token, password, function (error) {
            if (error) return alert(error.message)

            unregisterContainer.classList.add('container--off')

            unregisterForm.reset()

            landingContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)
    }
}