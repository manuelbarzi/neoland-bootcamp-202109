const { validateUsername, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('logical-echo-errors')
const { models: { User } } = require('logical-echo-data')
const bcrypt = require('bcryptjs')
const { sanitizeDocument } = require( './helpers/sanitizers' )

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)

    return (async () => {
        try {
            const user = await User.findOne({ username })
            
            if (!user || !bcrypt.compareSync(password, user.password)) throw new CredentialsError('wrong credentials')
    
            sanitizeDocument(user)
            
            return user.id
        } catch (error) {
            throw error
        }
    })()
}

module.exports = authenticateUser