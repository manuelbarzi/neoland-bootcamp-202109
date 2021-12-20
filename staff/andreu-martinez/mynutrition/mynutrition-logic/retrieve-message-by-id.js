const { models: { Message }, mongoose: { Types: { ObjectId } } } = require('mynutrition-data')
const { NotFoundError } = require('mynutrition-errors')
const { sanitizeMessage } = require('./helpers/sanitizers') 

async function retrieveMessageById(messageId) {
    // TODO validate args

    //const messages = await Message.find((id) ? { id } : null).lean()
    const message = await Message.findById( messageId ).lean()
    //const message = await Message.find({ _id: new ObjectId ( messageId ) }).lean()

    debugger
    if(!message)
        throw new NotFoundError('There are no messages')

    sanitizeMessage(message)

    return message
}

module.exports = retrieveMessageById