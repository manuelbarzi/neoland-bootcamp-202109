const { models: { User } } = require('mynutrition-data')
const { NotFoundError } = require('mynutrition-errors')
const { sanitizeDocument } = require('./helpers/sanitizers') 

async function retrieveUsers() {
    
    const users = await User.find({}).lean()
    
    if (!users)
        throw new NotFoundError(`Database is empty`)
    
    users.forEach(sanitizeDocument)
    // users.forEach( e => sanitizeDocument ( e ))

    return users
}

module.exports = retrieveUsers