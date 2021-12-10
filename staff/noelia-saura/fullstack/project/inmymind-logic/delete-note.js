const { validateId } = require('./helpers/validators')
const { models: { Note } } = require('inmymind-data')


function deleteNote(note_id) {
  
    validateId(note_id)
    
    return Note.deleteOne({ _id: note_id })
        .then(() => { })
        .catch(error => {
            
            throw error
        })
}

module.exports = deleteNote