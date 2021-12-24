const { models: { User } } = require('mynutrition-data')
const { validateId, validatePassword } = require('./helpers/validators')
const { NotFoundError, ConflictError, CredentialsError } = require('mynutrition-errors')
const bcrypt = require('bcryptjs')

async function unregisterUser(id, password) {
    validateId(id)
    validatePassword(password)
debugger
    return (async () =>{
        const user = await User.findById({_id: id})

        if (!user) throw new NotFoundError(`user with id ${id} not found`)
        if (!bcrypt.compareSync(user.password, password))
            throw new CredentialsError('Wrong credentials')
        else
            await User.deleteOne({id: id})
            return ('User deleted successfully')
    })()
}

module.exports = unregisterUser