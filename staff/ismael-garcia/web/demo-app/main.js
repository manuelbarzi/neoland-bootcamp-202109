// data

var users = []


// views

// MAIN PAGES

var landingContainer = document.querySelector('.landing')
var loginContainer = document.querySelector('.login')
var registerContainer = document.querySelector('.register')

// LANDING BUTTONS

var landingLoginButton = landingContainer.querySelectorAll('button')[0]
var landingRegisterButton = landingContainer.querySelectorAll('button')[1]

// LOGIN BUTTONS

var loginLoginButton = loginContainer.querySelectorAll('button')[1]
var loginRegisterButton = loginContainer.querySelectorAll('button')[0]

// WELCOME PAGE

var welcome = document.querySelector('.welcome')

// REGISTER BUTTONS

var registerLoginButton = registerContainer.querySelectorAll('button')[0]
var registerRegisterButton = registerContainer.querySelectorAll('button')[1]

// REGISTERED PAGE

var registered = document.querySelector('.registered')
var registeredLoginButton = registered.querySelector('button')

// LANDING TO LOGIN

landingLoginButton.onclick = function() {
    landingContainer.classList.add('container--off')
    loginContainer.classList.remove('container--off')
}

// LANDING TO REGISTER

landingRegisterButton.onclick = function() {
    landingContainer.classList.add('container--off')
    registerContainer.classList.remove('container--off')
}

// LOGING IN

loginLoginButton.onclick = function (event) {
    event.preventDefault()

    var inputs = loginContainer.querySelectorAll('.field')
    var usernameInput = inputs[0]
    var passwordInput = inputs[1]

    var usernameValue = usernameInput.value
    var passwordValue = passwordInput.value

    var bool = users.some(function(element){
        return element.username === users.username && element.password === users.password
    })

    if (bool) {
        welcome.classList.remove('container--off')

        loginContainer.classList.add('container--off')
    } else {
        alert('Usuario o contraseña incorrectos.')
    }

    /*for (var i = 0; i < users.length; i++) {
        if (users[i].username !== username || users[i].password !== password || username === '' || password === '') {
            alert('Usuario o contraseña incorrectos.')
        } else {
            welcome.classList.remove('container--off')

            loginContainer.classList.add('container--off')
        }
        /*(users[i].username === username && users[i].password === password && username !== '' && password !== ''){
            
        }
    }*/

    
}

// LOGIN TO REGISTER

loginRegisterButton.onclick = function (event) {
    event.preventDefault()

    registerContainer.classList.remove('container--off')

    loginContainer.classList.add('container--off')
}

// REGISTER TO LOGIN

registerLoginButton.onclick = function(event) {
    event.preventDefault()

    loginContainer.classList.remove('container--off')

    registerContainer.classList.add('container--off')
}

// REGISTERING 

registerContainer.onsubmit = function(event) {
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

    if (!name.length) return alert('Por favor, introduce tu nombre.')
    if (!surname.length) return alert('Por favor, introduce tu apellido.')
    if (!username.length) return alert('Por favor, introduce tu nombre de usuario.')
    if (!password.length) return alert('Por favor, introduce tu contraseña.')

    var user = {
        name: name,
        surname: surname,
        username: username,
        password: password
    }

    users.push(user)

    registerContainer.reset()

    registerContainer.classList.add('container--off')

    registered.classList.remove('container--off')

}


// REGISTERED PAGE TO LOGIN
registeredLoginButton.onclick = function() {
    registered.classList.add('container--off')

    loginContainer.classList.remove('container--off')
}



