const { models: { User }, mongoose: { Types: { ObjectId } } } = require('mynutrition-data')
const { NotFoundError } = require('mynutrition-errors')
const { sanitizeDocument } = require('./helpers/sanitizers') 

async function retrieveUserById(id) {
    // TODO validate args

    //const messages = await Message.find((id) ? { id } : null).lean()
    const user = await User.findById( id ).lean()
    //const user = await User.find({ _id: new ObjectId ( id ) }).lean()
    if(!user)
        throw new NotFoundError(`There are no users with that ${id}`)

    sanitizeDocument(user)

    return user
}

module.exports = retrieveUserById