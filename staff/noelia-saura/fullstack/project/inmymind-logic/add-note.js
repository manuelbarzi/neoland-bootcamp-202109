const { validateNote,validateId,validateDate } = require('./helpers/validators')
const { models: { Note } } = require('inmymind-data')


const addNote = (content,date,user_id) => {
    validateNote(content)
    validateId(user_id)
    validateDate(date)
   
    return(async()=>{
        const note = await Note.create({
            content,
            date,
            user_id
        })
        if(!note)throw error

        return note.id
    }) ()

}

module.exports = addNote