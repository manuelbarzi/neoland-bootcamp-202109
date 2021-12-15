const { validateName, validateUsername, validatePassword, validateCallback } = require('./helpers/validators')
/**
 * Registers a user in the application.
 * 
 * @param {string} name The name of the user to be registered.
 * @param {string} username The username of the user to be registered.
 * @param {string} password The password of the user to be registered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {FormatError} When any of the arguments does not contain the correct format.
 */
 function signUpUser(name, username, password, callback) {
    validateName(name)
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 409 || status === 400) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))

        } else if (status === 201) {
            callback(null) 
        }
    }

    xhr.open('POST', 'https://localhost/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { name, username, password } 

    xhr.send(JSON.stringify(body))
}

export default signUpUser