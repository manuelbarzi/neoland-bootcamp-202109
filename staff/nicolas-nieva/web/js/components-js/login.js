
var login = document.createElement('form')
// login.classList.add ('panel', 'panel--dark')
login.classList.add('panel')

var loginTitle = document.createElement ('h1')
loginTitle.classList.add ('panel__title')
loginTitle.innerText = 'Login'

login.append(loginTitle)

var loginUsernameLabel = document.createElement('label')
loginUsernameLabel.htmlFor = 'username'
loginUsernameLabel.innerText = 'Username'

var loginUsernameInput = document.createElement('input')
loginUsernameInput.classList.add('field')
loginUsernameInput.type ='text'
loginUsernameInput.name = 'username'
loginUsernameInput.id = 'username'
loginUsernameInput.placeholder = 'username'

login.append (loginUsernameLabel, loginUsernameInput)

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.innerText = 'Password'

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.innerText = 'Password'

var loginPasswordInput = document.createElement ('input')
loginPasswordInput.classList.add ('field')
loginPasswordInput.type = 'password'
loginPasswordInput.name = 'password'
loginPasswordInput.id = 'password'
loginPasswordInput.placeholder = 'password'

login.append (loginPasswordLabel, loginPasswordInput)

var submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.classList.add = ('button')
submitButton.innerText = 'Login'

login.append (submitButton)

var resetButton = document.createElement ('button')
resetButton.type = 'reset'
resetButton.classList.add = ('button')
resetButton.innerText = 'Clear'

login.append (resetButton)

document.body.append (login)





