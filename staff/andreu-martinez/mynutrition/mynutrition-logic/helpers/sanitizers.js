function sanitizeDocument(doc) {
    doc.id = doc._id.toString()

    delete doc._id
    delete doc.__v
}

function sanitizeMessage(message) {
    sanitizeDocument(message)

    message.from = message.from.toString()
    message.to = message.to.toString()
}

module.exports = { sanitizeDocument, sanitizeMessage }