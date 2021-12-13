const { validateUsername, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('eb-errors')
const { models: { User } } = require('eb-data')

/**
 * Login a user in the application.
 * 
 * @param {string} username The username to sign in.
 * @param {string} password The password to sign in.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)

    return User.findOne({ username, password })
        .then(user => {
            if (!user) throw new CredentialsError('Wrong credentials')

            return user.id
        })
}

module.exports = authenticateUser