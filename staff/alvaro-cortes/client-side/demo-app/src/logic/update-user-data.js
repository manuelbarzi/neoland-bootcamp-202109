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
    if (user.username.length < 4) throw new Error("Username has less than 4 characters")

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

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var body = user

    xhr.send(JSON.stringify(body))
}

export default updateUserData