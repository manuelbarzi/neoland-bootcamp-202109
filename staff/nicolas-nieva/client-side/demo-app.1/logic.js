/**
 * Registers a user in the application.
 * 
 * @param {string} name The name of the user to be registered.
 * @param {string} username The username of the user to be registered.
 * @param {string} password The password of the user to be registered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
 function signUpUser(name, username, password, callback) {
    if (typeof name !== 'string') throw new TypeError(name + ' is not a string')
    if (!name.trim().length) throw new Error('name is empty or blank')
    if (name.trim() !== name) throw new Error('blank spaces around name')

    if (typeof username !== 'string') throw new TypeError(username + ' is not a string')
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 5) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

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

    var body = { name: name, username: username, password: password } 

    xhr.send(JSON.stringify(body))
}


// - - - - - loging in - - - - -
/**
 * Logs a user in the application.
 * 
 * @param {string} username The username of the user to be logged in.
 * @param {string} password The password of the user to be logged in.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
function signInUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError(username + ' is not a string')
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 5) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        }

        if (status === 200) {
            var response = JSON.parse(xhr.responseText) 

            token = response.token

            callback(null, token)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = { username: username, password: password }

    xhr.send(JSON.stringify(body))
}


// - - - - - retrieving user - - - - -
/**
 * Retrieves the info about the user from the server.
 * 
 * @param {string} token The token sent by the server when the user is authorized.
 * @param {function} callback The callback function to manage the response.
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

    xhr.onload = function() {
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


// - - - - - updating user's password - - - - -
/**
 * Updates the user's password in the application.
 * 
 * @param {string} token The token sent by the server when the user is authorized.
 * @param {string} oldPassword The old password that the user wants to change.
 * @param {string} password The new password that the user wants to set.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
function updateUserPassword(token, user, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof user.oldPassword !== 'string') throw new TypeError(user.oldPassword + ' is not a string')
    if (!user.oldPassword.trim().length) throw new Error('old password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(user.oldPassword)) throw new Error('oldPassword has blank spaces')
    if (user.oldPassword.length < 5) throw new Error('oldPassword has less than 6 characters')

    if (typeof user.password !== 'string') throw new TypeError(user.password + ' is not a string')
    if (!user.password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error('password has blank spaces')
    if (user.password.length < 5) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.onload = function() {
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

    var body = user

    xhr.send(JSON.stringify(body))
}


// - - - - - unregistering - - - - -
/**
 * Unregisters the user in the application.
 * 
 * @param {string} token The token sent by the server when the user is authorized.
 * @param {string} password The password of the user to be unregistered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
function unregisterUser(token, password, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 5) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.onload = function() {
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


// - - - - - using search form - - - - -
/**
 * Searches for items that meet the query criteria.
 * 
 * @param {string} query The search criteria entered by the user in the search form.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status


        // Falta incluir manejo de errores
        if (status === 200) {
            var vehicles = JSON.parse(xhr.responseText)

            callback(null, vehicles)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    xhr.send()
}


// ----- showing details when clicking on search results items -----
/**
 * Retrieves the details of the selected item.
 * 
 * @param {string} id The id of the item being retrieved.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
function retrieveVehicle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        // Falta incluir manejo de errores
        if (status === 200) {
            var vehicle = JSON.parse(xhr.responseText)

            if (!vehicle) return callback(new Error('no vehicle found with id ' + id))

            callback(null, vehicle)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()
}