const { validateEmail, validatePassword, validateCallback } = require('./helpers/validators')
/**
 * Logs a user in the application.
 * 
 * @param {string} email The email of the user to be logged in.
 * @param {string} password The password of the user to be logged in.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
 function signInUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = JSON.parse(responseText) 

            const token = response.token

            callback(null, token)
        }
    }

    xhr.open('POST', 'https://localhost/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { email, password }

    xhr.send(JSON.stringify(body))
}

export default signInUser