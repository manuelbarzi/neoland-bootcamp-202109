var xhr = new XMLHttpRequest;
var url = "https://b00tc4mp.herokuapp.com/api/v2/";

var landingContainer = document.querySelector('.landing')
var signInContainer = document.querySelector('.Sign-in')
var signInForm = document.querySelector('.sign-in__form')
var signUpContainer = document.querySelector('.Sign-up')
var thankyouContainer = document.querySelector('.Thank-you')
var homeContainer = document.querySelector('.home')
var profileContainer = document.querySelector(".form_profile")
var buttonProfile = document.querySelector('.button-profile')
var buttonSignOut = document.querySelector('.button-signout')
var buttonUpdate = document.querySelector('.button-Update')
var buttonGoBack = document.querySelector('.button-Goback')
var UnregisterContainer = document.querySelector('.form_Unregister')
var buttonUnregister = document.querySelector('.button-Unregister')
var spinner = document.querySelector('.spinner2')
var buttonSearch = document.querySelector('.button-search')
var homeSearchForm = document.querySelector('.home__search')
var homeResultsList = homeContainer.querySelector('.home__results')
var homeDetail = homeContainer.querySelector('.home__detail')
var buttonBack = document.querySelector('.button-back')
var buttonSignOut = document.querySelector('.button-signout')

var token

var landingButton = landingContainer.querySelectorAll('button')

var landingSignInButton = landingButton[0]

landingSignInButton.onclick = function () {
    landingContainer.classList.add('container--off')
    signInContainer.classList.remove('container--off')
}

var landingSignUpButton = landingButton[1]

landingSignUpButton.onclick = function () {
    landingContainer.classList.add('container--off')
    signUpContainer.classList.remove('container--off')
}

var signUpLink = signUpContainer.querySelector('.link')

signUpLink.onclick = function (event) {
    event.preventDefault()

    signUpContainer.classList.add('container--off')
    signInContainer.classList.remove('container--off')
}

var signInLink = signInContainer.querySelector('.links')

signInLink.onclick = function (event) {
    event.preventDefault()

    signInContainer.classList.add('container--off')
    signUpContainer.classList.remove('container--off')
}

// SING-OUT
buttonSignOut.onclick = function(event){
    event.preventDefault()

    homeContainer.classList.add('container--off')
    landingContainer.classList.remove('container--off')
}

// SIGN IN
signInForm.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signInForm.querySelectorAll('input')

    var user = inputs[0].value
    var password = inputs[1].value
    switchSpinner()
    try {
        signInCall(user, password, function (error, _token) {
            if (error) result.alert(error.message)

            token = _token

            signInForm.reset()

            try {
                retrieveSignIn(token, function (error, user) {
                    if (error) return alert(error.message)
                    switchSpinner()
                    var name = user.name
                    alert('Hola ' + name)

                    signInContainer.classList.add('container--off')

                    homeContainer.classList.remove('container--off')

                })
            } catch (error) {
                alert(error.message)
            }

        })
    } catch (error) {
        alert(error.message)
        switchSpinner()
    }
}

// SIGN UP
signUpContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signUpContainer.querySelectorAll('input')
    var firstName = inputs[0].value
    var lastName = inputs[1].value
    var userName = inputs[2].value
    var password = inputs[3].value
    var confirmPassword = inputs[4].value
    var policies = document.querySelector('.form__checkbox').checked

    try {
        switchSpinner()
        signUpCall(firstName, lastName, userName, password, confirmPassword, policies, function (error) {
            if (error) result.alert(error.message)
            switchSpinner()
            signUpContainer.reset()

            signUpContainer.classList.add('container--off')

            thankyouContainer.classList.remove('container--off')
        })

    } catch (error) {
        alert(error.message)
        switchSpinner()
    }
}

// BUTTON PROFILE
buttonProfile.onclick = function (event) {
    event.preventDefault()

    homeContainer.classList.add('container--off')
    profileContainer.classList.remove('container--off')
}

// PROFILE CONTAINER
profileContainer.onsubmit = function (event) {
    event.preventDefault()

    var profileInput = profileContainer.querySelectorAll(".input__input")

    var oldPassword = profileInput[0].value
    var newPassword = profileInput[1].value

    switchSpinner()
    profileCall(oldPassword, newPassword, token, function (error) {
        if (error) result.alert(error.message)
        switchSpinner()
        profileContainer.reset();

        profileContainer.classList.add('container--off')
        homeContainer.classList.remove('container--off')
    })
}

buttonGoBack.onclick = function (event) {
    event.preventDefault()

    profileContainer.classList.add('container--off')
    homeContainer.classList.remove('container--off')
}

// UNREGISTER
UnregisterContainer.onsubmit = function (event) {
    event.preventDefault()
    var UnregisterInput = UnregisterContainer.querySelectorAll(".password")
    var password = UnregisterInput[0].value
    switchSpinner()
    UnregisterCall(password, token, function (error) {
        if (error) alert(error.message)
        switchSpinner()
        UnregisterContainer.classList.add('container--off')
        UnregisterContainer.reset();
        landingContainer.classList.remove('container--off')
    })
}
// BUTTON UNREGISTER
buttonUnregister.onclick = function (event) {
    event.preventDefault()

    profileContainer.classList.add('container--off')
    UnregisterContainer.classList.remove('container--off')


}
  
// BUTTON GO BACK
buttonGoBack.onclick = function (event) {
    event.preventDefault()

    UnregisterContainer.classList.add('container--off')
    profileContainer.classList.remove('container--off')
}

// SPINNER
var bloqueo = document.querySelector('.bloqueo')
// Función que hace toogle sobre la clase container--off del spinner
function switchSpinner() {
    spinner.classList.toggle('container--off')
    bloqueo.classList.toggle('container--off')
}

// HOME SEARCH
homeSearchForm.onsubmit = function (event){
    event.preventDefault()

    var searchInput = homeSearchForm.querySelector('#query')

    var query = searchInput.value
    switchSpinner()
    try {
        searchVehicles(query, function (error, vehicles) {
            if (error) return alert(error.message)
            switchSpinner()
            homeResultsList.innerHTML = ''

            homeResultsList.classList.remove('container--off')

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
                    try {
                        switchSpinner()
                        retrieveVehicle(vehicle.id, function(error, vehicle) {
                            if (error) return alert(error.message)
                            switchSpinner()
                            homeResultsList.classList.add('container--off')

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

                            homeDetail.classList.remove('container--off')
                        })
                    } catch(error) {
                        alert(error.message)
                        switchSpinner()
                    }
                }

                homeResultsList.append(item)
            })
        })

    } catch (error) {
        alert(error.message)
        switchSpinner()
    }
}
// BACK
buttonBack.onclick = function(event){
    event.preventDefault()
    homeDetail.classList.add('container--off')
    homeResultsList.classList.remove('container--off')
}

// MODAL

function generateModal() {
    var modal = document.getElementById("template-modal")
    var clone = modal.contentEditable.cloneNode(true)
    document.body.appendChild(clone)
    createCloseModal()
}

function crateCloseModal(){
    var modal = document.getElementById("modal")
    var close = document.getElementById("close-modal")

    close.onclick = function() { modal.remove()}

    modal.onclick = function(event) {
        if (event.target != this.getElementsByClassName("modal__pop-up")[0]) modal.remove()
    }
}

