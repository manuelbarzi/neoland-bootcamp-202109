const{deleteTreatment}=require('inmymind-logic')
const {handleError}=require('./helpers')

module.exports=(req,res)=>{
    let treatment_id = req.params.id
    try{
        deleteTreatment(treatment_id)
        .then(()=>res.status(204).send())
        .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}
