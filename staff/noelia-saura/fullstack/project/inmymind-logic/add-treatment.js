const { validateTreatment,validateId,validateDate } = require('./helpers/validators')
const { models: { Treatment } } = require('inmymind-data')

/**
 * 
 * @param {string} content 
 * @param {date} date
 * @param {string} user_id
 * @returns {Promise<undefined>}
 * 
 * @throws {TypeError}
 * @throws {FormatError}
*/
const addTreatment = (content,date,user_id)=> {
    
    validateTreatment(content)
    validateId(user_id)
    validateDate(date)

    return (async()=>{
        const treatment = await Treatment.create({content,date,user_id})
        
        if(!treatment)throw error
    })()
   
}

module.exports = addTreatment