const{addNote}=require('inmymind-logic')
const {handleError}=require('./helpers')

module.exports=(req,res)=>{
    const{body:{content,date,user_id}}=req
    try{

        let dateF = new Date(date);
        addNote(content,dateF,user_id)
        .then(()=>res.status(201).send())
        .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

