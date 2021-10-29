/**
 * Signs up a user in the application.
 * 
 * @param {string} name The full name of the user to be registered.
 * @param {string} username The username of the user to be registered.
 * @param {string} password The password of the user to be registered.
 * @param {string} email The email of the user to be registered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
function signupUser(name,username,password,email,callback){
    if(typeof name !== 'string') throw new TypeError (name+ 'is not a string')
    if(!name.trim().length) throw new Error('name is empty or blank')//trim= detecta los espacios en blanco
    if(name.trim()!== name) throw new Error ('blank spaces around name')
    // if (/\r?\n|\r|\t| /g.test(name)) throw new Error('name has blank spaces')

    if(typeof username !=='string')throw new TypeError(username + 'is not a string')
    if(!username.trim().length) throw new Error ('username is empty or blank')
    // if (username.indexOf(' ') > -1) throw new Error('username has blank spaces')
    // if (username.indexOf('\t') > -1) throw new Error('username has blank spaces')
    // if (username.indexOf('\n') > -1) throw new Error('username has blank spaces')
    if(/\r?\n|\r|\t| /g.test(username))throw new Error('username has blank spaces')
    // if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)) throw new Error(username + ' is not an e-mail')
    if(username.length < 4) throw new Error ('username has less than 4 characters')
    
    if(typeof password !== 'string') throw new TypeError(password +'is not a string')
    if(!password.trim().length) throw new Error ('password is empty or blank')
    if(/\r?\n|\r|\t| /g.test(password))throw new Error('password has blank spaces')
    if(password.length < 8) throw new Error ('the password must be longer than 8 characters')
    
    if(typeof email !== 'string') throw new TypeError(email +'is not a string')
    if(!email.trim().length) throw new Error ('email is empty or blank')
    if(/\r?\n|\r|\t| /g.test(email))throw new Error('email has blank spaces')
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error(email + ' is not an e-mail')
    
    if(typeof callback !== 'function')throw new TypeError(callback +'is not a function')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 409 || status === 400) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 201) {
            callback(null)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = { name: name, username: username, password: password,email:email}

    xhr.send(JSON.stringify(body))
}
// TODO document me
/**
 * 
 * @param {string} username The username of the user to be login.
 * @param {string} password The password of the user to be login.
 * @param {function} callback The callback function to manage the response
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
function signinUser(username,password,callback){
    if(typeof username !== 'string')throw new TypeError (username + 'is not a string')
    if(!username.trim ().length) throw new Error ('username is empty or blank')
    if(/\r?\n|\r|\t| /g.test(username)) throw new Error ('username has blank spaces')
    if(username.length<4)throw new Error ('username has less than 4 characters')

    if(typeof password !== 'string')throw new TypeError (passowrd + 'is not a string')
    if(!password.trim().length) throw new Error ('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if(password.length < 8) throw new Error ('the password must be longer than 8 characters')

    if(typeof callback!=='function')throw new TypeError(callback+'is not a fuction')

    var xhr= new XMLHttpRequest
    
    xhr.onload=function(){
        var status= xhr.status

        if(status===401){
            var response= JSON.parse(xhr.responseText)
            var message=response.error
            callback(new Error(message))
        }else if(status===200){
            var response = JSON.parse(xhr.responseText)
            var token= response.token
            callback(null,token)
        }
    }

    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type','application/json')

    var body={ username: username, password: password}
    
    xhr.send(JSON.stringify(body))
}
// TODO document me
/**
 * 
 * @param {'string'} token the token of the user to be retrieve user
 * @param {'function'} callback The callback function to manage the response
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
 function retrieveUser(token, callback) {
    // if (!token) throw new Error('invalid token')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            var response = xhr.responseText

            var user = JSON.parse(response)

            callback(null, user)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users/')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}
// TODO document me

/**
 * 
 * @param {'string'} token the token of the user to be update user password
 * @param {'string'} oldPassword the old password of the user to be update user password
 * @param {'string'} password the password of the user to be update user password
 * @param {'function'} callback The callback function to manage the response
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
function updateUserPassword(token,oldPassword,password,callback){

    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof oldPassword !== 'string')  throw new TypeError(oldPassword + ' is not a string')
    if (!oldPassword.trim().length) throw new Error('oldPassword is empty or blank')
    if (/\r?\n|\r|\t| /g.test(oldPassword)) throw new Error('oldPassword has blank spaces')
    if (oldPassword.length < 8) throw new Error('oldPassword has less than 8 characters')
    
    if (typeof password !== 'string')  throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 8) throw new Error('password has less than 8 characters')
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    
    var xhr= new XMLHttpRequest

    xhr.onload=function(){ 
        var status=xhr.status

        if(status===400|| status === 401){
            var response=JSON.parse(xhr.responseText)

            var message=response.error
            callback(new Error (message))
        }else if(status===204){
            callback(null)
        }
    }
    xhr.open('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization','Bearer ' +token)
    
    xhr.setRequestHeader('Content-Type','application/json')

    var body={oldPassword:oldPassword, password:password}

    xhr.send(JSON.stringify(body))
}
// TODO document me
/**
 * 
 * @param {'string'} token the token of the user to be uregister user
 * @param {'string'} password the password of the user to be uregister user
 * @param {'string'} callback The callback function to manage the response
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
 function unregisterUser(token, password, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')
    
    if (typeof password !== 'string')  throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 8) throw new Error('password has less than 8 characters')
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 400 || status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }
    }

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = { password: password }

    xhr.send(JSON.stringify(body))
}
// TODO document me
function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicles = JSON.parse(xhr.responseText)

            callback(null, vehicles)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    xhr.send()
}

// TODO document me
function retrieveVehicle(id, callback) {
    // TODO implement me
}


/*Modal*/
function generateCloseModal(element) {
    var modal = document.getElementById(element);
    var close = modal.querySelector("#close-modal");

    // close.onclick = function() { modal.remove() }

    modal.onclick = function(event) {
        if(!(
            event.target === modal.querySelector("#modal-content") ||
            event.target === modal.querySelector("#modal-title") ||
            event.target === modal.querySelector("#modal-text")
        ))
            modal.remove();
    }
}


/** Esta función debe utilizarse siempre con una estructura modal, debe contener los id
 * #modal-title para injectar un título y #modal-text para inyectar un texto. El parámetro
 * element será el id del template a clonar, title el título personalizado y text el texto
 * personalizado.
 */
function injectableModal(element, title, text) {
    var template = document.getElementById(element);
    var clone = template.content.cloneNode(true);
    clone.querySelector("#modal-title").innerText = title;
    clone.querySelector("#modal-text").innerText = text;
    document.body.appendChild(clone);
    generateCloseModal("modal");
}

// injectableModal("template-modal", "Este es mi título", "Error la contraseña es incorreca, prueba de nuevo");