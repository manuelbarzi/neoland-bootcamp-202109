const { models: { Message }, mongoose: { Types: { ObjectId } } } = require('mynutrition-data')
const { validateId } = require('./helpers/validators')

async function setMessageToRead(id, messageId) {
    validateId(messageId)
debugger
    const message = await Message.findById(messageId)

    if((message.read === false) && (message.to.toString() === id)){
        var myquery = { _id: ObjectId(messageId) }
        var newvalues = { $set: {read: true } }
        await Message.updateOne(myquery, newvalues)
    }    
}

module.exports = setMessageToRead