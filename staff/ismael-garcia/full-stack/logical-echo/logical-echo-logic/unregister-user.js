const { validateId, validatePassword } = require('./helpers/validators')
const { CredentialsError } = require('../logical-echo-errors')
const { models: { User } } = require('../logical-echo-data')
const bcrypt = require('bcryptjs')

/**
 * TODO doc me
 * @param {*} id 
 * @param {*} password 
 */
function unregisterUser(id, password) {
    validateId(id)
    validatePassword(password)

    return (async () => {
        const user = await User.findById(id).lean()
        
        if (!user || !bcrypt.compareSync(password, user.password)) throw new CredentialsError('wrong credentials')
        
        try {
            await User.deleteOne({ id })
            
        } catch (error) {
            throw error
        }
    })()
}

module.exports = unregisterUser 