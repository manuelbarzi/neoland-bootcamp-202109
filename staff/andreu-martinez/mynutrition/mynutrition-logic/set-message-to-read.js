const { models: { Message }, mongoose: { Types: { ObjectId } } } = require('mynutrition-data')
const { NotFoundError } = require('mynutrition-errors')


async function setMessageToRead(myId, data) {
    // TODO validate args
    const {id, read} = data
    var myquery = { _id: ObjectId(id) }
    var newvalues = { $set: {read: read} }

    await Message.updateOne(myquery, newvalues)

    // if(message.to === id)
    //     await Message.updateOne( {message}, {read: read} )
    
    // if(message.to === id)
    // {
    //     await Message.updateOne( {message}, {read: read} )


    //     messagesChain.forEach(sanitizeMessage)
    //     debugger
    //     return messagesChain
    // }
}

module.exports = setMessageToRead