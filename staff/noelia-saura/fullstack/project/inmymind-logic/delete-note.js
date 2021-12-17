const { validateId } = require('./helpers/validators')
const { models: { Note } } = require('inmymind-data')


const deleteNote = (note_id) => {
  
    validateId(note_id)
    
    return (async()=>{
        const note = await Note.deleteOne({ _id: note_id })
        if(!note)throw error

        return note.id
    })()
}

module.exports = deleteNote