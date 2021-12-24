const { ConflictError } = require('mynutrition-errors')
const { validateSubject, validateBody } = require('./helpers/validators')
const { models: { Message } } = require('mynutrition-data')

function sendMessage(parent, from, to, subject, body, sentDate){

    validateSubject(subject)
    validateBody(body)

    return (async () => {
        try{

            const read = false
            const user = await Message.create({parent, from, to, subject: subject, body: body, sentDate, read})

            return user.id // return string with hash id
            
        } catch(error){
            throw error
        }
    })()
 
}

module.exports = sendMessage