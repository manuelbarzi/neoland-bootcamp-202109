function SignupUser(name, username, password, callback) {
    if (!name.length) throw new Error ('name is empty')
    if (!username.length) throw new Error ('user is empty')
    if (!password.length) throw new Error ('pasword is empty')

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

