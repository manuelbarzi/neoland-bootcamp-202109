const { models: { Note } } = require('inmymind-data')
const { validateId, validateDate } = require('./helpers/validators')


function retrieveNotes(user_id, date) {
    validateId(user_id)
    validateDate(date)

    const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const dateFormat = year + '-' + month + '-' + day

    return Note.find({ user_id: user_id, date: dateFormat }).lean()
        .then(notes => {
            for (let index = 0; index < notes.length; index++) {

                delete notes[index]._id
                delete notes[index].user_id
                delete notes[index].__v

            }
            // note.id = note._id.toString()
            return notes
        })
}

module.exports = retrieveNotes