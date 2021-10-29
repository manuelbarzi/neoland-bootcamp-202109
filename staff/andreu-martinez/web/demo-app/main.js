//data
var users = []
var token

//views

var landingContainer = document.querySelector('.landing')
var profileContainer = document.querySelector('.profile')
var unregisterContainer = document.querySelector('.unregister')
var signupContainer = document.querySelector('.signup')
var signinContainer = document.querySelector('.signin')
var postSignupContainer = document.querySelector('.post-signup')
var home = document.querySelector('.home')
var nameSpan = home.querySelector('.name')
var spinnerContainer = document.querySelector(".spinner")


if(!sessionStorage.token){
    spinnerContainer.classList.add('container--off')
    landingContainer.classList.remove('container--off')

}else{
    try{
        retrieveUser(sessionStorage.token, function(error, user){

            landingContainer.classList.add('container--off')
            spinnerContainer.classList.add('container--off')
            if(error) return alert(error.message)

            var name = user.name
            var nameSpan =home.querySelector('.name')

            nameSpan.innerText = name
            
            home.classList.remove('container--off')
        })

    }catch(error){
        alert(error.message)
    }
}


var landingButtons = landingContainer.querySelectorAll('a')

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


var signupButton = signupContainer.querySelector('button')

var signupLink = signupContainer.querySelector('a')


signupLink.onclick = function (event) {
    event.preventDefault()

    signupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var signinButtons = signinContainer.querySelectorAll('button')

var signinSignupButton = signinButtons[0]

var signinLink = signinContainer.querySelector('a')

signinLink.onclick = function (event) {
    event.preventDefault()

    signinContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
}



signinContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signinContainer.querySelectorAll('input')

    var usernameInput = inputs[0]
    var passwordInput = inputs[1]

    var username = usernameInput.value
    var password = passwordInput.value

    signinContainer.classList.add('container--off')
    spinnerContainer.classList.remove('container--off')

    try {
        signinUser(username, password, function (error, token) {
            if (error) {
                // alert(error.message)
                injectableModal("template-modal", "Error", err.message);
                // spinnerContainer.classList.add('container--off')
                // signinContainer.classList.remove('container--off')

                return
            }

            sessionStorage.token = token

            signinContainer.reset()

            try {
                retrieveUser(sessionStorage.token, function (error, user) {
                    if (error) {
                        alert(error.message)
                        injectableModal("template-modal", "Error", err.message);
                        // spinnerContainer.classList.add('container--off')
                        // signinContainer.classList.remove('container--off')
        
                        return
                    }else{

                    }

                    // var name = user.name

                    // spinnerContainer.classList.add('container--off')

                    // var nameSpan = home.querySelector('.name')

                    // nameSpan.innerText = name

                    // home.classList.remove('container--off')
                })
            } catch (error) {
                alert(error.message)

                // spinnerContainer.classList.add('container--off')
                // signinContainer.classList.remove('container--off')
            }
        })
    } catch (error) {
        // alert(error.message)
        injectableModal("template-modal", "Error", err.message);
        // spinnerContainer.classList.add('container--off')
        // signinContainer.classList.remove('container--off')
    }
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

    signupContainer.classList.add('container--off')
    spinnerContainer.classList.remove('container--off')

    try {
        signupUser(name, username, password, function (error) {
            if (error) {
                // alert(error.message)
                injectableModal("template-modal", "Error", err.message);
                signinContainer.reset();
                // spinnerContainer.classList.add('container--off')
                // signupContainer.classList.remove('container--off')

                return
            }

            signupContainer.reset()

            spinnerContainer.classList.add('container--off')

            postSignupContainer.classList.remove('container--off')

        })
    } catch (error) {
        // alert(error.message)
        injectableModal("template-modal", "Error", err.message);
        spinnerContainer.classList.add('container--off')
        signupContainer.classList.remove('container--off')
    }

}

var postSignupSigninButton = postSignupContainer.querySelector('button')

postSignupSigninButton.onclick = function () {
    signinContainer.classList.remove('container--off')
    postSignupContainer.classList.add('container--off')
}

var homeButton = home.querySelectorAll('button')

homeButton[0].onclick = function () {
    home.classList.add('container--off')
    profileContainer.classList.remove('container--off')
}

homeButton[1].onclick = function () {
    delete sessionStorage.token
    home.classList.add('container--off')
    signinContainer.classList.remove('container--off')
}


/// profile form

var buttonsProfile = profileContainer.querySelectorAll('button')

buttonsProfile[0].onclick = function (event) {
    event.preventDefault()
    profileContainer.classList.add('container--off')
    home.classList.remove('container--off')

}

buttonsProfile[2].onclick = function (event) {
    event.preventDefault()
    profileContainer.classList.add('container--off')
    unregisterContainer.classList.remove('container--off')
}

var profileForm = profileContainer.querySelector('form')

profileForm.onsubmit = function (event) {
    event.preventDefault()

    var inputs = profileForm.querySelectorAll('input')

    var oldPasswordInput = inputs[0]
    var passwordInput = inputs[1]

    var oldPassword = oldPasswordInput.value
    var password = passwordInput.value

    try {
        updateUserPassword(sessionStorage.token, oldPassword, password, function (error) {
            if (error) return alert(error.message)

            profileContainer.classList.add('container--off')

            profileForm.reset()

            home.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)
    }

}



/// reset password form

var unregister = unregisterContainer.querySelectorAll('button')

unregister[0].onclick = function (event) {
    event.preventDefault()
    profileContainer.classList.remove('container--off')
    unregisterContainer.classList.add('container--off')

}

var unregisterForm = unregisterContainer.querySelector('form')

unregisterContainer.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput=unregisterContainer.querySelector('input')

    var password = passwordInput.value
    
    try {
        unregisterUser(sessionStorage.token, password, function (error) {
            if (error) return alert(error.message)

            unregisterContainer.classList.add('container--off')

            unregisterForm.reset()

            landingContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)
    }

}

var homeSearchForm = home.querySelector('.home__search')
var homeResultsList = home.querySelector('.home__results')

homeSearchForm.onsubmit = function (event) {
    event.preventDefault()

    var queryInput = homeSearchForm.querySelector('#query')

    var query = queryInput.value

    try {
        searchVehicles(query, function (error, vehicles) {
            if (error) return alert(error.message)

            homeResultsList.innerHTML = ''

            vehicles.forEach(function (vehicle) {
                var item = document.createElement('li')

                var image = document.createElement('img')
                image.src = vehicle.thumbnail

                var title = document.createElement('h2')
                title.innerText = vehicle.name

                var price = document.createElement('span')
                price.innerText = vehicle.price + ' $'

                item.append(image, title, price)

                item.classList.add('home__result')

                item.onclick = function() {
                    alert(vehicle.id)

                    // TODO call retrieveVehicle(...) and so on... ,)
                }

                homeResultsList.append(item)
            })
        })
    } catch (error) {
        alert(error.message)
    }
}