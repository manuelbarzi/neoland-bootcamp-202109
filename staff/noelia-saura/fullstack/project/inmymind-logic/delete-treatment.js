const { validateId } = require('./helpers/validators')
const { models: { Treatment } } = require('inmymind-data')


function deleteTreatment(treatment_id) {
  
    validateId(treatment_id)
    
    return Treatment.deleteOne({_id:treatment_id})
        .then(() => { })
        .catch(error => {
            
            throw error
        })
}

module.exports = deleteTreatment