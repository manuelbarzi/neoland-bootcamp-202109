// FORM //

var form = document.createElement("form")
document.body.append(form)
form.classList.add("form")

// TITULO LOGIN

var titleLogin = document.createElement("h2")
titleLogin.innerText = "Login"
form.append(titleLogin)

// LABEL E INPUT DE USUARIO

var label = document.createElement("label")
label.htmlFor = "Usuario"
label.innerText = "Usuario"
form.append(label)

var inputNombre = document.createElement("input")
inputNombre.id = "Usuario"
inputNombre.placeholder = "Usuario"
inputNombre.type = "text"
form.append(inputNombre)
form.append(document.createElement("br"))
form.append(document.createElement("br"))

// LABEL E INPUT DE PASSWORD

var label = document.createElement("label")
label.htmlFor = "password"
label.innerText = "Contraseña"
form.append(label)

var inputPassword = document.createElement("input")
inputPassword.id = "password"
inputPassword.placeholder = "Contraseña"
inputPassword.type = "password"
form.append(inputPassword)
form.append(document.createElement("br"))
form.append(document.createElement("br"))

// BOTONES

var buttonSumbit = document.createElement("button")
buttonSumbit.innerText = "Enviar"
buttonSumbit.type = "submit"
buttonSumbit.classList.add("button")
form.append(buttonSumbit)

var buttonReset = document.createElement("button")
buttonReset.innerText = "Limpiar"
buttonReset.type = "reset"
buttonReset.classList.add("button")
form.append(buttonReset)


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
labelUsuario.htmlFor = "Usuario"
labelUsuario.innerText = "Nombre de Usuario"
formRegister.append(labelUsuario)

var inputUsuario = document.createElement("input")
inputUsuario.id = "Usuario"
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
inputPassword.placeholder = "password"
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





