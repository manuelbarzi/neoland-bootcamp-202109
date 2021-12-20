const { models: { User } } = require('mynutrition-data')
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('mynutrition-errors')
const { sanitizeDocument } = require('./helpers/sanitizers')
async function retrieveUser(id) {
    
    validateId(id)
    
    const user = await User.findById(id).lean()
    if (!user)
        throw new NotFoundError(`user with id ${id} not found`)
    
    sanitizeDocument(user)

    delete user.password
    
    return user
}

module.exports = retrieveUser