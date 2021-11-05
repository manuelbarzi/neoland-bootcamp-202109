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
    if (user.username.length < 4) throw new Error("Username has less than 4 characters")

    if (typeof user.password !== "string") throw new TypeError(user.password + " is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        //const status = xhr.status
        const { status, responseText} = xhr

        if (status === 409 || status === 400) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 201) {
            callback(null)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = user 

    xhr.send(JSON.stringify(body))
}

export default registerUser