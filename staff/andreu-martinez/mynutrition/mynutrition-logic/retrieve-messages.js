const { models: { Message } } = require('mynutrition-data')
const { sanitizeMessage } = require('./helpers/sanitizers') 
const { NotFoundError } = require('mynutrition-errors')

async function retrieveMessages(id) {
    // TODO validate args

    //const messages = await Message.find((id) ? { id } : null).lean()
    let messages = await Message.find({to: id}).lean()

    if(!messages)
        throw new NotFoundError('There are no messages')

    messages.forEach(sanitizeMessage)

    return messages
}

module.exports = retrieveMessages