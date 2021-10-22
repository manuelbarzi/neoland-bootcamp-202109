//data
var users = []



//views

var landingContainer = document.querySelector('.landing')
var signupContainer = document.querySelector('.signup')
var signinContainer = document.querySelector('.signin')
var postSignupContainer = document.querySelector('.post-signup')
var homepage = document.querySelector('.homepage')
var name = homepage.querySelector('.name')

var landingButtons = landingContainer.querySelectorAll('button')

var signupButton = landingButtons[1]

signupButton.onclick = function() {
    landingContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
}

var landingSigninButton = landingButtons[0]

landingSigninButton.onclick = function() {
    landingContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}
var signupButtons = signupContainer.querySelectorAll('button')

var signupSigninButton = signupButtons[0]

signupSigninButton.onclick = function(event) {
    event.preventDefault()

    signupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var signinButtons = signinContainer.querySelectorAll('button')

var signinSignupButton = signinButtons[0]

signinSignupButton.onclick = function(event) {
    event.preventDefault()

    signinContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
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

    var userlogin = {
        username: username,
        password: password
    }
    
    signinContainer.reset()

    signinContainer.classList.add('container--off')

    var validate=false

    for (var i = 0; i < users.length; i++) {
        if((users[i].username===userlogin.username) && (users[i].password===userlogin.password)){
            name.innerText = users.name
            homepage.classList.remove('container--off')
            validate=true
        }
    }
    if(!validate){
        alert('username or password incorrect!')
        signinContainer.classList.remove ('container--off')
    }
    
}


signupContainer.onsubmit = function(event) {
    event.preventDefault()

    var inputs = signupContainer.querySelectorAll('input')

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

    var user = {
        name: name,
        username: username,
        password: password,
        email: email
    }

    users.push(user)

    // nameInput.value = ''
    // usernameInput.value = ''
    // passwordInput.value = ''

    signupContainer.reset()

    signupContainer.classList.add('container--off')

    postSignupContainer.classList.remove('container--off')
}

var postSignupSigninButton = postSignupContainer.querySelector('button')

postSignupSigninButton.onclick = function() {
    postSignupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}