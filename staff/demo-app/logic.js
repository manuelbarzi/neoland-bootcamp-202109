// REGISTER USER

/**
 * Signs up a user in the application.
 * 
 * @param {Object} name All data of the user to be registered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

 function registerUser(user, callback) {
    if (typeof user.name !== "string") throw new TypeError(user.name + " is not a string")
    if (!user.name.trim().length) throw new Error("Name is empty or blank")
    if (user.name.trim() !== user.name) throw new Error("Blank spaces on name")

    if (typeof user.surname !== "string") throw new TypeError(user.surname + " is empty")
    if (!user.surname.trim().length) throw new Error("Surname is empty or blank")
    if (user.surname.trim() !== user.surname) throw new Error("Blanck spaces on Surname")

    if (typeof user.email !== "string") throw new TypeError(user.email + " is not a string")
    if (!user.email.trim().length) throw new Error("Email is empty or blank")
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) throw new Error(user.email + " is not an e-mail")

    if (typeof user.username !== "string") throw new TypeError(user.user + " is empty")
    if (!user.username.trim().length) throw new Error("Username is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.esername)) throw new Error("username has blank spaces")
    if (user.username.length < 4) throw new error("Username has less than 4 characters")

    if (typeof user.password !== "string") throw new TypeError(user.password + " is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

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

    var body = user 

    xhr.send(JSON.stringify(body))
}

// LOGIN USER

/**
 * Login a user in the application.
 * 
 * @param {Object} user The user with the username and password to sign in.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function loginUser(user, callback) {
    if (typeof user.username !== "string") throw new TypeError(user.username + " is empty")
    if (!user.username.trim().length) throw new Error("Username is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.username)) throw new Error("username has blank spaces")
    if (user.username.length < 4) throw new error("Username has less than 4 characters")

    if (typeof user.password !== "string") throw new TypeError(user.password + " is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {

            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            var response = JSON.parse(xhr.responseText)

            token = response.token

            callback(null, token)
        }
    }
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = user

    xhr.send(JSON.stringify(body))
}

// RETRIEVE USER

/**
 * Authenticate a user in the application.
 *
 * @param {string} token The token to authenticate the retrieve user.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function retrieveUser(token, callback) {
    if (typeof token !== "string") throw new TypeError(token + " is not a string")
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

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

// UPDATE USER DATA

/**
 * Updating the user data in the application.
 * 
 * @param {string} token The token to authenticate the retrieve user.
 * @param {Object} user All data of user to be changed.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function updateUserData(token, user, callback) {
    if (user.name === "" && user.surname === "" && user.email === "" && user.username === "") throw new Error("All inputs are empty or blank.")

    if (typeof token !== "string") throw new TypeError(token + " is not a string")
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof user.name !== "string") throw new TypeError(user.name + " is not a string")
    if (user.name.trim() !== user.name) throw new Error("Blank spaces on name")

    if (typeof user.surname !== "string") throw new TypeError(user.surname + " is empty")
    if (user.surname.trim() !== user.surname) throw new Error("Blanck spaces on Surname")

    if (typeof user.email !== "string") throw new TypeError(user.email + " is not a string")
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email) && user.email.length > 0) throw new Error(user.email + " is not an e-mail")

    if (typeof user.username !== "string") throw new TypeError(user.username + " is empty")
    if (/\r?\n|\r|\t| /g.test(user.username)) throw new Error("username has blank spaces")
    if (user.username.length < 4) throw new error("Username has less than 4 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

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

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var body = user

    xhr.send(JSON.stringify(body))
}

// UPDATE PASSWORD

/**
 * Updating the password in the application.
 * 
 * @param {string} token The token to authenticate the retrieve user.
 * @param {string} user The user with the old and new password to be changed.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function updateUserPassword(token, user, callback) {
    if (typeof token !== "string") throw new TypeError(token + " is not a string")
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof user.oldPassword !== "string") throw new TypeError(oldPassword + " is not a string")
    if (!user.oldPassword.trim().length) throw new Error("Old password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.oldPassword)) throw new Error("Old password has blank spaces")
    if (user.oldPassword.length < 6) throw new Error("Old password has less than 6 characters")


    if (typeof user.password !== "string") throw new TypeError(password + " is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

    var xhr = new XMLHttpRequest;

    xhr.onload = function () {
        var status = xhr.status;

        if (status === 400 || status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var body = user

    xhr.send(JSON.stringify(body))
}

// UNREGISTER USER

/**
 * Unregistering a user in the application.
 * 
 * @param {string} token The token to authenticate the retrieve user.
 * @param {Object} user The password of the user to be unregistered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function unregisterUser(token, user, callback) {
    if (typeof token !== "string") throw new TypeError(token + " is not a string")
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof user.password !== "string") throw new TypeError(password + " is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

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

    xhr.setRequestHeader('Content-Type', "application/json")

    var body = user

    xhr.send(JSON.stringify(body))
}

/**
 * Searching vehicles by query
 * 
 * @param {string} query The query to be searching on the API
 * @param {function} callback The callback to manage the response
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function searchVehicles(query, callback) {
    if (typeof query !== "string") throw new TypeError(query + " is not a string")
    if (!query.trim().length) throw new Error("Query is empty or blank")

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicles = JSON.parse(xhr.responseText)

            if (vehicles.length === 0) return callback(new Error('No vehicle found with ' + query))

            callback(null, vehicles)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

    xhr.send()
}

/**
 * Getting all information of the id vehicle
 * 
 * @param {string} id The id to get all the information of the vehicle
 * @param {function} callback The callback to manage the response
 * 
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function retrieveVehicle(id, callback) {
    if (typeof id !== "string") throw new Error(id + " is not a string")

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicles = JSON.parse(xhr.responseText)

            if (!vehicles) return callback(new Error('No vehicle found with id ' + id))

            callback(null, vehicles)

        }
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()
}
