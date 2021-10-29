/**
 * 
 * @param {string} name the full name of the user to be registered
 * @param {string} username the username of the user to be registered
 * @param {string} email the email of the user to be registered
 * @param {string} password the password of the user to be registered
 * @param {function} callback the callback funtion to manage the response
 * 
 * @throws {typeError} When any of the arguments does not match the correct type
 * @throws {Error} When any of the arguments does not contain the correct format
 */


function signupUser(name, username, password, callback){
    if(typeof name !== 'string') throw new TypeError(name + ' is not a string')
    if(!name.trim().length) throw new Error('name is empty or blank')
    if(name.trim() !== name) throw new Error('name has blank spaces around')

    if (typeof username !== 'string') throw new TypeError(username + ' is not a string')
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof password !== 'string')  throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
 
    var xhr = new XMLHttpRequest

    xhr.onload = function (){
        var status = xhr.status

        if(status === 409 || status === 400){
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        }else if(status === 201){
            callback(null)
        }

    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Content-Type', 'application/json')
    var body = {name: name, username: username, password: password}
    xhr.send(JSON.stringify(body))
}

function signinUser(username, password, callback){
    if (typeof username !== 'string')  throw new TypeError(username + ' is not a string')
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof password !== 'string')  throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.onload = function (){
        var status = xhr.status

        if(status === 401){
            var response = JSON.parse(xhr.responseText)
            var message = response.error
            callback(new Error(message))
        }else if(status === 200){
            var response = JSON.parse(xhr.responseText)
            var token = response.token
            callback(null, token)
        }
    }
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')
    var body = { username: username, password: password }
    xhr.send(JSON.stringify(body))
}

function retrieveUser(token, callback) {
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

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

function updateUserPassword(token, oldPassword, password, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof oldPassword !== 'string')  throw new TypeError(oldPassword + ' is not a string')
    if (!oldPassword.trim().length) throw new Error('oldPassword is empty or blank')
    if (/\r?\n|\r|\t| /g.test(oldPassword)) throw new Error('oldPassword has blank spaces')
    if (oldPassword.length < 6) throw new Error('oldPassword has less than 6 characters')
    
    if (typeof password !== 'string')  throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')
    
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

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = { oldPassword: oldPassword, password: password }

    xhr.send(JSON.stringify(body))
}

function unregisterUser(token, password, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')
    
    if (typeof password !== 'string')  throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')
    
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


function injectableModal(element, title, text) {
    var template = document.getElementById(element);
    var clone = template.content.cloneNode(true);
    clone.querySelector("#modal-title").innerText = title;
    clone.querySelector("#modal-text").innerText = text;
    document.body.appendChild(clone);
    generateCloseModal("modal");
}