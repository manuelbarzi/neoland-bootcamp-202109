// Selectors pages
var landingContainer = document.querySelector('.landing')
var signUpContainer = document.querySelector('.signup')
var signInContainer = document.querySelector('.signin')


// Landing page
var landingButtons = landingContainer.querySelectorAll('button')

var landingSignUp = landingButtons[1]
    landingSignUp.onclick = function() {
    landingContainer.classList.add('container--off')
    signUpContainer.classList.remove('container--off')
}

var landingSignIn = landingButtons[0]
    landingSignIn.onclick = function() {
    landingContainer.classList.add('container--off')
    signInContainer.classList.remove('container--off')
}

// SignUp page
var signUpButtons = signUpContainer.querySelectorAll('button')

var signUpSignIn = signUpButtons[0]
    signUpSignIn.onclick = function(event) {
    event.preventDefault()
    signUpContainer.classList.add('container--off')
    signInContainer.classList.remove('container--off')
}

signUpContainer.onsubmit = function(event) {
    event.preventDefault()
    var inputs = signUpContainer.querySelectorAll('input')

    var nameInput = inputs[0]
    var usernameInput = inputs[1]
    var passwordInput = inputs[2]
    var emailInput = inputs[3]

    var name = nameInput.value
    var username = usernameInput.value
    var password = passwordInput.value
    var email = emailInput.value

    if (!name.length) return alert('name is empty')
    if (!username.length) return alert('username is empty')
    if (!password.length) return alert('password is empty')
    if (!email.length) return alert('email is empty')

    var xhr = new XMLHttpRequest

    // En el respectivo sitio dentro de onponer un alert dicienload tienes que do que el usuario se ha registrado correctamente
    xhr.onload = function () {
        var status = xhr.status
        if (status === 409) return alert('user already exists')
        if (status === 201) {
            signUpContainer.reset()
            signUpContainer.classList.add('container--off')
            signInContainer.classList.remove('container--off')
        }
    }
   xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users') 
   xhr.setRequestHeader('Content-Type', 'application/json')
   var body = '{ "name": "' + name + '", "username": "' + username + '", "password": "' + password + '" }'
   xhr.send(body)
}


// SignIn page

// var signUpSignIn = signInButtons[0]
// signUpSignIn.onclick = function(event) {
//     event.preventDefault()
//     signInContainer.classList.add('container--off')
//     signUpContainer.classList.remove('container--off')
// }

var landingSignIn = landingButtons[0]
var landingSignIn = landingButtons[0]
    landingSignIn.onclick = function() {
    landingContainer.classList.add('container--off')
    signInContainer.classList.remove('container--off')
}

var landingSignUp = landingButtons[0]
    landingSignUp.onclick = function() {
    landingContainer.classList.add('container--off')
    signUpContainer.classList.remove('container--off')
}

signinContainer.onsubmit =function(event){
        event.preventDefault()
        var inputs = signinContainer.querySelectorAll('input')
    
        var usernameInput=inputs[0]
        var passwordInput=inputs[1]
    
        var username= usernameInput.value
        var password =passwordInput.value
    
        if (!username.length) return alert('username is empty')
        if (!password.length) return alert('password is empty')
    
        var xhr = new XMLHttpRequest
    
        xhr.onload = function () {
            var status = xhr.status
    
            if (status === 401) return alert ('wrong credentials')
    
            if (status === 200) {
                var response = xhr.responseText
    
                token = response.slice(10, -2)
    
                var xhr2 = new XMLHttpRequest
    
                xhr2.onload = function() {
                    var response = xhr2.responseText
    
                    var name = response.slice(9, response.indexOf(',') -1)
    
                    signinContainer.reset()
    
                    signinContainer.classList.add('container--off')
    
                    nameSpan.innerText = name 
                    
                    homepage.classList.remove('container--off')
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




// Primer boton SignUp
// LLeva al usuario al formulario de registro

// Segundo botón SignIn
// Usas en endPoint de auth y luego usas el endPoint de users
// con GET para traerte los datos










// var signInButtons = signInContainer.querySelectorAll('button')

// var signUpSignIn = signInButtons[0]
// signUpSignIn.onclick = function(event) {
//     event.preventDefault()
//     signInContainer.classList.add('container--off')
//     signUpContainer.classList.remove('container--off')
// }

//views
// var postSignupContainer = document.querySelector('.post-signup')
// var homepage = document.querySelector('.homepage')
// var homeButtons = homepage.querySelectorAll('button')
// var nameSpan = homepage.querySelector('.name')
// var token

// 

// signinContainer.onsubmit =function(event){
//     event.preventDefault()
//     var inputs = signinContainer.querySelectorAll('input')

//     var usernameInput=inputs[0]
//     var passwordInput=inputs[1]

//     var username= usernameInput.value
//     var password =passwordInput.value

//     if (!username.length) return alert('username is empty')
//     if (!password.length) return alert('password is empty')

//     var xhr = new XMLHttpRequest

//     xhr.onload = function () {
//         var status = xhr.status

//         if (status === 401) return alert ('wrong credentials')

//         if (status === 200) {
//             var response = xhr.responseText

//             token = response.slice(10, -2)

//             var xhr2 = new XMLHttpRequest

//             xhr2.onload = function() {
//                 var response = xhr2.responseText

//                 var name = response.slice(9, response.indexOf(',') -1)

//                 signinContainer.reset()

//                 signinContainer.classList.add('container--off')

//                 nameSpan.innerText = name 
                
//                 homepage.classList.remove('container--off')
//             }
//             xhr2.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
//             xhr2.setRequestHeader('Authorization', 'Bearer ' + token)

//             xhr2.send()
//         }
//     }

//     xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

//     xhr.setRequestHeader('Content-Type', 'application/json')

//     var body = '{ "username": "' + username + '", "password": "' + password + '" }'

//     xhr.send(body)
// }




// var postSignUpSignInButton = postSignUpContainer.querySelector('button')

// postSignUpSignInButton.onclick = function() {
//     postSignupContainer.classList.add('container--off')

//     signinContainer.classList.remove('container--off')
// }
