const { ConflictError } = require('mynutrition-errors')
const { validateSubject, validateBody   } = require('./helpers/validators')
const { models: { Message } } = require('mynutrition-data')
const bcrypt = require('bcryptjs')

function sendEmail(parent, from, to, subject, body, date){

    validateSubject(subject)
    validateBody(body)

    return (async () => {
        try{
            //await Message.create({parent, from, to, subject, body, date})
            return await Message.create({parent, from, to, subject: bcrypt.hashSync(subject), body: bcrypt.hashSync(body), date})
            
        } catch(error){
            debugger
            throw error
        }
    })()
 
}

module.exports = sendEmail