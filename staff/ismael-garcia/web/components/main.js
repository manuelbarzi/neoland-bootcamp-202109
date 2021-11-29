var title = document.createElement('h1')
title.innerText = 'Hola, Mundo!'
title.classList.add('title')

console.dir(title)

document.body.append(title)

// TODO mount a login form with js and append it to the body

var login = document.createElement('form')
//login.classList.add('panel', 'panel--dark')
login.classList.add('panel')

var loginTitle = document.createElement('h1')
loginTitle.classList.add('panel__title')
loginTitle.innerText = 'Login'
login.append(loginTitle)

var loginUsernameLabel = document.createElement('label')
loginUsernameLabel.htmlFor = 'username'
loginUsernameLabel.innerText = 'Username'

var loginUsernameInput = document.createElement('input')
loginUsernameInput.classList.add('field')
loginUsernameInput.type = 'text'
loginUsernameInput.name = 'username'
loginUsernameInput.id = 'username'
loginUsernameInput.placeholder = 'Username'

login.append(loginUsernameLabel, loginUsernameInput)

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.innerText = 'Password'

var loginPasswordInput = document.createElement('input')
loginPasswordInput.classList.add('field')
loginPasswordInput.type = 'password'
loginPasswordInput.name = 'password'
loginPasswordInput.id = 'password'
loginPasswordInput.placeholder = 'Password'

login.append(loginPasswordLabel, loginPasswordInput)

var submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.classList.add('button')
submitButton.innerText = 'Login'

login.append(submitButton)

var resetButton = document.createElement('button')
resetButton.type = 'reset'
resetButton.classList.add('button')
resetButton.innerText = 'Clear'

login.append(resetButton)

document.body.append(login)

// TODO mount a register form with js and append it to the body

// REGISTER

// FORM

var register = document.createElement('form')
register.classList.add('panel')

// var register = document.createElement("form")
// document.body.append(register)
// register.classList.add("form")

// TITLE

var registerTitle = document.createElement('h1')
registerTitle.classList.add('panel__title')
registerTitle.innerText = 'REGISTER'

register.append(registerTitle)

// var registerTitle = document.createElement("h2")
// registerTitle.innerText = "Register"
// register.append(registerTitle)

// NAME

var registerNameLabel = document.createElement('label')
registerNameLabel.htmlFor = 'name'
registerNameLabel.innerText = 'Name'

var registerNameInput = document.createElement('input')
registerNameInput.classList.add('field')
registerNameInput.type = 'text'
registerNameInput.name = 'name'
registerNameInput.id = 'name'
registerNameInput.placeholder = 'Name'

register.append(registerNameLabel, registerNameInput)

// var registerNameLabel = document.createElement("label")
// registerNameLabel.htmlFor = "nombre"
// registerNameLabel.innerText = "Nombre"
// register.append(registerNameLabel)

// var inputName = document.createElement("input")
// inputName.id = "name"
// inputName.placeholder = "Nombre"
// inputName.type = "text"
// formRegister.append(inputName)
// formRegister.append(document.createElement("br"))
// formRegister.append(document.createElement("br"))

// SURNAME

var registerSurnameLabel = document.createElement('label')
registerSurnameLabel.htmlFor = 'surname'
registerSurnameLabel.innerText = 'Surname'

var registerSurnameInput = document.createElement('input')
registerSurnameInput.classList.add('field')
registerSurnameInput.type = 'text'
registerSurnameInput.name = 'surname'
registerSurnameInput.id = 'surname'
registerSurnameInput.placeholder = 'Surname'

register.append(registerSurnameLabel, registerSurnameInput)

// var labelSurname = document.createElement("label")
// labelSurname.htmlFor = "surname"
// labelSurname.innerText = "Apellido"
// formRegister.append(labelSurname)

// var inputSurname = document.createElement("input")
// inputSurname.id = "surname"
// inputSurname.placeholder = "Apellido"
// inputSurname.type = "text"
// formRegister.append(inputSurname)
// formRegister.append(document.createElement("br"))
// formRegister.append(document.createElement("br"))

// EMAIL

var registerEmailLabel = document.createElement("label")
registerEmailLabel.htmlFor = "email"
registerEmailLabel.innerText = "Email"

var registerEmailInput = document.createElement("input")
registerEmailInput.id = "email"
registerEmailInput.classList.add('field')
registerEmailInput.placeholder = "Email"
registerEmailInput.type = "email"
registerEmailInput.name = 'email'

register.append(registerEmailLabel, registerEmailInput)


// USERNAME

var registerUsernameLabel = document.createElement('label')
registerUsernameLabel.htmlFor = 'username'
registerUsernameLabel.innerText = 'Username'

var registerUsernameInput = document.createElement('input')
registerUsernameInput.classList.add('field')
registerUsernameInput.type = 'text'
registerUsernameInput.name = 'username'
registerUsernameInput.id = 'username'
registerUsernameInput.placeholder = 'Username'

register.append(registerUsernameLabel, registerUsernameInput)

// var labelUsuario = document.createElement("label")
// labelUsuario.htmlFor = "Usuario"
// labelUsuario.innerText = "Nombre de Usuario"
// formRegister.append(labelUsuario)

// var inputUsuario = document.createElement("input")
// inputUsuario.id = "Usuario"
// inputUsuario.placeholder = "Usuario"
// inputUsuario.type = "text"
// formRegister.append(inputUsuario)
// formRegister.append(document.createElement("br"))
// formRegister.append(document.createElement("br"))

// PASSWORD

var registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'password'
registerPasswordLabel.innerText = 'Password'

var registerPasswordInput = document.createElement('input')
registerPasswordInput.classList.add('field')
registerPasswordInput.type = 'password'
registerPasswordInput.name = 'password'
registerPasswordInput.id = 'password'
registerPasswordInput.placeholder = 'Password'

register.append(registerPasswordLabel, registerPasswordInput)

// var labelPassword = document.createElement("label")
// labelPassword.htmlFor = "password"
// labelPassword.innerText = "Password"
// formRegister.append(labelPassword)

// var inputPassword = document.createElement("input")
// inputPassword.id = "password"
// inputPassword.placeholder = "password"
// inputPassword.type = "Password"
// formRegister.append(inputPassword)
// formRegister.append(document.createElement("br"))
// formRegister.append(document.createElement("br"))

// BUTTONS

var submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.classList.add('button')
submitButton.innerText = 'Login'

var resetButton = document.createElement('button')
resetButton.type = 'reset'
resetButton.classList.add('button')
resetButton.innerText = 'Clear'

register.append(submitButton, resetButton)

document.body.append(register)

// var buttonSumbit = document.createElement("button")
// buttonSumbit.innerText = "Enviar"
// buttonSumbit.type = "submit"
// buttonSumbit.classList.add("button")
// formRegister.append(buttonSumbit)

// var buttonReset = document.createElement("button")
// buttonReset.innerText = "Limpiar"
// buttonReset.type = "reset"
// buttonReset.classList.add("button")
// formRegister.append(buttonReset)




