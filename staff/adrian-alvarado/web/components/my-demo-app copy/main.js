// MAIN PAGES
var landingContainer = document.querySelector('.landing')
var registerContainer = document.querySelector('.register')
var registered = document.querySelector('.registered')
var loginContainer = document.querySelector('.login')
var welcome = document.querySelector('.welcome')
var searchContainer = welcome.querySelector('.search')
var vehiclesContainer = welcome.querySelector('.vehicles')
var vehicleDetails = welcome.querySelector('.vehicleDetails')
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

// SEARCH BUTTON
var searchButton = searchContainer.querySelector('button')

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

// RESULTS API
searchContainer.onsubmit = function (event) {
    event.preventDefault()

    var queryInput = searchContainer.querySelector('input')
    var query = queryInput.value

    try {
        searchItems(query, function (error, vehicles) {
            if (error) return alert(error.message)

            vehiclesContainer.innerHTML = ''

            vehicles.forEach(vehicle => {
                var item = document.createElement('li')
                item.classList.add('vehicles__item')
                var title = document.createElement('h1')
                title.classList.add('vehicles__title')
                title.textContent = vehicle.name
                var image = document.createElement('img')
                image.classList.add('vehicles__img')
                image.src = vehicle.thumbnail
                var price = document.createElement('span')
                price.classList.add('vehicles__price')
                price.textContent = vehicle.price + ' $'
                item.append(title, image, price)
                vehiclesContainer.append(item)

                item.onclick = function () {
                    try {
                        retrieveItem(vehicle.id, function (error, vehicle) {
                            if (error) return alert(error.message)

                            var title = vehicleDetails.querySelector('h2')
                            title.innerText = vehicle.name

                            var image = vehicleDetails.querySelector('img')
                            image.src = vehicle.image

                            var description = vehicleDetails.querySelector('p')
                            description.innerText = vehicle.description

                            var list1 = vehicleDetails.querySelectorAll('ul')[0]
                            var year = list1.querySelectorAll('li')[0]
                            year.innerText = vehicle.year
                            var price = list1.querySelectorAll('li')[1]
                            price.innerText = vehicle.price
                            var color = list1.querySelectorAll('li')[2]
                            color.innerText = vehicle.color

                            var list2 = vehicleDetails.querySelectorAll('ul')[1]
                            var style = list2.querySelectorAll('li')[0]
                            style.innerText = vehicle.style
                            var collection = list2.querySelectorAll('li')[1]
                            collection.innerText = vehicle.collection
                            var maker = list2.querySelectorAll('li')[2]
                            maker.innerText = vehicle.maker

                            var link = vehicleDetails.querySelector('a')
                            link.href = vehicle.url
                            link.innerText = 'Web'

                            vehiclesContainer.classList.add('container--off')
                            vehicleDetails.classList.remove('container--off')
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }
                vehiclesContainer.classList.remove('container--off')
            })
        })
    } catch (error) {
        alert(error.message)
    }
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