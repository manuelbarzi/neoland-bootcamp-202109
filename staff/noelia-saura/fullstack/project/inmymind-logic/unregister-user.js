const { mongoose, models: { User } } = require('inmymind-data')
const { validateId, validatePassword } = require('./helpers/validators')
const { NotFoundError, CredentialsError } = require('inmymind-errors')


const unregisterUser = (id, password, callback) => {
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