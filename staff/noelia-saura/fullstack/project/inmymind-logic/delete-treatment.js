const { validateId } = require('./helpers/validators')
const { models: { Treatment } } = require('inmymind-data')


const deleteTreatment = (treatment_id) => {
  
    validateId(treatment_id)
    
    return (async()=>{
        const treatment = await Treatment.deleteOne({_id:treatment_id})

        if(!treatment)throw error

        return treatment.id
    })()
}

module.exports = deleteTreatment