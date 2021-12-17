const { validateEmail, validatePassword } = require('./helpers/validators')
const { ConflictError } = require('logical-echo-errors')
const { models: { User } } = require('logical-echo-data')
const bcrypt = require('bcryptjs')

/**
 * TODO doc me 
 * @param {*} email 
 * @param {*} password 
 */
function registerUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return (async () => {
        try {
            await User.create({ email, password: bcrypt.hashSync(password) })

        } catch (error) {
            if (error.code === 11000)
                throw new ConflictError(`user with email ${email} already exists`)

            throw error
        }
    })()     
}

module.exports = registerUser