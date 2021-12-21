//DOM document object Model, hacer html en js


var title = document.createElement('h1')

title.innerText='Hola Mundo'
title.classList.add('title')

console.dir(title)

document.body.append(title)

// crear en js un formulario de login and append it to the body

var divLoginTitle = document.createElement('div')
divLoginTitle.classList.add('divreg__title')
var divLoginInputs = document.createElement('div')
divLoginInputs.classList.add('divreg__inputs')
var divLoginButtons = document.createElement('div')
divLoginButtons.classList.add('divreg__buttons')

var login = document.createElement('form')
// login.classList.add('panel','panel-dark')
login.classList.add('panel')

login.append(divLoginTitle)
login.append(divLoginInputs)
login.append(divLoginButtons)

var loginTitle= document.createElement('h1')
loginTitle.classList.add('panel__title')
loginTitle.innerText = 'login'

divLoginTitle.append(loginTitle)

var loginUsernameLabel = document.createElement('label')
loginUsernameLabel.htmlfor='username'
loginUsernameLabel.innerText='username'

var loginUsernameInput= document.createElement('input')
loginUsernameInput.classList.add('field')
loginUsernameInput.type ='text'
loginUsernameInput.name='username'
loginUsernameInput.id='username'
loginUsernameInput.placeholder='username'

divLoginInputs.append(loginUsernameLabel,loginUsernameInput)


var loginpasswordLabel = document.createElement('label')
loginpasswordLabel.htmlfor='password'
loginpasswordLabel.innerText='password'

var loginpasswordInput= document.createElement('input')
loginpasswordInput.classList.add('field')
loginpasswordInput.type ='password'
loginpasswordInput.name='password'
loginpasswordInput.id='password'
loginpasswordInput.placeholder='password'

divLoginInputs.append(loginpasswordLabel,loginpasswordInput)

var submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.classList.add('button')
submitButton.innerText = 'Login'

divLoginButtons.append(/*submitBr*/submitButton)

var resetButton = document.createElement('button')
resetButton.type = 'reset'
resetButton.classList.add('button')
resetButton.innerText = 'Clear'

divLoginButtons.append(resetButton)

document.body.append(login)


//register

var divRegisterTitle = document.createElement('div')
divRegisterTitle.classList.add('divreg__title')
var divRegisterInputs = document.createElement('div')
divRegisterInputs.classList.add('divreg__inputs')
var divRegisterButtons = document.createElement('div')
divRegisterButtons.classList.add('divreg__buttons')

var register = document.createElement('form')
//register.classList.add('panel', 'panel--dark')
register.classList.add('panel')
register.append(divRegisterTitle)
register.append(divRegisterInputs)

var registerTitle = document.createElement('h1')
registerTitle.classList.add('panel__title')
registerTitle.innerText = 'register'

divRegisterTitle.append(registerTitle)

var registerUsernameLabel = document.createElement('label')
registerUsernameLabel.htmlFor = 'username'
registerUsernameLabel.innerText = 'Username'

var registerUsernameInput = document.createElement('input')
registerUsernameInput.classList.add('field')
registerUsernameInput.type = 'text'
registerUsernameInput.name = 'username'
registerUsernameInput.id = 'username'
registerUsernameInput.placeholder = 'username'

divRegisterInputs.append(registerUsernameLabel, registerUsernameInput)

var registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'password'
registerPasswordLabel.innerText = 'Pasword'

var registerPasswordInput = document.createElement('input')
registerPasswordInput.classList.add('field')
registerPasswordInput.type = 'password'
registerPasswordInput.name = 'password'
registerPasswordInput.id = 'password'
registerPasswordInput.placeholder = 'password'

divRegisterInputs.append(registerPasswordLabel, registerPasswordInput)

var registerNameLabel = document.createElement('label')
registerNameLabel.htmlFor = 'Name'
registerNameLabel.innerText = 'Name'

var registerNameInput = document.createElement('input')
registerNameInput.classList.add('field')
registerNameInput.type = 'Name'
registerNameInput.name = 'Name'
registerNameInput.id = 'Name'
registerNameInput.placeholder = 'Name'

divRegisterInputs.append(registerNameLabel, registerNameInput)

var registerSurnameLabel = document.createElement('label')
registerSurnameLabel.htmlFor = 'Surname'
registerSurnameLabel.innerText = 'Surname'

var registerSurnameInput = document.createElement('input')
registerSurnameInput.classList.add('field')
registerSurnameInput.type = 'Surname'
registerSurnameInput.Surname = 'Surname'
registerSurnameInput.id = 'Surname'
registerSurnameInput.placeholder = 'Surname'

divRegisterInputs.append(registerSurnameLabel, registerSurnameInput)

var registerBirthLabel = document.createElement('label')
registerBirthLabel.htmlFor = 'Birth'
registerBirthLabel.innerText = 'Birth'

var registerBirthInput = document.createElement('input')
registerBirthInput.classList.add('field')
registerBirthInput.type = 'date'
registerBirthInput.Birth = 'Birth'
registerBirthInput.id = 'Birth'
registerBirthInput.placeholder = 'Birth'

divRegisterInputs.append(registerBirthLabel, registerBirthInput)


//// Botones



register.append(divRegisterButtons)

var submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.classList.add('button')
submitButton.innerText = 'register'

// register.append(submitButton)
divRegisterButtons.append(submitButton)

var resetButton = document.createElement('button')
resetButton.type = 'reset'
resetButton.classList.add('button')
resetButton.innerText = 'Clear'

// register.append(resetButton)


divRegisterButtons.append(resetButton)


////

document.body.append(register)
