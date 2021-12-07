const { validateName, validateUsername, validatePassword } = require('./helpers/validators')
const { ConflictError } = require('../logical-echo-errors')
const { models: { User } } = require('../logical-echo-data')
const bcrypt = require('bcryptjs')

/**
 * TODO doc me
 * @param {*} name 
 * @param {*} username 
 * @param {*} password 
 */
function registerUser(name, username, password) {
    validateName(name)
    validateUsername(username)
    validatePassword(password)

    return (async () => {
        try {
            await User.create({ name, username, password: bcrypt.hashSync(password) })

        } catch (error) {
            if (error.code === 11000)
                throw new ConflictError(`user with username ${username} already exists`)

            throw error
        }
    })() // IIFE      
}

module.exports = registerUser