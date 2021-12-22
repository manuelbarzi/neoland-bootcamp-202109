const { models: { Message }, mongoose: { Types: { ObjectId } } } = require('mynutrition-data')
const { NotFoundError } = require('mynutrition-errors')
const { sanitizeMessage } = require('./helpers/sanitizers') 

async function retrieveMessage(messageId) {
    // TODO validate args

    const message = await Message.findById( messageId ).lean()

    if(!message)
        throw new NotFoundError('There are no messages')

    sanitizeMessage(message)

    return message
}

module.exports = retrieveMessage