const { readFile } = require('fs')

/**
 * Login a user in the application.
 * 
 * @param {Object} user The user with the username and password to sign in.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function authenticateUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError('username is not a string')
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 8) throw new Error('password has less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const user = users.find(user => user.username === username && user.password === password)

        if (!user) return callback(new Error(`User ${username} not found.`))

        callback(null, user.id)
    })
}

module.exports = authenticateUser