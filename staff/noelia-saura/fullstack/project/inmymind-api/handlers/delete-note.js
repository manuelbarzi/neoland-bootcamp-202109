const{deleteNote}=require('inmymind-logic')
const {handleError}=require('./helpers')

module.exports=(req,res)=>{
    let note_id = req.params.id

    try{
        deleteNote(note_id)
        .then(()=>res.status(204).send())
        .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

