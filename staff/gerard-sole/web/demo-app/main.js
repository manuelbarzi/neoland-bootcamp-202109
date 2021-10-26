var landingContainer = document.querySelector('.landing')
var signupContainer = document.querySelector('.signup')
var signinContainer = document.querySelector('.signin')
var postSignupContainer = document.querySelector('.post-signup')
var home = document.querySelector('.home')
var profile = document.querySelector('.profile')
var unregister = document.querySelector('.unregister')

var token

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

var signupSigninButton = signupContainer.querySelector('button')

signupSigninButton.onclick = function (event) {
    event.preventDefault()

    signupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var signinSignupButton = signinContainer.querySelector('button')

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

        if (status === 409 || status === 400) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

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

        if (status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

        if (status === 200) {
            var response = xhr.responseText

            token = response.slice(10, -2)

            signinContainer.reset()

            var xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                var response = xhr2.responseText

                var name = response.slice(9, response.indexOf(',') - 1)
                
                var nameSpan = home.querySelector('.name')
                
                nameSpan.innerText = name

                signinContainer.classList.add('container--off')

                home.classList.remove('container--off')
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

var homeButtons = home.querySelectorAll('button')

var homeProfileButton = homeButtons[0]

var profileForm = profile.querySelector('form')

var profileForm2 = profile.querySelectorAll('form')[1]

homeProfileButton.onclick = function() {
    home.classList.add('container--off')

    profileForm.reset()

    profile.classList.remove('container--off')
}

var homeSignoutButton = homeButtons[1]

homeSignoutButton.onclick = function() {
    home.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var profileBackButton = profileForm.querySelector('button')

profileBackButton.onclick = function(event) {
    event.preventDefault()

    profile.classList.add('container--off')

    home.classList.remove('container--off')
}

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
            profile.classList.add('container--off')

            profileForm.reset()

            home.classList.remove('container--off')
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    
    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "oldPassword": "' + oldPassword + '", "password" : "' + password + '" }'
    
    xhr.send(body)

    // profileForm2.onsubmit = function (event) {
    //     event.preventDefault()
        
    //     var inputs = profileForm.querySelectorAll('input')
    
    //     var usernameInput = inputs[0]
    //     var passwordInput = inputs[1]
    
    //     var username = usernameInput.value
    //     var password = passwordInput.value
    
    //     var xhr = new XMLHttpRequest
    
    //     xhr.onload = function() {
    //         var status = xhr.status
    
    //         if (status === 400 || status === 401) {
    //             var response = xhr.responseText
    
    //             var message = response.slice(10, -2)
    
    //             return alert(message)
    //         }
    
    //         if (status === 204) {
    //             profile.classList.add('container--off')
    
    //             profileForm.reset()
    
    //             home.classList.remove('container--off')
    //         }
    //     }
    
    //     xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
    //     xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        
    //     xhr.setRequestHeader('Content-Type', 'application/json')
    
    //     var body = '{ "oldPassword": "' + oldPassword + '", "password" : "' + password + '" }'
        
    //     xhr.send(body)
}


var profileUnregisterButton = profile.querySelector('.profile>button')

profileUnregisterButton.onclick = function() {
    profile.classList.add('container--off')

    unregister.classList.remove('container--off')
}

var unregisterBackButton = unregister.querySelector('button')

var unregisterForm = unregister.querySelector('form')

unregisterBackButton.onclick = function(event) {
    event.preventDefault()

    unregister.classList.add('container--off')

    unregisterForm.reset()

    profile.classList.remove('container--off')
}

unregisterForm.onsubmit = function(event) {
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

        if(status === 204) {
            unregister.classList.add('container--off')

            unregisterForm.reset()

            landingContainer.classList.remove('container--off')
        }
    }

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "password" : "' + password + '" }'

    xhr.send(body)
}