const { validateNote,validateId,validateDate } = require('./helpers/validators')
const { models: { Note } } = require('inmymind-data')


function addNote(content,date,user_id) {
    validateNote(content)
    validateId(user_id)
    validateDate(date)

    return Note.create({
        content,
        date,
        user_id
    })
        .then(() => { })
        .catch(error => {
            
            throw error
        })
}

module.exports = addNote