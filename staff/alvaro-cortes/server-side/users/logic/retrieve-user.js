const context = require('./context')
const { ObjectId } = require('mongodb')

/**
 * Authenticate a user in the application.
 *
 * @param {string} id The id to authenticate the retrieve user.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function retrieveUser(id, callback) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new Error('blank spaces around id')
    if (id.length < 24) throw new Error('id has less than 24 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const users = context.db.collection('users')

    users.findOne({ _id: ObjectId(id) }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error('Wrong ID'))

        user.id = user._id.toString()

        delete user.password

        callback(null, user)
    })
}

module.exports = retrieveUser