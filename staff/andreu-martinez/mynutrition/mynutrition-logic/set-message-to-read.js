const { ConflictError } = require('mynutrition-errors')

const { models: { Message } } = require('mynutrition-data')

function setMessageToRead(read){

    return (async () => {
        try{

            const user = await Message.create({parent, from, to, subject: subject, body: body, sentDate, read})

            return user.id // return string with hash id
            
        } catch(error){
            throw error
        }
    })()
 
}

module.exports = setMessageToRead