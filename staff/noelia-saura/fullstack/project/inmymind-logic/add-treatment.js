const { validateTreatment,validateId,validateDate } = require('./helpers/validators')
const { models: { Treatment } } = require('inmymind-data')


const addTreatment = (content,date,user_id)=> {
    
    validateTreatment(content)
    validateId(user_id)
    validateDate(date)

    return (async()=>{
        const treatment = await Treatment.create({content,date,user_id})
        
        if(!treatment)throw error

        return treatment.id
    })()
   
}

module.exports = addTreatment