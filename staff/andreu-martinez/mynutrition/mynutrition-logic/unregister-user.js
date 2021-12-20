const { models: { User } } = require('mynutrition-data')
const { validateId, validatePassword } = require('./helpers/validators')
const { NotFoundError, ConflictError, CredentialsError } = require('mynutrition-errors')
const bcrypt = require('bcryptjs')

async function unregisterUser(id, password) {
    validateId(id)
    validatePassword(password)

    return (async () =>{
        const user = await User.findById(id)

        if (!user) throw new NotFoundError(`user with id ${id} not found`)
        if (!bcrypt.compareSync(user.password, password))
            throw new CredentialsError('Wrong credentials')
        else
            await user.remove()

            return ('User deleted successfully')
    })()
}

module.exports = unregisterUser