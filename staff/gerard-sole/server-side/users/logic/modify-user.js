

const { mongoose, models: { User } } = require('data')
const { validateId, validateData } = require('./helpers/validators')
const { NotFoundError, ConflictError, CredentialsError } = require('app-errors')

/**
 * Updating the user data in the application.
 * 
 * @param {string} id The id to authenticate the retrieve user.
 * @param {Object} data All data of user to be changed.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function modifyUser(id, data,) {
    validateId(id)
    validateData(data)

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            const { password, oldPassword } = data

            if (password) {
                if (oldPassword !== user.password)
                    throw new CredentialsError('wrong password')
                else
                    delete data.oldPassword
            }

            for (const property in data)
                user[property] = data[property]

            return user.save()
                .catch(error => {
                    if (error.code === 11000)
                        throw new ConflictError(`user with username ${data.username} already exists`)

                    throw error
                })
                .then(() => {})
        })
}

module.exports = modifyUser