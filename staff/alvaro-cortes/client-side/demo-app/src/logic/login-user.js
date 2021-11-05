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
    if (user.username.length < 4) throw new Error("Username has less than 4 characters")

    if (typeof user.password !== "string") throw new TypeError(user.password + " is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        //const status = xhr.status
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
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = user

    xhr.send(JSON.stringify(body))
}

export default loginUser