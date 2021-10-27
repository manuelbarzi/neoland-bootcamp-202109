//data

var arrUsers = []

//views

var landing = document.querySelector('.landing')
var signIn = document.querySelector('.sign-in')
var signUp = document.querySelector ('.sign-up')
var thankyou = document.querySelector('.thank-you')
var home = document.querySelector('.home')

// botones landing

var landingButtons = document.querySelectorAll('button')
var landingSignInButtons = landingButtons[0]
var landingSignUpButtons = landingButtons[1]

// welcome to sign in

landingSignInButtons.onclick = function(event){
    event.preventDefault()
    landing.classList.add('container--hide')
    signIn.classList.remove ('container--hide')

}

// welcome to sign up

landingSignUpButtons.onclick = function(event){
    event.preventDefault()
    landing.classList.add('container--hide')
    signUp.classList.remove ('container--hide')

}

//botones sign in

var signInButtonsSignIn = signIn.querySelector('button')
var signInLinkSignUp = signIn.querySelector('a')



signInLinkSignUp.onclick = function(event){
    event.preventDefault()
    signIn.classList.add('container--hide')
    signUp.classList.remove ('container--hide')

}

var signForm = signUp.querySelector('.sign-up__form')

signInForm.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signInForm.querySelectorAll('input')

    var email = inputs[0].value
    var password = inputs[1].value

    if (!email.length) return alert ('email is empty')
    if (!password.length) return alert('password is empty')

    var user = new User ('', email, '', password)
    var userLogIn = myCollection.signIn(user)

    if (userLogIn.name === undefined) alert ("Este usuario no esta registrado");
    else{
        signIn.classList.add ('container--hide')
        home.classList.remove ('container--hide')
    }
    signInForm.reset();
}

// Botones sign up


var signUpButtonSignUp = signUp.querySelector('button')
var signUpLinkSignIn = signUp.querySelector('a')

signInLinkSignIn.onclick = function(event){
    event.preventDefault()
    signIn.classList.add('container--hide')
    signIn.classList.remove ('container--hide')

}

// Sign up to thankyou

var signForm = signUp.querySelector('.sign-up__form')

signUpForm.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signUpForm.querySelectorAll ('input')

    var name = inputs[0].value
    var email = inputs[1].value
    var username = inputs[2].value
    var password = inputs[3].value
    var checkbox = inputs[4]

    if (!name.length) return alert('name is empty')
    if (!email.length) return alert('email is empty')
    if (!username.length) return alert('username is empty')
    if (!password.length) return alert('password is empty')
    if (!checkbox.checked) return alert('you have to accept terms')

    var user = new User (name, email, username, password)

    var userSignUp = myCollection.signUp(user);
    if (userSignUp.name === undefined) alert ('Ya existe un usuario con este e-mail.')
    else {
        signUp.classList.add('container--hide')
        thankYou.classList.remove ('container--hide')
    }
    signUpForm.reset()

    // var user = {
    //     name: name,
    //     email: email,
    //     username: username,
    //     password: password,
    // }

    // users.push(user)

    // signUpForm.reset()

    // signUp.classList.add('container--hide')
    // thankYou.classList.remove('container--hide')
}

// Thank you

var thankYouButon = thankYou.querySelector('button')

thankYouButon.onclick = function (event) {
    event.preventDefault()

    thankYou.classList.add('container--hide')
    signIn.classList.remove('container--hide')
}

// Home

var homeButon = home.querySelector('button')

homeButon.onclick = function (event) {
    event.preventDefault()
    home.classList.add ('container--hide')
    landing.classList.remove ('container--hide')
}
