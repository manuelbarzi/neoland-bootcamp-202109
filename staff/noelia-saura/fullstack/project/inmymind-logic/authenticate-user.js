const { validateUsername, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('inmymind-errors')
const { models: { User } } = require('inmymind-data')
const bcrypt = require('bcryptjs')

/**
 * 
 * @param {string} username user's unique username
 * @param {string} password user's password
 * 
 * @returns {Promise<Number>}
 * 
 * @throws {TypeError}
 * @throws {FormatError}
 */
const authenticateUser = (username, password) => {
    validateUsername(username)
    validatePassword(password)
    
    return(async () => {
        const user = await User.findOne({username})
        if (!user || !bcrypt.compareSync(password, user.password)) throw new CredentialsError('wrong credentials')

        return user.id
    })()

}

module.exports = authenticateUser