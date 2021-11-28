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

    if (typeof password !== "string") throw new TypeError("password is not a string")
    if (!password.trim().length) throw new Error("password is empty or blank")
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error("password has blank spaces")
    if (password.length < 8) throw new Error("password has less than 8 characters")

    if (typeof callback !== "function") throw new TypeError("callback is not a function")

    const users = context.db.collection('users')

    users.findOne({ _id: ObjectId(id) }, (error, user) => {

        if (!user) return callback(new Error(`user with id ${id} not found`))

        if (user.password === password) {
            users.deleteOne({ _id: ObjectId(id) }, password, () => {

                callback(null, 'User deleted successfully')
            })
        } else return callback(new Error('Wrong password'))
    })

}

module.exports = unregisterUser