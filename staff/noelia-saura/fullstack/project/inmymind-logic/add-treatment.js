const { validateTreatment,validateId,validateDate } = require('./helpers/validators')
const { models: { Treatment } } = require('inmymind-data')


function addTreatment(content,date,user_id) {
    
    validateTreatment(content)
    validateId(user_id)
    validateDate(date)

    return Treatment.create({content,date,user_id})
        .then(() => { })
        .catch(error => {
            
            throw error
        })
}

module.exports = addTreatment