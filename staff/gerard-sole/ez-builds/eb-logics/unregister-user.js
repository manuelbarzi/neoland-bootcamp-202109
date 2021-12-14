const { mongoose, models: { User } } = require('eb-data')
const { validateId, validatePassword } = require('./helpers/validators')
const { NotFoundError, CredentialsError } = require('eb-errors')

function unregisterUser(id, password, callback) {
    validateId(id)
    validatePassword(password)

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            
            if (user.password === password) {
                return user.remove(id)
                    .then(() => 'User deleted successfully')
            } else throw new CredentialsError('Wrong password')
        })

}

module.exports = unregisterUser