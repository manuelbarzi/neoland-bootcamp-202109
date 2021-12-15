const { validateToken, validateCallback, validateData } = require('./helpers/validators')
/**
 * Updates the user's profile in the application.
 * 
 * @param {string} token The token sent by the server when the user is authorized.
 * @param {object} data An object that can contain name, username, password and new password.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
 function updateUserProfile(token, data, callback) {
    validateToken(token)
    validateData(data)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 400 || status === 401) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))

        } else if (status === 204) {
            callback(null)
        }
    }

    xhr.open('PATCH', 'https://localhost/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = data

    xhr.send(JSON.stringify(body))
}

export default updateUserProfile