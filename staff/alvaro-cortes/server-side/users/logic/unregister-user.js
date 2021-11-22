const { readFile, writeFile } = require('fs')

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

function unregisterUser(id, password, callback) {
    if (typeof token !== "string") throw new TypeError("Token is not a string")
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof user.password !== "string") throw new TypeError("Password is not a string")
    if (!user.password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error("Password has blank spaces")
    if (user.password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError("Callback is not a function")

    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const index = users.findIndex(user => user.id === id)

        if (index < 0) return callback(new Error(`User with ${id} not found`))

        const user = users[index]

        if (user.password !== password) return callback(new Error("wrong credentials"))

        users.splice(index, 1)

        const json2 = JSON.stringify(users, null, 4)

        writeFile(`${__dirname}/../users.json`, json2, error => {
            if (error) return callback(error)

            callback(null)
        })
    })
}

module.exports = unregisterUser