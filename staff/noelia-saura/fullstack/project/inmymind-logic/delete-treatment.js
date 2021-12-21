const { validateId } = require('./helpers/validators')
const { models: { Treatment } } = require('inmymind-data')

/**
 * 
 * @param {string} treatment_id
 * 
 * @returns {Promise<undefined>}
 * 
 * @throws {TypeError}
 * @throws {FormatError}
 */
const deleteTreatment = (treatment_id) => {
  
    validateId(treatment_id)
    
    return (async()=>{
        const treatment = await Treatment.deleteOne({_id:treatment_id})

        if(!treatment)throw error

        return treatment.id
    })()
}

module.exports = deleteTreatment