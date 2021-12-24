const { models: { Message }, mongoose: { Schema: { Types: { ObjectId }}} } = require('mynutrition-data')
const { sanitizeMessage } = require('./helpers/sanitizers') 
const { NotFoundError } = require('mynutrition-errors')

async function retrieveMessages(id) {
    // TODO validate args

    let messages = await Message.find()/*.select({ _id: 1, parent: 1 })*/.lean()

    const roots = messages.filter(message => !message.parent)

    // function findChild(messageId) {
    //     return messages.find(message => message.parent && message.parent.toString() === messageId)
    // }

    // messages = roots.reduce((accum, root) => {
    //     let lastMessage

    //     function findChildToMeRecursive(message) {
    //         const child = findChild(message._id.toString())
    
    //         if (child) {
    //             if (child.to.toString() === id) {
    //                 lastMessage = child
    //             }

    //             findChildToMeRecursive(child)
    //         }
    //     }

    //     findChildToMeRecursive(root)
        
    //     if (!lastMessage && (root.to.toString() === id || root.from.toString() === id))
    //         lastMessage = root
        
    //     lastMessage && accum.push(lastMessage)
        
    //     return accum
    // }, [])


    function findChild(messageId) {
        return messages.find(message => message.parent && message.parent.toString() === messageId)
    }

    function findLastChild(message) {
        const child = findChild(message._id.toString())

        if (child)
            return findLastChild(child)

        return message
    }


    messages = roots.reduce((accum, root) => {
        const lastMessage = findLastChild(root)
        
        if (root.to.toString() === id || root.from.toString() === id)
            accum.push(lastMessage)
        
        return accum
    }, [])
    
    debugger

    if(!messages)
        throw new NotFoundError('There are no messages')

    messages.forEach(sanitizeMessage)

    return messages
}

module.exports = retrieveMessages