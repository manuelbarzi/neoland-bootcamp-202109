console.log('Components')

// form
var login = document.createElement('form')
login.classList.add('login')
document.body.append(login)

// form__title
var login__title = document.createElement('h3')
login__title.innerText = 'Login'
login__title.classList.add('login__title')
login.appendChild(login__title)

// Name label
var login__nameLabel = document.createElement('label')
login__nameLabel.innerText = 'Nombre'
login__nameLabel.classList.add('login__label')
login__nameLabel.htmlFor = 'name'
login.appendChild(login__nameLabel)

// Name input
var login__nameInput = document.createElement('input')
login__nameInput.type = 'text'
login__nameInput.placeholder = 'Ingresa tu nombre'
login__nameInput.id = 'name'
login__nameInput.classList.add('login__input')
login.appendChild(login__nameInput)

// Password label
var login__passwordLabel = document.createElement('label')
login__passwordLabel.innerText = 'Password'
login__passwordLabel.classList.add('login__label')
login__passwordLabel.htmlFor = 'name'
login.appendChild(login__passwordLabel)

// Password input
var login__passwordInput = document.createElement('input')
login__passwordInput.type = 'text'
login__passwordInput.placeholder = 'Ingresa tu password'
login__passwordInput.id = 'name'
login__passwordInput.classList.add('login__input')
login.appendChild(login__passwordInput)

// Button
var login__buttonSend = document.createElement('button')
login__buttonSend.type = 'submit'
login__buttonSend.innerText = 'Enviar'
login__buttonSend.classList.add('login__button')
login.appendChild(login__buttonSend)