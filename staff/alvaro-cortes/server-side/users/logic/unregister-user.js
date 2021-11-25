const { ObjectId } = require('mongodb')
const context = require('./context')

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
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new Error('id has blank spaces')
    if (id.length !== 24) throw new Error('id doesn\'t have 24 characters')

    if (typeof password !== "string") throw new TypeError("Password is not a string")
    if (!password.trim().length) throw new Error("Password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error("Password has blank spaces")
    if (password.length < 6) throw new Error("Password has less than 6 characters")

    if (typeof callback !== "function") throw new TypeError("Callback is not a function")

    const users = context.db.collection('users')

    users.deleteOne({ _id: ObjectId(id) }, { password }, error => {
        if (error) {
            if (error.code === 11000)
                callback(new Error(`user with username ${data.username} already exists`))
            else
                callback(error)

            return
        }

        callback(null, 'User deleted successfully')
    } )
}

module.exports = unregisterUser