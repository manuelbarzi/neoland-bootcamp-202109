const { models: { User } } = require('mynutrition-data')
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('mynutrition-errors')

async function retrieveUsers(id) {
    validateId(id)
    
    const user = await User.findById(id).lean()
    if (!user)
        throw new NotFoundError(`user with id ${id} not found`)
    user.id = user._id.toString()
    delete user._id
    delete user.password
    delete user.__v
    return user
}

module.exports = retrieveUsers