const { validateToken, validateCallback } = require('./helpers/validators')
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
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))

        } else if (status === 200) {
            const response = responseText

            const user = JSON.parse(response)

            callback(null, user)
        }
    }

    xhr.open('GET', 'https://localhost/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

export default retrieveUser