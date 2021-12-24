const { models: { Message }, mongoose: { Schema: { ObjectId } } } = require('mynutrition-data')
const { NotFoundError } = require('mynutrition-errors')
const { sanitizeMessage } = require('./helpers/sanitizers')

async function retrieveMessagesChain(messageId) {
    // TODO validate args

    let messages = []
    let message = await Message.findOne({ _id: messageId }).lean()
    messages.push(message)

    message = await Message.findById(message.parent).lean()

    while (message) {
        messages.splice(0, 0, message)

        message = await Message.findById(message.parent).lean()
    }

    message = await Message.findOne({ parent: messageId }).lean()

    while (message) {
        messages.push(message)

        message = await Message.findOne({ parent: message._id }).lean()
    }

    messages.forEach(sanitizeMessage)

    return messages
}

module.exports = retrieveMessagesChain