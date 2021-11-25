const context = require('./context')
const { validateUsername, validatePassword, validateCallback } = require('./helpers/validators')
const { CredentialsError } = require('errors')

function authenticateUser (username, password, callback) {
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)
    
    const users = context.db.collection('users') // estudiar esta línea

    users.findOne({ username, password }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new CredentialsError('wrong credentials'))

        callback(null, user._id.toString())
    })
}

module.exports = authenticateUser