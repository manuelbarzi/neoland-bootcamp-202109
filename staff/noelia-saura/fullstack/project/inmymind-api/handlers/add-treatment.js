const{addTreatment}=require('inmymind-logic')
const {handleError}=require('./helpers')

module.exports=(req,res)=>{
    const{body:{content,date,user_id}}=req
    try{
        addTreatment(content,date,user_id)
        .then(()=>res.status(201).send())
        .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

