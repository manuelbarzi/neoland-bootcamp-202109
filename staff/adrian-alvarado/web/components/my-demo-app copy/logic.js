function registerUser(name, surname, username, password, callback) {
    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 409) {
            var response = JSON.parse(xhr.responseText)
            var message = response.error
            callback(new Error(message))
        } else if (status == 201) {
            callback(null)
        } else if (status === 404)
            callback('Error')
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/use')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = {
        name: name,
        surname: surname,
        username: username,
        password: password
    }

    xhr.send(JSON.stringify(body))
}

function loginUser(username, password, callback) {
    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)
            var message = response.error
            callback(new Error(message))
        }
        else if (status == 200) {
            var response = JSON.parse(xhr.responseText)
            var token = response.token
            callback(null, token)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = {
        username: username,
        password: password
    }

    xhr.send(JSON.stringify(body))
}

function retrieveUser(token, callback) {
    if (!token) throw new Error('invalid token')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)
            var message = response.error
            callback(new Error(message))

        } else if (status === 200) {
            var response = xhr.responseText
            var username = JSON.parse(response)
            callback(null, username.username)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

function changePasswordUser(oldPassword, password, token, callback) {
    if (!token) throw new Error('invalid token')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)
            var message = response.error
            callback(new Error(message))
        }
        else if (status === 204) {
            callback(null)
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = {
        oldPassword: oldPassword,
        password: password
    }

    xhr.send(JSON.stringify(body))
}

function searchItems(query, callback) {
    if (!typeof query === 'string') throw new TypeError(query + ' is not a string')

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

function retrieveItem(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 200) {
            var vehicle = JSON.parse(xhr.responseText)

            if (!vehicle) return callback(new Error('no vehicle found with id ' + id))

            callback(null, vehicle)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

    xhr.send()
}