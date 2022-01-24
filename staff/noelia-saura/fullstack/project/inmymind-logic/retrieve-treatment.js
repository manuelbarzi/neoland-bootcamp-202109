const { models: { Treatment } } = require('inmymind-data')
const { validateId, validateDate } = require('./helpers/validators')

/**
 * 
 * @param {date} date Date when occurs this diary
 * @param {string} user_id
 * 
 * @returns {Promise<Treatment[]>}
 * 
 * @throws {TypeError}
 * @throws {FormatError}
*/
const retrieveTreatment = (user_id, date) => {
    validateId(user_id)

    let filter={user_id:user_id}

    if(date){
        validateDate(date)
        
        const dateFormat = date.getFullYear() + '-'
        + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) 
            

        filter={user_id:user_id,date: dateFormat}
    }
    
    return (async ()=>{
        const treatments = await Treatment.find(filter).sort({ date: -1}).lean()
        
        if (!treatments) throw new NotFoundError(`treatments with id ${id} not found`)

        for (let index = 0; index < treatments.length; index++) {
            treatments[index].id = treatments[index]._id.toString()

            delete treatments[index]._id
            delete treatments[index].user_id
            delete treatments[index].__v

        }
    
        return treatments
    
    })()
    
}

module.exports = retrieveTreatment