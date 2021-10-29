// FORM //

var formLogin = document.createElement("form")
document.body.append(formLogin)
formLogin.classList.add("form")

// TITULO LOGIN

var titleLogin = document.createElement("h2")
titleLogin.innerText = "Login"
formLogin.append(titleLogin)

// LABEL E INPUT DE USUARIO

var labelUser = document.createElement("label")
labelUser.htmlFor = "usuario"
labelUser.innerText = "Usuario"
formLogin.append(labelUser)

var inputUser = document.createElement("input")
inputUser.id = "usuario"
inputUser.placeholder = "Usuario"
inputUser.type = "text"
formLogin.append(inputUser)
formLogin.append(document.createElement("br"))
formLogin.append(document.createElement("br"))

// LABEL E INPUT DE PASSWORD

var labelPasswordLogin = document.createElement("label")
labelPasswordLogin.htmlFor = "password"
labelPasswordLogin.innerText = "Contraseña"
formLogin.append(labelPasswordLogin)

var inputPasswordLogin = document.createElement("input")
inputPasswordLogin.id = "password"
inputPasswordLogin.placeholder = "Contraseña"
inputPasswordLogin.type = "password"
formLogin.append(inputPasswordLogin)
formLogin.append(document.createElement("br"))
formLogin.append(document.createElement("br"))

// BOTONES

var buttonSumbit = document.createElement("button")
buttonSumbit.innerText = "Iniciar Sesión"
buttonSumbit.type = "submit"
buttonSumbit.classList.add("button")
formLogin.append(buttonSumbit)

var buttonReset = document.createElement("button")
buttonReset.innerText = "Limpiar"
buttonReset.type = "reset"
buttonReset.classList.add("button")
formLogin.append(buttonReset)

// REGISTRO

// FORM REGISTER//

var formRegister = document.createElement("form")
document.body.append(formRegister)
formRegister.classList.add("form")

// TITULO REGISTER

var titleRegister = document.createElement("h2")
titleRegister.innerText = "Register"
formRegister.append(titleRegister)

// LABEL E INPUT DE NOMBRE 

var labelName = document.createElement("label")
labelName.htmlFor = "nombre"
labelName.innerText = "Nombre"
formRegister.append(labelName)

var inputName = document.createElement("input")
inputName.id = "name"
inputName.placeholder = "Nombre"
inputName.type = "text"
formRegister.append(inputName)
formRegister.append(document.createElement("br"))
formRegister.append(document.createElement("br"))

// LABEL E INPUT DE APELLIDO

var labelSurname = document.createElement("label")
labelSurname.htmlFor = "surname"
labelSurname.innerText = "Apellido"
formRegister.append(labelSurname)

var inputSurname = document.createElement("input")
inputSurname.id = "surname"
inputSurname.placeholder = "Apellido"
inputSurname.type = "text"
formRegister.append(inputSurname)
formRegister.append(document.createElement("br"))
formRegister.append(document.createElement("br"))

// LABEL E INPUT DE EMAIL

var labelEmail = document.createElement("label")
labelEmail.htmlFor = "email"
labelEmail.innerText = "Email"
formRegister.append(labelEmail)

var inputEmail = document.createElement("input")
inputEmail.id = "email"
inputEmail.placeholder = "Email"
inputEmail.type = "email"
formRegister.append(inputEmail)
formRegister.append(document.createElement("br"))
formRegister.append(document.createElement("br"))

// LABEL E INPUT DE NOMBRE USUARIO

var labelUsuario = document.createElement("label")
labelUsuario.htmlFor = "usuario"
labelUsuario.innerText = "Nombre de Usuario"
formRegister.append(labelUsuario)

var inputUsuario = document.createElement("input")
inputUsuario.id = "usuario"
inputUsuario.placeholder = "Usuario"
inputUsuario.type = "text"
formRegister.append(inputUsuario)
formRegister.append(document.createElement("br"))
formRegister.append(document.createElement("br"))

// LABEL E INPUT DE CONTRASEÑA

var labelPassword = document.createElement("label")
labelPassword.htmlFor = "password"
labelPassword.innerText = "Password"
formRegister.append(labelPassword)

var inputPassword = document.createElement("input")
inputPassword.id = "password"
inputPassword.placeholder = "Password"
inputPassword.type = "Password"
formRegister.append(inputPassword)
formRegister.append(document.createElement("br"))
formRegister.append(document.createElement("br"))

// BOTONES REGISTRO

var buttonSumbit = document.createElement("button")
buttonSumbit.innerText = "Enviar"
buttonSumbit.type = "submit"
buttonSumbit.classList.add("button")
formRegister.append(buttonSumbit)

var buttonReset = document.createElement("button")
buttonReset.innerText = "Limpiar"
buttonReset.type = "reset"
buttonReset.classList.add("button")
formRegister.append(buttonReset)





