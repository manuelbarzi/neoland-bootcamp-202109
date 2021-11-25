const context = require('./context')

/**
 * Signs up a user in the application.
 * 
 * @param {Object} name All data of the user to be registered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function registerUser(name, username, password, callback) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (!name.trim().length) throw new Error('name is empty or blank')
    if (name.trim() !== name) throw new Error('blank spaces around name')

    if (typeof username !== 'string') throw new TypeError('username is not a string')
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 8) throw new Error('password has less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const users = context.db.collection('users')

    users.insertOne({ name, username, password }, error => {
        if (error) {
            if (error.code === 11000)
                callback(new Error(`User with username ${username} already exists.`))
            else
                callback(error)

            return
        }

        callback(null)
    })
}

module.exports = registerUser