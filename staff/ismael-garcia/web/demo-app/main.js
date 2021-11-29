// - - - - - Panels - - - - - 
var landingContainer = document.querySelector('.landing')
var registerContainer = document.querySelector('.register')
var registeredContainer = document.querySelector('.registered')
var loginContainer = document.querySelector('.login')
var homeContainer = document.querySelector('.home')
var profileContainer = document.querySelector('.profile')
var unregisterContainer = document.querySelector('.unregister')
var spinnerContainer = document.querySelector('.spinner')

// - - - - - leaving session open - - - - -
if (!sessionStorage.token) {
    spinnerContainer.classList.add('container--off')

    landingContainer.classList.remove('container--off')
} else {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) return alert(error.message)

            var name = user.name

            var nameSpan = homeContainer.querySelector('.name')

            nameSpan.innerText = name

            spinnerContainer.classList.add('container--off')

            homeContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)
    }
}



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

    registerContainer.classList.add('container--off')
    spinnerContainer.classList.remove('container--off')

    try {
        registerUser(name, surname, username, password, function (error) {
            if (error) {
                alert(error.message)

                spinnerContainer.classList.add('container--off')
                registerContainer.classList.remove('container--off')

                return
            }

            registerContainer.reset()

            spinnerContainer.classList.add('container--off')

            registeredContainer.classList.remove('container--off')
        
        })
    } catch (error) {
        alert(error.message)

        spinnerContainer.classList.add('container--off')
        registerContainer.classList.remove('container--off')
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

    loginContainer.classList.add('container--off')
    spinnerContainer.classList.remove('container--off')

    try {
        loginUser(username, password, function (error, token) {
            if (error) {
                alert(error.message)

                spinnerContainer.classList.add('container--off')
                loginContainer.classList.remove('container--off')

                return
            }

            sessionStorage.token = token

            loginContainer.reset()

            try {
                retrieveUser(sessionStorage.token, function (error, user) {
                    if (error) {
                        alert(error.message)

                        spinnerContainer.classList.add('container--off')
                        loginContainer.classList.remove('container--off')
                        
                        return
                    }

                    var name = user.name

                    spinnerContainer.classList.add('container--off')

                    var nameSpan = homeContainer.querySelector('.name')

                    nameSpan.innerText = name

                    homeContainer.classList.remove('container--off')
                })
            } catch (error) {
                alert(error.message)

                spinnerContainer.classList.add('container--off')
                loginContainer.classList.remove('container--off')
            }
        })
    } catch (error) {
        alert(error.message)

        spinnerContainer.classList.add('container--off')
        loginContainer.classList.remove('container--off')
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


// Using search form

var homeSearchForm = homeContainer.querySelector('.home__search')
var homeResultsList = homeContainer.querySelector('.home__results')

homeSearchForm.onsubmit = function (event) {
    event.preventDefault()

    var queryInput = homeSearchForm.querySelector('#query')

    var query = queryInput.value

    homeContainer.classList.add('container--off')
    spinnerContainer.classList.remove('container--off')

    try {
        searchVehicles(query, function(error, vehicles) {
            if (error) {
                alert(error)

                spinnerContainer.classList.add('container--off')
                homeContainer.classList.remove('container--off')

                return
            }

            homeResultsList.innerHTML = ''

            homeResultsList.classList.remove('container--off')

            vehicles.forEach(function(vehicle) {
                var item = document.createElement('li')

                var image = document.createElement('img')
                image.src = vehicle.thumbnail

                var title = document.createElement('h2')
                title.innerText = vehicle.name

                var price = document.createElement('span')
                price.innerText = vehicle.price + ' $'

                item.append(image, title, price)

                item.classList.add('home__results-item')

                item.onclick = function () {

                    homeResultsList.classList.add('container--off')
                    spinnerContainer.classList.remove('container--off')
                    
                    try {
                        retrieveVehicle(vehicle.id, function(error, vehicle) {
                            if (error) {

                                alert(error.message)

                                spinnerContainer.classList.add('container--off')
                                homeResultsList.classList.remove('container--off')

                                return
                            }

                            var title = homeDetail.querySelector('h2')
                            title.innerText = vehicle.name

                            var image = homeDetail.querySelector('img')
                            image.src = vehicle.image

                            var description = homeDetail.querySelector('p')
                            description.innerText = vehicle.description

                            var year = homeDetail.querySelector('time')
                            year.innerText = vehicle.year

                            var other = homeDetail.querySelectorAll('span')

                            other[0].innerText = vehicle.price
                            other[1].innerText = vehicle.color
                            other[2].innerText = vehicle.style
                            other[3].innerText = vehicle.collection
                            other[4].innerText = vehicle.maker

                            var link = homeDetail.querySelector('a')
                            link.src = vehicle.url

                            spinnerContainer.classList.add('container--off')
                            homeDetail.classList.remove('container--off')   
                        })
                    } catch (error) {
                        alert(error.message)

                        spinnerContainer.classList.add('container--off')
                        homeResultsList.classList.remove('container--off')
                    }
                }

                homeResultsList.append(item)
            })
        })
    } catch (error) {
        alert(error.message)

        spinnerContainer.classList.add('container--off')
        homeContainer.classList.remove('container--off')
    }
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

    profileContainer.classList.add('container--off')
    spinnerContainer.classList.remove('container--off')

    try {
        updateUserPassword(sessionStorage.token, oldPassword, password, function (error) {
            if (error) {
                alert(error.message)

                spinnerContainer.classList.add('container--off')
                profileContainer.classList.remove('container--off')

                return
            }

            spinnerContainer.classList.add('container--off')

            profileForm.reset()

            homeContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)

        spinnerContainer.classList.add('container--off')
        profileContainer.classList.remove('container--off')
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

    unregisterContainer.classList.add('container--off')
    spinnerContainer.classList.remove('container--off')

    try {
        unregisterUser(sessionStorage.token, password, function (error) {
            if (error) {
                alert(error.message)

                spinnerContainer.classList.add('container--off')
                unregisterContainer.classList.remove('container--off')

                return
            }

            spinnerContainer.classList.add('container--off')

            unregisterForm.reset()

            landingContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)

        spinnerContainer.classList.add('container--off')
        unregisterContainer.classList.remove('container--off')
    }
}


