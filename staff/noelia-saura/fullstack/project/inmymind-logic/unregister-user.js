const { mongoose, models: { User } } = require('inmymind-data')
const { validateId, validatePassword } = require('./helpers/validators')
const { NotFoundError, CredentialsError } = require('inmymind-errors')

/**
 * 
 * @param {string} id 
 * @param {string} password
 * @returns {Promise<undefined>}
 * 
 * @throws {NotFoundError}
 * @throws {TypeError}
 * @throws {FormatError}
 * @throws {CredentialsError}
*/
const unregisterUser = (id, password) => {
    validateId(id)
    validatePassword(password)

    return (async() =>{
        const user = await User.findById(id)
        if (!user) throw new NotFoundError(`user with id ${id} not found`)
            
            if (user.password === password) {
                return user.remove(id)
                    .then(() => undefined)
            } else throw new CredentialsError('Wrong password')
    })()

}

module.exports = unregisterUser