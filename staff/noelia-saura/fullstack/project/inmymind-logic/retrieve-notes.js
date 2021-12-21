const { models: { Note } } = require('inmymind-data')
const { validateId, validateDate } = require('./helpers/validators')

/**
 * 
 * @param {string} user_id
 * @param {date} date
 * 
 * @returns {Promise<Note[]>}
 * 
 * @throws {TypeError}
 * @throws {FormatError}
*/
const retrieveNotes = (user_id, date)=>{
    validateId(user_id)

    let filter = { user_id: user_id };

    if (date) {
        validateDate(date)

        const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        const dateFormat = year + '-' + month + '-' + day

        filter = { user_id: user_id, date: dateFormat };
    }

    return (async ()=>{
        const notes = await Note.find(filter).sort( { date: -1 } ).lean()
        if (!notes) throw new NotFoundError(`notes with id ${id} not found`)

        for (let index = 0; index < notes.length; index++) {

            notes[index].id = notes[index]._id.toString()

            delete notes[index]._id
            delete notes[index].user_id
            delete notes[index].__v
            
     }
     return notes
     })()

}

module.exports = retrieveNotes