const { models: { Treatment } } = require('inmymind-data')
const { validateId, validateDate } = require('./helpers/validators')


function retrieveTreatment(user_id, date) {
    validateId(user_id)

    let filter={user_id:user_id}

    if(date){
        validateDate(date)

        const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
    
        const dateFormat = year + '-' + month + '-' + day

        filter={user_id:user_id,date: dateFormat}
    }

    return Treatment.find(filter).sort({ date: -1}).lean()
        .then(treatments => {
            for (let index = 0; index < treatments.length; index++) {

                treatments[index].id=treatments[index]._id.toString()

                delete treatments[index]._id
                delete treatments[index].user_id
                delete treatments[index].__v

            }
        
            return treatment
        })
}

module.exports = retrieveTreatment