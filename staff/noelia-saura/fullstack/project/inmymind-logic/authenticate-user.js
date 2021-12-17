const { validateUsername, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('inmymind-errors')
const { models: { User } } = require('inmymind-data')
const bcrypt = require('bcryptjs')

/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @returns 
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