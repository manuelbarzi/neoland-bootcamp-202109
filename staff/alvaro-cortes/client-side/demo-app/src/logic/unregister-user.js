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

    if (typeof user.password !== "string") throw new TypeError(user.password + " is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        //const status = xhr.status
        const { status, responseText } = xhr

        if (status === 400 || status === 401) {
            const response = JSON.parse(responseText)

            const message = response.error

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

export default unregisterUser