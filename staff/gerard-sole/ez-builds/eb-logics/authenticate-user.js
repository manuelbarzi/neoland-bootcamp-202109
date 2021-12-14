const { validateUsername, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('eb-errors')
const { models: { User } } = require('eb-data')

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